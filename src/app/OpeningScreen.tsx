"use client";

import { motion } from "motion/react";
import { Heart } from "lucide-react";
import Link from "next/link";
import { FloatingElements } from "@/components/FloatingElements";
import { VintageDecorations } from "@/components/VintageDecorations";

export function OpeningScreen() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
      {/* Floating background elements */}
      <FloatingElements />

      {/* Vintage decorations */}
      <VintageDecorations />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center p-8"
      >
        {/* Floating rose petals */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl pointer-events-none"
            style={{
              left: `${10 + i * 7}%`,
              top: `${-10}%`,
            }}
            initial={{ y: 0, opacity: 0, rotate: 0 }}
            animate={{
              y: "120vh",
              opacity: [0, 0.7, 0.7, 0],
              rotate: 360 * 2,
              x: [0, 30, -30, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            🌸
          </motion.div>
        ))}

        <div className="text-center relative">
          {/* Main card */}
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="relative bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-12 md:p-16 border border-white/60 max-w-lg mx-auto"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-300/50 via-pink-200/50 to-rose-300/50 blur-2xl -z-10" />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <div className="text-7xl mb-4">🎀</div>
              <h1 className="font-cursive text-5xl md:text-6xl text-rose-600 mb-2">
                Just for you
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl text-rose-500/80 mb-10 italic"
            >
              A gift from the heart...
            </motion.p>

            {/* Tap to open button */}
            <Link href="/question">
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 text-white rounded-full shadow-xl hover:shadow-2xl transition-all"
              >
                <span className="flex items-center gap-3 text-xl font-medium">
                  <Heart className="w-6 h-6 fill-white" />
                  Tap to open
                  <Heart className="w-6 h-6 fill-white" />
                </span>

                {/* Animated glow */}
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-300 via-pink-300 to-rose-300 blur-xl -z-10"
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
