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
    <div className="min-h-screen bg-gradient-to-br from-[#F0FDFA] via-[#ECFDF5] to-[#F0F9FF] relative overflow-hidden">
      {/* Floating organic shapes */}
      <motion.div 
        animate={{ 
          y: [-30, 30],
          rotate: [0, 10],
          scale: [1, 1.2]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute top-20 right-16 w-48 h-48 bg-gradient-to-br from-[#14B8A6]/15 to-[#06B6D4]/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          y: [25, -25],
          rotate: [0, -8],
          scale: [1.4, 1]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 left-16 w-36 h-36 bg-gradient-to-br from-[#F59E0B]/20 to-[#10B981]/15 rounded-full blur-2xl"
      />

      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm border-b border-[#14B8A6]/20 shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <Link href="/">
                <img
                  src="/cropped_image_ (1)-Picsart-BackgroundRemover.png"
                  alt="Cocofuel"
                  className="h-10 w-auto hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <h1 className="text-2xl font-bold text-[#134E4A] font-secondary">Dashboard</h1>
            </div>
            <ButtonAccount />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#F59E0B] to-[#F97316] rounded-2xl p-8 mb-8 shadow-xl border border-white/30 backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-4">
            {session?.user?.image && (
              <motion.img
                src={session.user.image}
                alt="Profile"
                className="w-16 h-16 rounded-full border-4 border-white/40 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
            )}
            <div>
              <motion.h2 
                className="text-3xl font-bold text-white mb-2 font-secondary"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Welcome back, {session?.user?.name?.split(' ')[0] || 'there'}!
              </motion.h2>
              <motion.p 
                className="text-white/90 text-lg font-primary"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Ready to fuel your day with natural energy?
              </motion.p>
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
              className="bg-white/80 backdrop-blur-sm border border-[#14B8A6]/20 hover:border-[#14B8A6]/40 hover:bg-white/90 transition-all duration-300 rounded-xl p-6 block group shadow-lg"
            >
              <motion.div 
                className="flex items-center gap-4 mb-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] p-3 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
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
                <h3 className="text-xl font-semibold text-[#134E4A] group-hover:text-[#14B8A6] transition-colors font-secondary">
                  Profile Settings
                </h3>
              </motion.div>
              <p className="text-[#134E4A]/70 font-primary">
                Update your personal information and preferences
              </p>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white/60 backdrop-blur-sm border border-[#14B8A6]/20 rounded-xl p-6 opacity-75">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-r from-[#F59E0B] to-[#F97316] p-3 rounded-lg">
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
                <h3 className="text-xl font-semibold text-[#134E4A]/60 font-secondary">
                  Order History
                </h3>
              </div>
              <p className="text-[#134E4A]/50 font-primary">
                View your past orders and track shipments
              </p>
              <div className="mt-4">
                <span className="text-xs bg-[#134E4A]/20 text-[#134E4A]/60 px-2 py-1 rounded">
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
            <div className="bg-white/60 backdrop-blur-sm border border-[#14B8A6]/20 rounded-xl p-6 opacity-75">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-r from-[#10B981] to-[#14B8A6] p-3 rounded-lg">
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
                <h3 className="text-xl font-semibold text-[#134E4A]/60 font-secondary">
                  Subscription
                </h3>
              </div>
              <p className="text-[#134E4A]/50 font-primary">
                Manage your monthly Cocofuel delivery
              </p>
              <div className="mt-4">
                <span className="text-xs bg-[#134E4A]/20 text-[#134E4A]/60 px-2 py-1 rounded">
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
          className="bg-white/80 backdrop-blur-sm border border-[#14B8A6]/30 rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-[#134E4A] mb-6 font-secondary">Your Cocofuel Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="text-center p-4 bg-gradient-to-br from-[#14B8A6]/10 to-[#06B6D4]/10 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] bg-clip-text text-transparent mb-2">0</div>
              <div className="text-[#134E4A]/80 font-primary">Orders Placed</div>
            </motion.div>
            <motion.div 
              className="text-center p-4 bg-gradient-to-br from-[#F59E0B]/10 to-[#F97316]/10 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#F97316] bg-clip-text text-transparent mb-2">0</div>
              <div className="text-[#134E4A]/80 font-primary">Days Hydrated</div>
            </motion.div>
            <motion.div 
              className="text-center p-4 bg-gradient-to-br from-[#10B981]/10 to-[#14B8A6]/10 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[#10B981] to-[#14B8A6] bg-clip-text text-transparent mb-2">0</div>
              <div className="text-[#134E4A]/80 font-primary">Coconuts Consumed</div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F59E0B] to-[#F97316] text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#F59E0B]/50 shadow-lg font-secondary"
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
        </motion.div>
      </div>
    </div>
  );
}
