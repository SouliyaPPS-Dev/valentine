'use client';

import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { FloatingElements } from '@/components/FloatingElements';
import { VintageDecorations } from '@/components/VintageDecorations';

export function BubuMoment() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
      {/* Floating background elements */}
      <FloatingElements />

      {/* Vintage decorations */}
      <VintageDecorations />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
      >
        <div className="max-w-3xl w-full">
          {/* Header */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="font-cursive text-5xl md:text-6xl text-rose-600 mb-3">
              Bubu & Bubu
            </h2>
            <p className="text-2xl text-rose-500/80 italic">
              A cozy moment just for us...
            </p>
          </motion.div>

          {/* Main card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/60"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-300/50 via-pink-200/50 to-rose-300/50 blur-2xl -z-10" />

            {/* Image section */}
            <div className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🧸🧸</div>
                <p className="text-rose-600 font-cursive text-2xl">Our Cozy Photo Here</p>
              </div>
              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-100/80 via-transparent to-transparent" />

              {/* Floating hearts over image */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-10 left-10 text-6xl"
              >
                💕
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute top-20 right-16 text-5xl"
              >
                💖
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -25, 0],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute bottom-32 left-1/3 text-5xl"
              >
                💗
              </motion.div>
            </div>

            {/* Content section */}
            <div className="p-8 md:p-12">
              <div className="space-y-6 text-center">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl text-rose-700 leading-relaxed italic"
                >
                  "Like Bubu and Bubu, we fit together perfectly..."
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-4 text-lg text-rose-600"
                >
                  <p className="flex items-center justify-center gap-3">
                    <span className="text-3xl">🧸</span>
                    <span>Two hearts, one soul</span>
                    <span className="text-3xl">🧸</span>
                  </p>
                  <p className="flex items-center justify-center gap-3">
                    <span className="text-3xl">💝</span>
                    <span>Safe, warm, and loved</span>
                    <span className="text-3xl">💝</span>
                  </p>
                  <p className="flex items-center justify-center gap-3">
                    <span className="text-3xl">🎀</span>
                    <span>Forever cuddled together</span>
                    <span className="text-3xl">🎀</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: 'spring' }}
                  className="pt-6"
                >
                  <div className="inline-block bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl px-8 py-6 shadow-lg">
                    <p className="text-xl text-rose-700 font-medium mb-2">
                      This is how I feel when I'm with you:
                    </p>
                    <p className="font-cursive text-3xl text-rose-600">
                      Complete. Safe. Home.
                    </p>
                    <div className="mt-4 text-4xl">
                      🧸💕🧸
                    </div>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-rose-500 italic pt-4"
                >
                  You're my Bubu, Theodore. Always and forever. 💕
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Back button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-center mt-8"
          >
            <Link href="/gifts">
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <ArrowLeft className="w-5 h-5" />
                Back to Gifts
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
