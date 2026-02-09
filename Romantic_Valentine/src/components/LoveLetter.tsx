import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface LoveLetterProps {
  onBack: () => void;
}

export function LoveLetter({ onBack }: LoveLetterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
    >
      <div className="max-w-4xl w-full my-8">
        {/* Envelope opening animation */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="text-center mb-6 md:mb-8"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              rotateX: [0, 15, 0],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1649019489428-70f505daacd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZW52ZWxvcGUlMjB3YXglMjBzZWFsJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MDE1MTQwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Envelope"
              className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl mx-auto"
            />
          </motion.div>
          <p className="font-cursive text-2xl md:text-3xl text-rose-500 italic">
            Opening your letter...
          </p>
        </motion.div>

        {/* Letter paper with vintage background */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative rounded-3xl shadow-2xl overflow-hidden border-4 border-rose-200/50"
        >
          {/* Vintage newspaper texture background */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1637135100511-bc1c180d9b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbmV3c3BhcGVyJTIwdGV4dHVyZSUyMG9sZCUyMHBhcGVyfGVufDF8fHx8MTc3MDE1MTQwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Cream paper overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50/95 via-rose-50/95 to-pink-50/95" />

          {/* Decorative lace border effect */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `
              repeating-linear-gradient(
                90deg,
                rgba(255, 182, 193, 0.1) 0px,
                transparent 2px,
                transparent 10px
              ),
              repeating-linear-gradient(
                0deg,
                rgba(255, 182, 193, 0.1) 0px,
                transparent 2px,
                transparent 30px
              )
            `
          }} />
          
          {/* Corner rose decorations */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: -25 }}
            transition={{ delay: 0.8, type: 'spring' }}
            className="absolute top-4 left-4 w-16 h-16 md:w-20 md:h-20 z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1759579059917-3277455b1e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjByb21hbnRpYyUyMGJvdXF1ZXQlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwMTUxNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Rose"
              className="w-full h-full object-contain drop-shadow-lg opacity-60"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 25 }}
            transition={{ delay: 0.9, type: 'spring' }}
            className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1694735043383-a7c966667e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjByb3NlcyUyMGJvdXF1ZXQlMjByb21hbnRpYyUyMHZhbGVudGluZXxlbnwxfHx8fDE3NzAxNTE0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Rose"
              className="w-full h-full object-contain drop-shadow-lg opacity-60"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0, rotate: 25 }}
            animate={{ scale: 1, rotate: 15 }}
            transition={{ delay: 1, type: 'spring' }}
            className="absolute bottom-4 left-4 w-16 h-16 md:w-20 md:h-20 z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1759579059917-3277455b1e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjByb21hbnRpYyUyMGJvdXF1ZXQlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwMTUxNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Rose"
              className="w-full h-full object-contain drop-shadow-lg opacity-60"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0, rotate: -25 }}
            animate={{ scale: 1, rotate: -15 }}
            transition={{ delay: 1.1, type: 'spring' }}
            className="absolute bottom-4 right-4 w-16 h-16 md:w-20 md:h-20 z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1694735043383-a7c966667e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjByb3NlcyUyMGJvdXF1ZXQlMjByb21hbnRpYyUyMHZhbGVudGluZXxlbnwxfHx8fDE3NzAxNTE0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Rose"
              className="w-full h-full object-contain drop-shadow-lg opacity-60"
            />
          </motion.div>

          {/* Decorative wax seal */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, type: 'spring' }}
            className="absolute -top-6 md:-top-8 right-8 md:right-12 z-20"
          >
            <img 
              src="https://images.unsplash.com/photo-1649019489428-70f505daacd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZW52ZWxvcGUlMjB3YXglMjBzZWFsJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MDE1MTQwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Wax seal"
              className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Letter content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="relative z-10 space-y-4 md:space-y-6 p-6 md:p-12 lg:p-16"
          >
            {/* Header */}
            <div className="text-right mb-6 md:mb-8">
              <p className="text-rose-500/70 italic text-sm md:text-base">February 3, 2026</p>
              <p className="text-rose-500/70 italic text-sm md:text-base">With all my love...</p>
            </div>

            {/* Salutation */}
            <p className="font-cursive text-3xl md:text-4xl lg:text-5xl text-rose-600 mb-4 md:mb-6">
              My Dearest Theodore,
            </p>

            {/* Letter body */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg text-rose-800 leading-relaxed">
              <p>
                As I sit here writing this, my heart is so full it feels like it might burst. There are moments in life when words feel inadequate, when the depth of feeling cannot be captured by letters on a page. Yet I try, because you deserve to know just how deeply you are loved.
              </p>

              <p>
                You are the warmth in my mornings and the peace in my nights. You are the unexpected joy in ordinary moments and the steady comfort in uncertain times. When I'm with you, the world feels softer, kinder, more beautiful — as if everything has been touched by the same magic that brought us together.
              </p>

              <p>
                I love the way you make me laugh until my cheeks hurt. I love how you understand my silences as much as my words. I love your gentle strength, your kind heart, and the way you see beauty in places others might overlook. I love how you make me want to be better, not because you ask it of me, but because your love inspires me to grow.
              </p>

              <p>
                Theodore, you are not just someone I love — you are home. You are the answer to questions I didn't know I was asking. You are every sweet dream I've ever had, come to life in the most wonderful way.
              </p>

              <p>
                This Valentine's Day, and every day that follows, I choose you. I choose us. I choose this beautiful, messy, perfect adventure we're on together. Thank you for being you. Thank you for loving me. Thank you for existing in this world at the exact same time as me.
              </p>

              <p className="pt-3 md:pt-4 italic font-medium">
                You are my greatest blessing, my sweetest treasure, my forever love.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-6 md:pt-8 text-right">
              <p className="font-cursive text-2xl md:text-3xl text-rose-600 mb-2">
                Forever and always,
              </p>
              <p className="font-cursive text-3xl md:text-4xl lg:text-5xl text-rose-700">
                Chérie
              </p>
              <div className="flex justify-end gap-2 mt-4">
                <img 
                  src="https://images.unsplash.com/photo-1759579059917-3277455b1e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjByb21hbnRpYyUyMGJvdXF1ZXQlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwMTUxNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Rose"
                  className="w-8 h-8 md:w-10 md:h-10 object-contain opacity-70"
                />
                <img 
                  src="https://images.unsplash.com/photo-1694735043383-a7c966667e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjByb3NlcyUyMGJvdXF1ZXQlMjByb21hbnRpYyUyMHZhbGVudGluZXxlbnwxfHx8fDE3NzAxNTE0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Rose"
                  className="w-8 h-8 md:w-10 md:h-10 object-contain opacity-70"
                />
                <img 
                  src="https://images.unsplash.com/photo-1759579059917-3277455b1e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjByb21hbnRpYyUyMGJvdXF1ZXQlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwMTUxNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Rose"
                  className="w-8 h-8 md:w-10 md:h-10 object-contain opacity-70"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-6 md:mt-8"
        >
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all text-base md:text-lg"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            Back to Gifts
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
