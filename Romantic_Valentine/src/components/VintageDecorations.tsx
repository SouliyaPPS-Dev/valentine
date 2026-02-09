import { motion } from 'motion/react';

export function VintageDecorations() {
  return (
    <>
      {/* Vintage corner decorations */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-rose-300">
          <path
            d="M 0,0 Q 50,50 0,100 L 0,0 M 0,0 Q 50,50 100,0 L 0,0"
            fill="currentColor"
            opacity="0.3"
          />
          {/* Decorative lace pattern */}
          <circle cx="30" cy="30" r="3" fill="currentColor" />
          <circle cx="50" cy="30" r="3" fill="currentColor" />
          <circle cx="30" cy="50" r="3" fill="currentColor" />
          <circle cx="70" cy="30" r="3" fill="currentColor" />
          <circle cx="30" cy="70" r="3" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute top-0 right-0 w-64 h-64 pointer-events-none rotate-90"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-rose-300">
          <path
            d="M 0,0 Q 50,50 0,100 L 0,0 M 0,0 Q 50,50 100,0 L 0,0"
            fill="currentColor"
            opacity="0.3"
          />
          <circle cx="30" cy="30" r="3" fill="currentColor" />
          <circle cx="50" cy="30" r="3" fill="currentColor" />
          <circle cx="30" cy="50" r="3" fill="currentColor" />
          <circle cx="70" cy="30" r="3" fill="currentColor" />
          <circle cx="30" cy="70" r="3" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ delay: 0.7 }}
        className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none -rotate-90"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-rose-300">
          <path
            d="M 0,0 Q 50,50 0,100 L 0,0 M 0,0 Q 50,50 100,0 L 0,0"
            fill="currentColor"
            opacity="0.3"
          />
          <circle cx="30" cy="30" r="3" fill="currentColor" />
          <circle cx="50" cy="30" r="3" fill="currentColor" />
          <circle cx="30" cy="50" r="3" fill="currentColor" />
          <circle cx="70" cy="30" r="3" fill="currentColor" />
          <circle cx="30" cy="70" r="3" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none rotate-180"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-rose-300">
          <path
            d="M 0,0 Q 50,50 0,100 L 0,0 M 0,0 Q 50,50 100,0 L 0,0"
            fill="currentColor"
            opacity="0.3"
          />
          <circle cx="30" cy="30" r="3" fill="currentColor" />
          <circle cx="50" cy="30" r="3" fill="currentColor" />
          <circle cx="30" cy="50" r="3" fill="currentColor" />
          <circle cx="70" cy="30" r="3" fill="currentColor" />
          <circle cx="30" cy="70" r="3" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Scattered vintage valentine elements */}
      <motion.div
        animate={{
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-24 right-24 text-rose-200/40 text-6xl pointer-events-none hidden md:block"
      >
        ❤️
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, -5, 5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute bottom-24 left-24 text-rose-200/40 text-6xl pointer-events-none hidden md:block"
      >
        💝
      </motion.div>
    </>
  );
}
