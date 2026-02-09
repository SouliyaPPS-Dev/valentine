'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { FloatingElements } from '@/components/FloatingElements';
import { VintageDecorations } from '@/components/VintageDecorations';

export function Surprise() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
      {/* Floating background elements */}
      <FloatingElements />

      {/* Vintage decorations */}
      <VintageDecorations />

      <motion.div
        key="surprise"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 flex items-center justify-center p-8"
      >
        <div className="relative max-w-2xl w-full bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/60">
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl mb-6"
            >
              🎁
            </motion.div>
            <h2 className="font-cursive text-5xl text-rose-600 mb-6">
              A Special Promise
            </h2>
            <p className="text-2xl text-rose-700 mb-8 leading-relaxed">
              This Valentine's Day, I promise you a thousand more moments like this...
            </p>
            <div className="bg-white/60 rounded-2xl p-8 mb-8">
              <p className="text-lg text-rose-800 italic leading-relaxed">
                "I promise to hold your hand through every season, to laugh with you until we cry,
                to dance with you in the kitchen, to choose you every single day, and to love you
                more deeply with each passing moment. You are my greatest gift, Theodore."
              </p>
              <p className="text-right mt-4 text-rose-600 font-cursive text-2xl">
                — Forever yours, Chérie
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Link href="/gifts">
              <button className="px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                ← Back to Gifts
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
