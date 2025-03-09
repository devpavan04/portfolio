'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

const fruits = ['🍉', '🍎', '🥭', '🍊', '🍓', '🍌', '🍍', '🍇', '🍑', '🥝', '🍒', '🥥'];

export default function Cooking() {
  const [isCooking, setIsCooking] = useState(false);

  console.log(isCooking);

  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-mulish)] bg-white dark:bg-black flex-col">
      <motion.p
        animate={{
          y: isCooking ? -26 : 0,
        }}
        transition={{
          duration: 0.8,
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        className="text-xl text-black dark:text-white cursor-pointer font-medium"
        onTap={() => setIsCooking(!isCooking)}
      >
        {isCooking ? 'Cooking...' : 'Start cooking!'}
      </motion.p>

      {isCooking && (
        <div className="flex items-center justify-center gap-4">
          {fruits.map((fruit, index) => (
            <motion.span
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                ease: [0.25, 0.1, 0.25, 1.0],
                repeat: Infinity,
              }}
              key={index}
              className="text-2xl"
            >
              {fruit}
            </motion.span>
          ))}
        </div>
      )}
    </div>
  );
}
