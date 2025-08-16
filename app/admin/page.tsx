"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ButtonAccount from '@/components/ButtonAccount';

interface User {
  _id: string;
  name?: string;
  email: string;
  role: 'user' | 'customer' | 'admin';
  hasAccess: boolean;
  customerId?: string;
  priceId?: string;
  createdAt: string;
  updatedAt: string;
}

interface Stats {
  users: {
    total: number;
    admins: number;
    customers: number;
    regular: number;
    paid: number;
    recent: number;
  };
  leads: {
    total: number;
    recent: number;
  };
  trends: {
    dailySignups: Array<{ date: string; count: number; }>;
  };
}

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
      return;
    }

    if (status === 'authenticated') {
      checkAdminAccess();
    }
  }, [status, router]);

  const checkAdminAccess = async () => {
    try {
      // Try to fetch admin stats to verify admin access
      const response = await fetch('/api/admin/stats');
      if (response.status === 403) {
        router.push('/dashboard');
        return;
      }
      if (response.ok) {
        const data = await response.json();
        setStats(data.stats);
      }
      await fetchUsers();
    } catch (error) {
      console.error('Error checking admin access:', error);
      router.push('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const updateUser = async (userId: string, updates: { role?: string; hasAccess?: boolean }) => {
    try {
      const response = await fetch('/api/admin/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, ...updates }),
      });

      if (response.ok) {
        setMessage('User updated successfully');
        await fetchUsers();
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Error updating user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
      setMessage('Error updating user');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white">Loading admin panel...</div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'users', name: 'User Management', icon: '👥' },
    { id: 'analytics', name: 'Analytics', icon: '📈' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
  ];

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-500';
      case 'customer': return 'bg-green-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <img
                  src="/cropped_image_ (1)-Picsart-BackgroundRemover.png"
                  alt="Cocofuel"
                  className="h-10 w-auto hover:opacity-80 transition-opacity"
                />
              </Link>
              <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
              <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                ADMIN ONLY
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                </svg>
                Dashboard
              </Link>
              <ButtonAccount />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success/Error Message */}
        {message && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg mb-6 ${
              message.includes('successfully') 
                ? 'bg-green-900 text-green-300' 
                : 'bg-red-900 text-red-300'
            }`}
          >
            {message}
          </motion.div>
        )}

        {/* Tabs */}
        <div className="border-b border-slate-700 mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-coral text-coral'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Overview Tab */}
          {activeTab === 'overview' && stats && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Site Overview</h2>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-slate-800 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Users</p>
                      <p className="text-3xl font-bold text-white">{stats.users.total}</p>
                    </div>
                    <div className="bg-blue-500 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-green-400 text-sm mt-2">+{stats.users.recent} this month</p>
                </div>

                <div className="bg-slate-800 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Paid Users</p>
                      <p className="text-3xl font-bold text-white">{stats.users.paid}</p>
                    </div>
                    <div className="bg-green-500 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">{((stats.users.paid / stats.users.total) * 100).toFixed(1)}% conversion</p>
                </div>

                <div className="bg-slate-800 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Leads</p>
                      <p className="text-3xl font-bold text-white">{stats.leads.total}</p>
                    </div>
                    <div className="bg-amber p-3 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm3 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-green-400 text-sm mt-2">+{stats.leads.recent} this month</p>
                </div>

                <div className="bg-slate-800 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Admin Users</p>
                      <p className="text-3xl font-bold text-white">{stats.users.admins}</p>
                    </div>
                    <div className="bg-red-500 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-2.257-.257A6 6 0 1118 8zm-1.148 3.148a2 2 0 10-2.828-2.828 2 2 0 002.828 2.828zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">System administrators</p>
                </div>
              </div>

              {/* Recent Signups Chart */}
              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Daily Signups (Last 7 Days)</h3>
                <div className="flex items-end space-x-2 h-32">
                  {stats.trends.dailySignups.map((day, index) => (
                    <div key={day.date} className="flex flex-col items-center flex-1">
                      <div 
                        className="bg-coral w-full rounded-t"
                        style={{ height: `${Math.max(day.count * 20, 4)}px` }}
                      />
                      <span className="text-xs text-gray-400 mt-2">{day.date.split('-')[2]}</span>
                      <span className="text-xs text-white">{day.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* User Management Tab */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-white">User Management</h2>
                <div className="text-sm text-gray-400">
                  {users.length} total users
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-700">
                    <thead className="bg-slate-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Access</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Customer ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Joined</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                      {users.map((user) => (
                        <tr key={user._id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-white">{user.name || 'No name'}</div>
                              <div className="text-sm text-gray-400">{user.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <select
                              value={user.role}
                              onChange={(e) => updateUser(user._id, { role: e.target.value })}
                              className="bg-slate-700 text-white rounded px-2 py-1 text-sm border border-slate-600"
                            >
                              <option value="user">User</option>
                              <option value="customer">Customer</option>
                              <option value="admin">Admin</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button
                              onClick={() => updateUser(user._id, { hasAccess: !user.hasAccess })}
                              className={`px-2 py-1 rounded text-xs font-semibold ${
                                user.hasAccess 
                                  ? 'bg-green-500 text-white' 
                                  : 'bg-gray-500 text-white'
                              }`}
                            >
                              {user.hasAccess ? 'Active' : 'Inactive'}
                            </button>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                            {user.customerId || 'None'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                            {new Date(user.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className={`px-2 py-1 rounded text-xs font-semibold text-white ${getRoleBadgeColor(user.role)}`}>
                              {user.role.toUpperCase()}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && stats && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Analytics & Insights</h2>

              {/* Role Distribution */}
              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">User Role Distribution</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">{stats.users.regular}</div>
                    <div className="text-gray-300">Regular Users</div>
                    <div className="text-sm text-gray-400">
                      {((stats.users.regular / stats.users.total) * 100).toFixed(1)}%
                    </div>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">{stats.users.customers}</div>
                    <div className="text-gray-300">Customers</div>
                    <div className="text-sm text-gray-400">
                      {((stats.users.customers / stats.users.total) * 100).toFixed(1)}%
                    </div>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-400">{stats.users.admins}</div>
                    <div className="text-gray-300">Administrators</div>
                    <div className="text-sm text-gray-400">
                      {((stats.users.admins / stats.users.total) * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Growth Metrics */}
              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Growth Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-coral">{stats.users.recent}</div>
                    <div className="text-gray-300">New Users (30 days)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber">{stats.leads.recent}</div>
                    <div className="text-gray-300">New Leads (30 days)</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Site Settings</h2>

              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">System Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-gray-300">Application Name</span>
                    <span className="text-white">Cocofuel</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-gray-300">Environment</span>
                    <span className="text-white">{process.env.NODE_ENV || 'development'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-gray-300">Current Admin</span>
                    <span className="text-white">{session?.user?.email}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Last Updated</span>
                    <span className="text-white">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="bg-slate-700 hover:bg-slate-600 text-white p-4 rounded-lg text-left transition-colors">
                    <div className="font-semibold">Export User Data</div>
                    <div className="text-sm text-gray-400">Download user list as CSV</div>
                  </button>
                  <button className="bg-slate-700 hover:bg-slate-600 text-white p-4 rounded-lg text-left transition-colors">
                    <div className="font-semibold">Export Analytics</div>
                    <div className="text-sm text-gray-400">Download analytics report</div>
                  </button>
                  <button className="bg-slate-700 hover:bg-slate-600 text-white p-4 rounded-lg text-left transition-colors">
                    <div className="font-semibold">System Backup</div>
                    <div className="text-sm text-gray-400">Create database backup</div>
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-lg text-left transition-colors">
                    <div className="font-semibold">Clear Cache</div>
                    <div className="text-sm text-red-200">Clear application cache</div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
