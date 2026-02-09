'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { FloatingElements } from '@/components/FloatingElements';
import { VintageDecorations } from '@/components/VintageDecorations';

export function ValentineQuestion() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonScale, setNoButtonScale] = useState(1);
  const [attempts, setAttempts] = useState(0);

  const handleNoHover = () => {
    const newX = (Math.random() - 0.5) * 200;
    const newY = (Math.random() - 0.5) * 200;
    setNoButtonPosition({ x: newX, y: newY });
    setNoButtonScale(Math.max(0.3, noButtonScale - 0.15));
    setAttempts(attempts + 1);
  };

  const messages = [
    "Will you be my Valentine, Theodore?",
    "Are you sure? 🥺",
    "Please? 💕",
    "I made this whole website for you...",
    "The 'Yes' button is right there! 👉",
  ];

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
        className="absolute inset-0 flex items-center justify-center p-4 md:p-8 overflow-hidden"
      >
        {/* Decorative corner flower bouquets */}
        <motion.div
          initial={{ x: -100, y: -100, opacity: 0, rotate: -20 }}
          animate={{ x: 0, y: 0, opacity: 0.8, rotate: -15 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="absolute top-2 left-2 md:top-4 md:left-4 w-24 h-24 md:w-40 md:h-40 pointer-events-none z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1759579059917-3277455b1e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjByb21hbnRpYyUyMGJvdXF1ZXQlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwMTUxNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Roses"
            className="w-full h-full object-contain drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 10px 30px rgba(244, 114, 182, 0.5))' }}
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, y: -100, opacity: 0, rotate: 20 }}
          animate={{ x: 0, y: 0, opacity: 0.8, rotate: 15 }}
          transition={{ delay: 0.4, type: 'spring' }}
          className="absolute top-2 right-2 md:top-4 md:right-4 w-24 h-24 md:w-40 md:h-40 pointer-events-none z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1694735043383-a7c966667e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjByb3NlcyUyMGJvdXF1ZXQlMjByb21hbnRpYyUyMHZhbGVudGluZXxlbnwxfHx8fDE3NzAxNTE0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Roses"
            className="w-full h-full object-contain drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 10px 30px rgba(220, 38, 38, 0.5))' }}
          />
        </motion.div>

        <motion.div
          initial={{ x: -100, y: 100, opacity: 0, rotate: 15 }}
          animate={{ x: 0, y: 0, opacity: 0.8, rotate: 10 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="absolute bottom-2 left-2 md:bottom-4 md:left-4 w-24 h-24 md:w-40 md:h-40 pointer-events-none z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1759579059917-3277455b1e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjByb21hbnRpYyUyMGJvdXF1ZXQlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwMTUxNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Roses"
            className="w-full h-full object-contain drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 10px 30px rgba(244, 114, 182, 0.5))' }}
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, y: 100, opacity: 0, rotate: -15 }}
          animate={{ x: 0, y: 0, opacity: 0.8, rotate: -10 }}
          transition={{ delay: 0.6, type: 'spring' }}
          className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-24 h-24 md:w-40 md:h-40 pointer-events-none z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1694735043383-a7c966667e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjByb3NlcyUyMGJvdXF1ZXQlMjByb21hbnRpYyUyMHZhbGVudGluZXxlbnwxfHx8fDE3NzAxNTE0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Roses"
            className="w-full h-full object-contain drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 10px 30px rgba(220, 38, 38, 0.5))' }}
          />
        </motion.div>

        {/* Floating vintage love letters */}
        <motion.div
          initial={{ y: -50, opacity: 0, rotate: -10 }}
          animate={{
            y: [0, -15, 0],
            opacity: 0.25,
            rotate: [-10, -5, -10]
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            opacity: { delay: 0.7, duration: 0.5 }
          }}
          className="absolute top-1/4 left-1/4 w-16 h-16 md:w-20 md:h-20 pointer-events-none z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1649019489428-70f505daacd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZW52ZWxvcGUlMjB3YXglMjBzZWFsJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MDE1MTQwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Letter"
            className="w-full h-full object-contain opacity-60"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0, rotate: 15 }}
          animate={{
            y: [0, 20, 0],
            opacity: 0.25,
            rotate: [15, 10, 15]
          }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
            opacity: { delay: 0.8, duration: 0.5 }
          }}
          className="absolute top-1/3 right-1/4 w-16 h-16 md:w-20 md:h-20 pointer-events-none z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1649019489428-70f505daacd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZW52ZWxvcGUlMjB3YXglMjBzZWFsJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MDE1MTQwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Letter"
            className="w-full h-full object-contain opacity-60"
          />
        </motion.div>

        <div className="text-center max-w-4xl relative z-10 mx-auto">
          {/* Couple photos placeholder */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center items-center gap-3 md:gap-6 mb-6 md:mb-8"
          >
            <motion.div
              animate={{
                rotate: [-3, 3, -3],
                y: [0, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center text-4xl"
            >
              💕
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-4xl md:text-6xl"
            >
              💖
            </motion.div>

            <motion.div
              animate={{
                rotate: [3, -3, 3],
                y: [0, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="relative w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-pink-200 to-rose-200 flex items-center justify-center text-4xl"
            >
              💕
            </motion.div>
          </motion.div>

          {/* Question */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-12 lg:p-16 border border-white/60 relative max-w-2xl mx-auto"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-300/50 via-pink-200/50 to-rose-300/50 blur-2xl -z-10" />

            <h2 className="font-cursive text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-rose-600 mb-6 md:mb-8 leading-tight px-2">
              {messages[Math.min(attempts, messages.length - 1)]}
            </h2>

            {attempts > 2 && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg md:text-2xl text-rose-500 mb-6 md:mb-8 italic"
              >
                You're making us sad... 🥺
              </motion.p>
            )}

            {/* Buttons */}
            <div className="flex gap-4 md:gap-6 justify-center items-center relative h-20 md:h-24">
              {/* Yes button */}
              <Link href="/gifts">
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 + attempts * 0.15 }}
                  transition={{ delay: 0.6, type: 'spring' }}
                  whileHover={{ scale: 1.1 + attempts * 0.15 }}
                  whileTap={{ scale: 0.95 + attempts * 0.15 }}
                  className="px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all text-lg md:text-xl font-medium relative z-10"
                >
                  <span className="flex items-center gap-2">
                    <Heart className="w-5 h-5 md:w-6 md:h-6 fill-white" />
                    Yes! 💕
                  </span>
                </motion.button>
              </Link>

              {/* No button */}
              <motion.button
                animate={{
                  x: noButtonPosition.x,
                  y: noButtonPosition.y,
                  scale: noButtonScale,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: noButtonScale * 1.1 }}
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                className="px-6 md:px-8 py-2 md:py-3 bg-gray-300/60 text-gray-600 rounded-full shadow-lg transition-all font-medium text-base md:text-lg"
                style={{ opacity: Math.max(0.3, 1 - attempts * 0.15) }}
              >
                No... 😢
              </motion.button>
            </div>

            {attempts > 3 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-rose-400 mt-4 md:mt-6 italic text-sm md:text-base"
              >
                (The No button is getting shy...)
              </motion.p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
