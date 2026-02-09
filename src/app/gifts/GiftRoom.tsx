'use client';

import { motion } from 'motion/react';
import { Mail, Heart, Gift, Camera } from 'lucide-react';
import Link from 'next/link';
import { FloatingElements } from '@/components/FloatingElements';
import { VintageDecorations } from '@/components/VintageDecorations';

export function GiftRoom() {
  const gifts = [
    {
      id: 'letter',
      title: 'A Love Letter',
      icon: Mail,
      emoji: '💌',
      description: 'Words from my heart to yours',
      gradient: 'from-rose-400 to-pink-400',
      href: '/letter',
    },
    {
      id: 'reasons',
      title: 'Reasons I Love You',
      icon: Heart,
      emoji: '💕',
      description: 'Just a few of infinite reasons',
      gradient: 'from-pink-400 to-rose-300',
      href: '/reasons',
    },
    {
      id: 'moments',
      title: 'Our Precious Moments',
      icon: Camera,
      emoji: '📸',
      description: 'Memories we created together',
      gradient: 'from-rose-500 to-pink-600',
      href: '/moments',
    },
    {
      id: 'surprise',
      title: 'A Surprise Gift',
      icon: Gift,
      emoji: '🎁',
      description: 'Something special, just for you',
      gradient: 'from-rose-300 to-pink-500',
      href: '/surprise',
    },
    {
      id: 'bouquet',
      title: 'A Bouquet of Feelings',
      icon: Camera,
      emoji: '💐',
      description: 'Every flower tells a story',
      gradient: 'from-pink-500 to-rose-400',
      href: '/bouquet',
    },
  ];

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
        className="absolute inset-0 flex items-center justify-center p-8 overflow-y-auto"
      >
        {/* Decorative floating elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-12 md:top-20 left-12 md:left-20 w-12 h-12 md:w-16 md:h-16 opacity-30 pointer-events-none"
        >
          <img
            src="https://images.unsplash.com/photo-1649019489428-70f505daacd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZW52ZWxvcGUlMjB3YXglMjBzZWFsJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MDE1MTQwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Decoration"
            className="w-full h-full object-contain"
          />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-12 md:bottom-20 right-12 md:right-20 w-12 h-12 md:w-16 md:h-16 opacity-30 pointer-events-none"
        >
          <img
            src="https://images.unsplash.com/photo-1649019489428-70f505daacd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZW52ZWxvcGUlMjB3YXglMjBzZWFsJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MDE1MTQwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Decoration"
            className="w-full h-full object-contain"
          />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-16 md:right-32 w-16 h-16 md:w-20 md:h-20 opacity-40 pointer-events-none"
        >
          <img
            src="https://images.unsplash.com/photo-1759579059917-3277455b1e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjByb21hbnRpYyUyMGJvdXF1ZXQlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwMTUxNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Rose"
            className="w-full h-full object-contain"
          />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/3 left-16 md:left-32 w-16 h-16 md:w-20 md:h-20 opacity-40 pointer-events-none"
        >
          <img
            src="https://images.unsplash.com/photo-1694735043383-a7c966667e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjByb3NlcyUyMGJvdXF1ZXQlMjByb21hbnRpYyUyMHZhbGVudGluZXxlbnwxfHx8fDE3NzAxNTE0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Rose"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <div className="max-w-5xl w-full">
          {/* Header */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="text-6xl mb-4">🎀</div>
            <h2 className="font-cursive text-5xl md:text-6xl text-rose-600 mb-3">
              Your Special Gifts, Theodore
            </h2>
            <p className="text-2xl text-rose-500/80 italic">
              Choose wisely, my love...
            </p>
          </motion.div>

          {/* Gift grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {gifts.map((gift, index) => (
              <Link key={gift.id} href={gift.href}>
                <motion.button
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-white/40 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl border border-white/60 p-8 md:p-10 text-left transition-all w-full"
                >
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gift.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`} />

                  {/* Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-6xl">{gift.emoji}</div>
                    <motion.div
                      className={`p-3 rounded-2xl bg-gradient-to-br ${gift.gradient} text-white shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <gift.icon className="w-8 h-8" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="font-cursive text-3xl text-rose-600 mb-2">
                    {gift.title}
                  </h3>

                  {/* Description */}
                  <p className="text-rose-500/80 text-lg italic">
                    {gift.description}
                  </p>

                  {/* Decorative corner hearts */}
                  <motion.div
                    className="absolute top-4 left-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    💝
                  </motion.div>
                  <motion.div
                    className="absolute bottom-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  >
                    💝
                  </motion.div>
                </motion.button>
              </Link>
            ))}
          </div>

          {/* Bottom decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-rose-400 italic text-lg">
              Each gift holds a piece of my heart... 💕
            </p>
            <Link href="/bubu">
              <motion.div
                className="mt-4 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="text-5xl transition-transform">
                  🧸🧸
                </button>
                <p className="text-rose-500 text-sm mt-2 italic">
                  (Psst... click Bubu & Bubu for a special moment)
                </p>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
