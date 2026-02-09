"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FloatingElements } from "@/components/FloatingElements";
import { VintageDecorations } from "@/components/VintageDecorations";

export function GiftRoom() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
      {/* Floating background elements */}
      <FloatingElements />

      {/* Vintage decorations */}
      <VintageDecorations />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
      >
        <div className="max-w-2xl w-full">
          {/* Beautiful Cat with Flowers */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{
              delay: 0.6,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="relative bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/60 mb-6 md:mb-8"
          >
            <div className="mb-4 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjB3aXRoJTIwZmxvd2VycyUyMHZhbGVudGluZXxlbnwxfHx8fDE3NzAxNjU4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Beautiful cat with flowers"
                className="w-full h-auto max-h-[32rem] object-contain bg-gradient-to-br from-rose-50 via-pink-100 to-rose-200"
              />
            </div>
            <div className="p-6 text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-5xl mb-4"
              >
                🐱💐
              </motion.div>
              <p className="font-cursive text-3xl text-rose-600 mb-3">
                A Little Cutie for You
              </p>
              <p className="text-rose-500/80 text-lg italic">
                Like this adorable kitty, I'm offering you my heart with a
                bouquet of love... 💕
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
