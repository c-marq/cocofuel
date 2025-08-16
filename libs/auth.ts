import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/libs/next-auth';
import connectMongo from '@/libs/mongoose';
import User from '@/models/User';

// Get current user session with role information
export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    return null;
  }

  await connectMongo();
  
  const user = await User.findOne({ email: session.user.email });
  
  return user;
}

// Check if user has specific role
export async function hasRole(requiredRole: 'user' | 'customer' | 'admin') {
  const user = await getCurrentUser();
  
  if (!user) return false;
  
  const roleHierarchy = {
    user: 1,
    customer: 2, 
    admin: 3
  };
  
  const userRoleLevel = roleHierarchy[user.role as keyof typeof roleHierarchy] || 1;
  const requiredRoleLevel = roleHierarchy[requiredRole];
  
  return userRoleLevel >= requiredRoleLevel;
}

// Check if user is admin
export async function isAdmin() {
  return await hasRole('admin');
}

// Check if user is customer or higher
export async function isCustomer() {
  return await hasRole('customer');
}

// Middleware function to protect routes by role
export function requireRole(requiredRole: 'user' | 'customer' | 'admin') {
  return async function(req: any, res: any, next: any) {
    const hasRequiredRole = await hasRole(requiredRole);
    
    if (!hasRequiredRole) {
      return Response.json(
        { error: 'Insufficient permissions' }, 
        { status: 403 }
      );
    }
    
    next();
  };
}
