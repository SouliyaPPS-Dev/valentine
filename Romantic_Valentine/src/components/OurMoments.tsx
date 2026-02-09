import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import couplePhoto1 from 'figma:asset/91a58d08f4f32932a183a66ac35b501f68ce8c53.png';
import couplePhoto2 from 'figma:asset/8fc1079005b0e7b6e6113265dbb26c6eba669210.png';

interface OurMomentsProps {
  onBack: () => void;
}

export function OurMoments({ onBack }: OurMomentsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
    >
      <div className="max-w-4xl w-full my-8">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="font-cursive text-5xl md:text-6xl text-rose-600 mb-3">
            Our Precious Moments
          </h2>
          <p className="text-2xl text-rose-500/80 italic">
            Every moment with you is a treasure...
          </p>
        </motion.div>

        {/* Photo collage */}
        <div className="space-y-6">
          {/* First photo */}
          <motion.div
            initial={{ x: -100, opacity: 0, rotate: -3 }}
            animate={{ x: 0, opacity: 1, rotate: -2 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="relative bg-white p-4 rounded-2xl shadow-2xl"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={couplePhoto1}
                alt="Chérie and Theodore together"
                className="w-full h-auto"
              />
              {/* Vintage photo effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-100/30 to-transparent pointer-events-none" />
            </div>
            
            {/* Polaroid-style caption */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-3 text-center"
            >
              <p className="font-cursive text-2xl text-rose-600">
                Us against the world 💕
              </p>
            </motion.div>

            {/* Decorative tape */}
            <div className="absolute -top-3 left-1/4 w-20 h-6 bg-pink-200/60 rotate-12 shadow-sm" />
            <div className="absolute -top-3 right-1/4 w-20 h-6 bg-rose-200/60 -rotate-12 shadow-sm" />
          </motion.div>

          {/* Second photo */}
          <motion.div
            initial={{ x: 100, opacity: 0, rotate: 3 }}
            animate={{ x: 0, opacity: 1, rotate: 2 }}
            transition={{ delay: 0.6, type: 'spring' }}
            className="relative bg-white p-4 rounded-2xl shadow-2xl"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={couplePhoto2}
                alt="Chérie and Theodore smiling"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-100/30 to-transparent pointer-events-none" />
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-3 text-center"
            >
              <p className="font-cursive text-2xl text-rose-600">
                My favorite person, my forever smile 🌹
              </p>
            </motion.div>

            <div className="absolute -top-3 left-1/3 w-20 h-6 bg-rose-200/60 -rotate-6 shadow-sm" />
            <div className="absolute -top-3 right-1/3 w-20 h-6 bg-pink-200/60 rotate-6 shadow-sm" />
          </motion.div>

          {/* Love note */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 shadow-xl border-2 border-rose-200/50"
          >
            <div className="text-center space-y-4">
              <div className="text-5xl mb-4">💝</div>
              <p className="text-lg text-rose-800 leading-relaxed italic">
                "These photos capture just a glimpse of the joy you bring to my life. 
                Every smile, every laugh, every moment together is a memory I'll cherish forever. 
                Thank you for being my partner, my best friend, my everything."
              </p>
              <p className="font-cursive text-3xl text-rose-600 pt-4">
                With all my love, Chérie 💕
              </p>
            </div>
          </motion.div>
        </div>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
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
