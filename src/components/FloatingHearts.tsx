import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newHeart: FloatingHeart = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setHearts((prev) => [...prev, newHeart]);

      // Remove heart after animation
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 2000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, y: 0, scale: 0 }}
            animate={{ 
              opacity: 0, 
              y: -150, 
              scale: [0, 1.5, 1],
              rotate: [0, 10, -10, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{
              position: 'absolute',
              left: heart.x,
              top: heart.y,
            }}
          >
            <Heart className="fill-pink-400 text-pink-400" size={24} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
