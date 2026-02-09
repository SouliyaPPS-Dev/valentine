'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { FloatingElements } from '@/components/FloatingElements';
import { VintageDecorations } from '@/components/VintageDecorations';

export function Bouquet() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
      {/* Floating background elements */}
      <FloatingElements />

      {/* Vintage decorations */}
      <VintageDecorations />

      <motion.div
        key="bouquet"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
      >
        <div className="relative max-w-2xl w-full bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/60">
          <h2 className="font-cursive text-4xl md:text-5xl text-rose-600 text-center mb-6 md:mb-8">
            A Bouquet of Feelings
          </h2>
          <div className="mb-6 md:mb-8 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1694735043383-a7c966667e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjByb3NlcyUyMGJvdXF1ZXQlMjByb21hbnRpYyUyMHZhbGVudGluZXxlbnwxfHx8fDE3NzAxNTE0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Rose bouquet"
              className="w-full h-48 md:h-64 object-cover"
            />
          </div>
          <div className="space-y-3 md:space-y-4 text-center">
            <p className="text-lg md:text-xl text-rose-700 leading-relaxed flex items-center justify-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1694735043383-a7c966667e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjByb3NlcyUyMGJvdXF1ZXQlMjByb21hbnRpYyUyMHZhbGVudGluZXxlbnwxfHx8fDE3NzAxNTE0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Rose"
                className="w-8 h-8 object-contain inline"
              />
              <span className="font-cursive text-2xl">Joy</span> — for every smile you bring to my life
            </p>
            <p className="text-lg md:text-xl text-rose-700 leading-relaxed flex items-center justify-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1759579059917-3277455b1e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjByb21hbnRpYyUyMGJvdXF1ZXQlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwMTUxNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Rose"
                className="w-8 h-8 object-contain inline"
              />
              <span className="font-cursive text-2xl">Gratitude</span> — for choosing me, every day
            </p>
            <p className="text-lg md:text-xl text-rose-700 leading-relaxed flex items-center justify-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1759579059917-3277455b1e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjByb21hbnRpYyUyMGJvdXF1ZXQlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwMTUxNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Rose"
                className="w-8 h-8 object-contain inline"
              />
              <span className="font-cursive text-2xl">Tenderness</span> — for the gentle way you hold my heart
            </p>
            <p className="text-lg md:text-xl text-rose-700 leading-relaxed flex items-center justify-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1694735043383-a7c966667e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjByb3NlcyUyMGJvdXF1ZXQlMjByb21hbnRpYyUyMHZhbGVudGluZXxlbnwxfHx8fDE3NzAxNTE0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Rose"
                className="w-8 h-8 object-contain inline"
              />
              <span className="font-cursive text-2xl">Love</span> — infinite, unconditional, forever yours
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 md:mt-8 text-center"
          >
            <Link href="/gifts">
              <button className="px-6 md:px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all text-base md:text-lg">
                ← Back to Gifts
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
