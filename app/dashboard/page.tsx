"use client";

import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonAccount from "@/components/ButtonAccount";

export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <Link href="/">
                <img
                  src="/cropped_image_ (1)-Picsart-BackgroundRemover.png"
                  alt="Cocofuel"
                  className="h-10 w-auto"
                />
              </Link>
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            </div>
            <ButtonAccount />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-coral to-amber rounded-xl p-8 mb-8"
        >
          <div className="flex items-center gap-4">
            {session?.user?.image && (
              <img
                src={session.user.image}
                alt="Profile"
                className="w-16 h-16 rounded-full border-4 border-white/20"
              />
            )}
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Welcome back, {session?.user?.name?.split(' ')[0] || 'there'}!
              </h2>
              <p className="text-white/80 text-lg">
                Ready to fuel your day with natural energy?
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/profile"
              className="bg-slate-800 hover:bg-slate-700 transition-colors rounded-xl p-6 block group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-coral p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-coral transition-colors">
                  Profile Settings
                </h3>
              </div>
              <p className="text-gray-300">
                Update your personal information and preferences
              </p>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-slate-800 rounded-xl p-6 opacity-75">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-amber p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 3a3 3 0 013-3h2a3 3 0 013 3v1h2a1 1 0 110 2h-1v9a3 3 0 01-3 3H8a3 3 0 01-3-3V6H4a1 1 0 010-2h2V3zm2 0a1 1 0 011-1h2a1 1 0 011 1v1H8V3zm4 4a1 1 0 10-2 0v6a1 1 0 102 0V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-400">
                  Order History
                </h3>
              </div>
              <p className="text-gray-500">
                View your past orders and track shipments
              </p>
              <div className="mt-4">
                <span className="text-xs bg-slate-700 text-gray-400 px-2 py-1 rounded">
                  Coming Soon
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-slate-800 rounded-xl p-6 opacity-75">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-500 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 4A1.5 1.5 0 001 5.5V6h18v-.5A1.5 1.5 0 0017.5 4h-15zM19 8.5H1v6A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5v-6zM3 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm4.75-.75a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-400">
                  Subscription
                </h3>
              </div>
              <p className="text-gray-500">
                Manage your monthly Cocofuel delivery
              </p>
              <div className="mt-4">
                <span className="text-xs bg-slate-700 text-gray-400 px-2 py-1 rounded">
                  Coming Soon
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Your Cocofuel Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-coral mb-2">0</div>
              <div className="text-gray-300">Orders Placed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber mb-2">0</div>
              <div className="text-gray-300">Days Hydrated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">0</div>
              <div className="text-gray-300">Coconuts Consumed</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-coral to-amber text-white font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-coral/50"
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
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
