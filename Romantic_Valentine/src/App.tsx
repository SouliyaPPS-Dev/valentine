import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FloatingElements } from './components/FloatingElements';
import { VintageDecorations } from './components/VintageDecorations';
import { OpeningScreen } from './components/OpeningScreen';
import { ValentineQuestion } from './components/ValentineQuestion';
import { GiftRoom } from './components/GiftRoom';
import { LoveLetter } from './components/LoveLetter';
import { BubuMoment } from './components/BubuMoment';
import { OurMoments } from './components/OurMoments';

type Screen = 'opening' | 'question' | 'gifts' | 'letter' | 'bubu' | 'reasons' | 'surprise' | 'bouquet' | 'moments';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('opening');

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
      {/* Floating background elements */}
      <FloatingElements />
      
      {/* Vintage decorations */}
      <VintageDecorations />
      
      {/* Screen transitions */}
      <AnimatePresence mode="wait">
        {currentScreen === 'opening' && (
          <OpeningScreen key="opening" onNext={() => setCurrentScreen('question')} />
        )}
        
        {currentScreen === 'question' && (
          <ValentineQuestion key="question" onNext={() => setCurrentScreen('gifts')} />
        )}
        
        {currentScreen === 'gifts' && (
          <GiftRoom 
            key="gifts" 
            onSelectGift={(gift) => setCurrentScreen(gift as Screen)} 
          />
        )}
        
        {currentScreen === 'letter' && (
          <LoveLetter key="letter" onBack={() => setCurrentScreen('gifts')} />
        )}
        
        {currentScreen === 'bubu' && (
          <BubuMoment key="bubu" onBack={() => setCurrentScreen('gifts')} />
        )}
        
        {currentScreen === 'moments' && (
          <OurMoments key="moments" onBack={() => setCurrentScreen('gifts')} />
        )}
        
        {currentScreen === 'reasons' && (
          <motion.div
            key="reasons"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            <div className="relative max-w-2xl w-full bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/60">
              <h2 className="font-cursive text-5xl text-rose-600 text-center mb-8">
                Reasons I Love You
              </h2>
              <div className="space-y-4 text-lg text-rose-800 leading-relaxed">
                <p className="flex items-start gap-3">
                  <span className="text-2xl">💕</span>
                  <span>Your smile lights up my entire world, Theodore</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <span>The way you make me feel safe and cherished every single day</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">🌹</span>
                  <span>Your kindness and the gentle way you care for everything around you</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">💖</span>
                  <span>How you understand me without words, like our hearts speak the same language</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">🦋</span>
                  <span>The beautiful future I see when I close my eyes and dream with you</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">🌟</span>
                  <span>Simply being you — my Theodore, my everything, my forever</span>
                </p>
              </div>
              <button
                onClick={() => setCurrentScreen('gifts')}
                className="mt-8 mx-auto block px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                ← Back to Gifts
              </button>
            </div>
          </motion.div>
        )}
        
        {currentScreen === 'surprise' && (
          <motion.div
            key="surprise"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            <div className="relative max-w-2xl w-full bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/60">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-bounce">🎁</div>
                <h2 className="font-cursive text-5xl text-rose-600 mb-6">
                  A Special Promise
                </h2>
                <p className="text-2xl text-rose-700 mb-8 leading-relaxed">
                  This Valentine's Day, I promise you a thousand more moments like this...
                </p>
                <div className="bg-white/60 rounded-2xl p-8 mb-8">
                  <p className="text-lg text-rose-800 italic leading-relaxed">
                    "I promise to hold your hand through every season, to laugh with you until we cry, 
                    to dance with you in the kitchen, to choose you every single day, and to love you 
                    more deeply with each passing moment. You are my greatest gift, Theodore."
                  </p>
                  <p className="text-right mt-4 text-rose-600 font-cursive text-2xl">
                    — Forever yours, Chérie
                  </p>
                </div>
              </div>
              <button
                onClick={() => setCurrentScreen('gifts')}
                className="mx-auto block px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                ← Back to Gifts
              </button>
            </div>
          </motion.div>
        )}
        
        {currentScreen === 'bouquet' && (
          <motion.div
            key="bouquet"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
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
              <button
                onClick={() => setCurrentScreen('gifts')}
                className="mt-6 md:mt-8 mx-auto block px-6 md:px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all text-base md:text-lg"
              >
                ← Back to Gifts
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}