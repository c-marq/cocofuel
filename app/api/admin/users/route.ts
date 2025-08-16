import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/libs/next-auth';
import connectMongo from '@/libs/mongoose';
import User from '@/models/User';
import { isAdmin } from '@/libs/auth';

// GET - Fetch all users (admin only)
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const hasAdminAccess = await isAdmin();
    if (!hasAdminAccess) {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
    }

    await connectMongo();
    
    const users = await User.find({})
      .select('name email role hasAccess customerId priceId createdAt updatedAt')
      .sort({ createdAt: -1 });

    return NextResponse.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT - Update user (admin only)
export async function PUT(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const hasAdminAccess = await isAdmin();
    if (!hasAdminAccess) {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
    }

    const body = await req.json();
    const { userId, role, hasAccess } = body;

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    await connectMongo();
    
    const updateData: any = {};
    if (role) updateData.role = role;
    if (hasAccess !== undefined) updateData.hasAccess = hasAccess;
    updateData.updatedAt = new Date();

    const user = await User.findByIdAndUpdate(userId, updateData, { new: true });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      message: 'User updated successfully',
      user 
    });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
