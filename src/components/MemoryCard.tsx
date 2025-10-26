import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface MemoryCardProps {
  title: string;
  memory: string;
  icon?: React.ReactNode;
  delay?: number;
}

export function MemoryCard({ title, memory, icon, delay = 0 }: MemoryCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="perspective-1000"
    >
      <motion.div
        className="relative w-full h-64 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-100 via-peach-100 to-lavender-100 rounded-3xl p-6 flex flex-col items-center justify-center border-4 border-white/50 shadow-xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="mb-4 text-pink-400">
              {icon || <Sparkles size={40} />}
            </div>
            <h3 className="text-center text-pink-600" style={{ fontFamily: "'Dancing Script', cursive" }}>
              {title}
            </h3>
            <p className="text-sm text-pink-400 mt-2">Click to reveal ✨</p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-lavender-200 via-pink-200 to-peach-200 rounded-3xl p-6 flex items-center justify-center border-4 border-white/50 shadow-xl"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <p className="text-center text-purple-700">
              {memory}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
