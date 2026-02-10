"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FloatingElements } from "@/components/FloatingElements";
import { VintageDecorations } from "@/components/VintageDecorations";

export function Reasons() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
      {/* Floating background elements */}
      <FloatingElements />

      {/* Vintage decorations */}
      <VintageDecorations />

      <motion.div
        key="reasons"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 flex items-center justify-center p-8"
      >
        <div className="relative max-w-2xl w-full bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/60">
          <h2 className="font-cursive text-5xl text-rose-600 text-center mb-8">
            Reasons I Love You
          </h2>
          <div className="space-y-4 text-lg text-rose-800 leading-relaxed">
            <p className="flex items-start gap-3">
              <span className="text-2xl">💕</span>
              <span>Your smile lights up my entire world, my love</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">✨</span>
              <span>
                The way you make me feel safe and cherished every single day
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">🌹</span>
              <span>
                Your kindness and the gentle way you care for everything around
                you
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">💖</span>
              <span>
                How you understand me without words, like our hearts speak the
                same language
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">🦋</span>
              <span>
                The beautiful future I see when I close my eyes and dream with
                you
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">🌟</span>
              <span>Simply being you — my everything, my forever</span>
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center"
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
