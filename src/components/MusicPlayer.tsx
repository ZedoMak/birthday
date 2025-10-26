import { useState, useRef, useEffect } from 'react';
import { Music, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Local audio file - place your music file in /public/assets/music/birthday-music.mp3
  const audioUrl = "/assets/music/birthday-music.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 right-8 z-30"
    >
      <div className="bg-gradient-to-br from-pink-200 via-peach-200 to-lavender-200 rounded-full p-4 shadow-lg backdrop-blur-sm border-2 border-white/50">
        <audio ref={audioRef} src={audioUrl} />
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
            className="bg-white rounded-full p-3 hover:bg-pink-100 transition-colors"
          >
            {isPlaying ? (
              <Pause className="text-pink-500" size={20} />
            ) : (
              <Play className="text-pink-500" size={20} />
            )}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMute}
            className="bg-white rounded-full p-3 hover:bg-pink-100 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="text-pink-500" size={18} />
            ) : (
              <Volume2 className="text-pink-500" size={18} />
            )}
          </motion.button>

          <div className="flex items-center gap-2">
            <Music className="text-pink-600" size={18} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
