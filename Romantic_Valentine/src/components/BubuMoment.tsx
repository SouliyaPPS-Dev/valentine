import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface BubuMomentProps {
  onBack: () => void;
}

export function BubuMoment({ onBack }: BubuMomentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
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
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <img
              src="https://images.unsplash.com/flagged/photo-1578477305564-0f62bd8dddd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWRkeSUyMGJlYXJzJTIwY3VkZGxpbmclMjBsb3ZlfGVufDF8fHx8MTc3MDE0OTI5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Bubu and Bubu cuddling"
              className="w-full h-full object-cover"
            />
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
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Gifts
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
