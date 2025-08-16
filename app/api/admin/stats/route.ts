import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/libs/next-auth';
import connectMongo from '@/libs/mongoose';
import User from '@/models/User';
import Lead from '@/models/Lead';
import { isAdmin } from '@/libs/auth';

// GET - Fetch site statistics (admin only)
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
    
    // Get user statistics
    const totalUsers = await User.countDocuments({});
    const adminUsers = await User.countDocuments({ role: 'admin' });
    const customerUsers = await User.countDocuments({ role: 'customer' });
    const regularUsers = await User.countDocuments({ role: 'user' });
    const paidUsers = await User.countDocuments({ hasAccess: true });
    
    // Get recent users (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentUsers = await User.countDocuments({ 
      createdAt: { $gte: thirtyDaysAgo } 
    });

    // Get lead statistics
    const totalLeads = await Lead.countDocuments({});
    const recentLeads = await Lead.countDocuments({ 
      createdAt: { $gte: thirtyDaysAgo } 
    });

    // Get user registration trend (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const dailySignups = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      
      const count = await User.countDocuments({
        createdAt: { $gte: startOfDay, $lte: endOfDay }
      });
      
      dailySignups.push({
        date: date.toISOString().split('T')[0],
        count
      });
    }

    const stats = {
      users: {
        total: totalUsers,
        admins: adminUsers,
        customers: customerUsers,
        regular: regularUsers,
        paid: paidUsers,
        recent: recentUsers
      },
      leads: {
        total: totalLeads,
        recent: recentLeads
      },
      trends: {
        dailySignups
      }
    };

    return NextResponse.json({ stats });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
