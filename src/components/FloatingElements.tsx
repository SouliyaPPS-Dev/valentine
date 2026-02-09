'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function FloatingElements() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate hearts with random positions
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    duration: 8 + Math.random() * 4,
    x: (i * 7 + 5) % 100, // Use deterministic positions instead of random
  }));

  // Generate sparkles with random positions
  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: i * 0.3,
    duration: 6 + Math.random() * 3,
    x: (i * 5 + 10) % 100, // Use deterministic positions instead of random
  }));

  // Don't render animated elements until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Film grain overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30 mix-blend-overlay" />

        {/* Soft vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-pink-300/30" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={`heart-${heart.id}`}
          className="absolute text-4xl opacity-30"
          style={{ left: `${heart.x}%` }}
          initial={{ y: '120vh', rotate: 0 }}
          animate={{
            y: '-20vh',
            rotate: 360,
            x: [0, 30, -30, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          💕
        </motion.div>
      ))}

      {/* Floating sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="absolute text-2xl opacity-40"
          style={{ left: `${sparkle.x}%` }}
          initial={{ y: '120vh', scale: 0 }}
          animate={{
            y: '-20vh',
            scale: [0, 1, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ✨
        </motion.div>
      ))}

      {/* Teddy bears floating */}
      <motion.div
        className="absolute text-6xl opacity-20"
        initial={{ x: '-10%', y: '20%', rotate: -15 }}
        animate={{
          x: ['0%', '5%', '0%'],
          y: ['20%', '25%', '20%'],
          rotate: [-15, -10, -15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        🧸
      </motion.div>

      <motion.div
        className="absolute text-5xl opacity-20 right-0"
        initial={{ x: '90%', y: '60%', rotate: 10 }}
        animate={{
          x: ['90%', '85%', '90%'],
          y: ['60%', '55%', '60%'],
          rotate: [10, 15, 10],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        🧸
      </motion.div>

      {/* Film grain overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30 mix-blend-overlay" />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-pink-300/30" />
    </div>
  );
}
