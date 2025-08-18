"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ButtonAccount from '@/components/ButtonAccount';

interface UserProfile {
  _id?: string;
  name?: string;
  email?: string;
  image?: string;
  role?: 'user' | 'customer' | 'admin';
  phone?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
  dateOfBirth?: string;
  preferences?: {
    newsletter?: boolean;
    notifications?: boolean;
  };
}

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
      return;
    }

    if (status === 'authenticated') {
      fetchProfile();
    }
  }, [status, router]);

  const fetchProfile = async () => {
    try {
      const response = await fetch('/api/user/profile');
      if (response.ok) {
        const data = await response.json();
        setProfile(data.user || {});
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    try {
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });

      if (response.ok) {
        setMessage('Profile updated successfully!');
      } else {
        setMessage('Error updating profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('Error updating profile');
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddressChange = (field: string, value: string) => {
    setProfile(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value
      }
    }));
  };

  const handlePreferenceChange = (field: string, value: boolean) => {
    setProfile(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [field]: value
      }
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F0FDFA] via-[#ECFDF5] to-[#F0F9FF] flex items-center justify-center">
        <div className="text-[#134E4A] font-primary">Loading...</div>
      </div>
    );
  }

  const getRoleBadgeColor = (role?: string) => {
    switch (role) {
      case 'admin': return 'bg-red-500';
      case 'customer': return 'bg-green-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0FDFA] via-[#ECFDF5] to-[#F0F9FF] relative overflow-hidden">
      {/* Floating organic shapes */}
      <motion.div 
        animate={{ 
          y: [-35, 35],
          rotate: [0, 12],
          scale: [1, 1.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute top-32 right-20 w-52 h-52 bg-gradient-to-br from-[#14B8A6]/12 to-[#06B6D4]/8 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          y: [30, -30],
          rotate: [0, -10],
          scale: [1.5, 1]
        }}
        transition={{ 
          duration: 9, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1.5
        }}
        className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-[#F59E0B]/18 to-[#10B981]/12 rounded-full blur-2xl"
      />

      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm border-b border-[#14B8A6]/20 shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <img
                  src="/cropped_image_ (1)-Picsart-BackgroundRemover.png"
                  alt="Cocofuel"
                  className="h-10 w-auto hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <h1 className="text-2xl font-bold text-[#134E4A] font-secondary">Profile Settings</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-[#134E4A]/70 hover:text-[#134E4A] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
                Back to Dashboard
              </Link>
              <ButtonAccount />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-sm border border-[#14B8A6]/20 rounded-2xl shadow-2xl p-8"
        >
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              {session?.user?.image && (
                <motion.img
                  src={session.user.image}
                  alt="Profile"
                  className="w-16 h-16 rounded-full border-4 border-[#14B8A6]/30 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <div>
                <h1 className="text-3xl font-bold text-[#134E4A] font-secondary">Profile Management</h1>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#134E4A]/70 font-primary">Role:</span>
                  <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${getRoleBadgeColor(profile.role)}`}>
                    {profile.role?.toUpperCase() || 'USER'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Success/Error Message */}
          {message && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl mb-6 border font-primary ${
                message.includes('successfully') 
                  ? 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20' 
                  : 'bg-red-500/10 text-red-600 border-red-500/20'
              }`}
            >
              {message}
            </motion.div>
          )}

          {/* Profile Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#134E4A] mb-2 font-secondary">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profile.name || ''}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 bg-white/80 border border-[#14B8A6]/30 rounded-xl text-[#134E4A] focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition-all duration-300 font-primary backdrop-blur-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#134E4A] mb-2 font-secondary">
                  Email
                </label>
                <input
                  type="email"
                  value={session?.user?.email || ''}
                  disabled
                  className="w-full px-4 py-3 bg-white/50 border border-[#14B8A6]/20 rounded-xl text-[#134E4A]/60 cursor-not-allowed font-primary backdrop-blur-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#134E4A] mb-2 font-secondary">
                  Phone
                </label>
                <input
                  type="tel"
                  value={profile.phone || ''}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 bg-white/80 border border-[#14B8A6]/30 rounded-xl text-[#134E4A] focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition-all duration-300 font-primary backdrop-blur-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#134E4A] mb-2 font-secondary">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={profile.dateOfBirth || ''}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className="w-full px-4 py-3 bg-white/80 border border-[#14B8A6]/30 rounded-xl text-[#134E4A] focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition-all duration-300 font-primary backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-xl font-semibold text-[#134E4A] mb-4 font-secondary">Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#134E4A] mb-2 font-secondary">
                    Street Address
                  </label>
                  <input
                    type="text"
                    value={profile.address?.street || ''}
                    onChange={(e) => handleAddressChange('street', e.target.value)}
                    className="w-full px-4 py-3 bg-white/80 border border-[#14B8A6]/30 rounded-xl text-[#134E4A] focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition-all duration-300 font-primary backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#134E4A] mb-2 font-secondary">
                    City
                  </label>
                  <input
                    type="text"
                    value={profile.address?.city || ''}
                    onChange={(e) => handleAddressChange('city', e.target.value)}
                    className="w-full px-4 py-3 bg-white/80 border border-[#14B8A6]/30 rounded-xl text-[#134E4A] focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition-all duration-300 font-primary backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#134E4A] mb-2 font-secondary">
                    State
                  </label>
                  <input
                    type="text"
                    value={profile.address?.state || ''}
                    onChange={(e) => handleAddressChange('state', e.target.value)}
                    className="w-full px-4 py-3 bg-white/80 border border-[#14B8A6]/30 rounded-xl text-[#134E4A] focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition-all duration-300 font-primary backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#134E4A] mb-2 font-secondary">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    value={profile.address?.zipCode || ''}
                    onChange={(e) => handleAddressChange('zipCode', e.target.value)}
                    className="w-full px-4 py-3 bg-white/80 border border-[#14B8A6]/30 rounded-xl text-[#134E4A] focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition-all duration-300 font-primary backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#134E4A] mb-2 font-secondary">
                    Country
                  </label>
                  <input
                    type="text"
                    value={profile.address?.country || ''}
                    onChange={(e) => handleAddressChange('country', e.target.value)}
                    className="w-full px-4 py-3 bg-white/80 border border-[#14B8A6]/30 rounded-xl text-[#134E4A] focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition-all duration-300 font-primary backdrop-blur-sm"
                  />
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div>
              <h3 className="text-xl font-semibold text-[#134E4A] mb-4 font-secondary">Preferences</h3>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={profile.preferences?.newsletter !== false}
                    onChange={(e) => handlePreferenceChange('newsletter', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`relative w-11 h-6 rounded-full transition-colors ${
                    profile.preferences?.newsletter !== false ? 'bg-[#14B8A6]' : 'bg-[#134E4A]/30'
                  }`}>
                    <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow-sm ${
                      profile.preferences?.newsletter !== false ? 'transform translate-x-5' : ''
                    }`} />
                  </div>
                  <span className="ml-3 text-[#134E4A] font-primary">Subscribe to newsletter</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={profile.preferences?.notifications !== false}
                    onChange={(e) => handlePreferenceChange('notifications', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`relative w-11 h-6 rounded-full transition-colors ${
                    profile.preferences?.notifications !== false ? 'bg-[#14B8A6]' : 'bg-[#134E4A]/30'
                  }`}>
                    <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow-sm ${
                      profile.preferences?.notifications !== false ? 'transform translate-x-5' : ''
                    }`} />
                  </div>
                  <span className="ml-3 text-[#134E4A] font-primary">Receive notifications</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <motion.button
                type="submit"
                disabled={saving}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#F59E0B] to-[#F97316] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#F59E0B]/50 disabled:opacity-50 disabled:cursor-not-allowed font-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {saving ? 'Saving...' : 'Update Profile'}
              </motion.button>
            </div>
          </form>
        </motion.div>
        </div>
      </div>
    </div>
  );
}
