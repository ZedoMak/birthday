import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Heart, Star, Cake, Gift, Camera, Music2, Smile, PartyPopper } from 'lucide-react';
import { Confetti } from './components/Confetti';
import { FloatingHearts } from './components/FloatingHearts';
import { MusicPlayer } from './components/MusicPlayer';
import { MemoryCard } from './components/MemoryCard';

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollHint(false), 3000);
    return () => clearTimeout(timer);
  }, []);

 
  // The images will automatically be used if they exist, otherwise placeholder images will be shown
  const placeholderImages = [
    "https://images.unsplash.com/photo-1715281007002-0c6951203c55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNlbGVicmF0aW9uJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYxMzgxMDk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1607749101678-01b521ae7900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXN0JTIwZnJpZW5kcyUyMGhhcHB5fGVufDF8fHx8MTc2MTM4MTA5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1654281436853-fc0f3fe2d4e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwZmxvd2VycyUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjEzMDM2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1733938797036-d0ef83394294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBiYWxsb29ucyUyMHBhcnR5fGVufDF8fHx8MTc2MTM4MTEwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576355125482-531cc347b342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWtlJTIwY2VsZWJyYXRpb24lMjBzd2VldHxlbnwxfHx8fDE3NjEzODExMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1704027808873-b3de634d0842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBhZXN0aGV0aWMlMjBkcmVhbXl8ZW58MXx8fHwxNzYxMzgxMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1654799564991-663428f6bcf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGZpZWxkJTIwcHVycGxlfGVufDF8fHx8MTc2MTMzMjk3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1634393654272-9f6b168356fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjaCUyMGFlc3RoZXRpYyUyMHNvZnR8ZW58MXx8fHwxNzYxMzgxMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1672243691196-9b7f64cce1c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjBib3VxdWV0fGVufDF8fHx8MTc2MTM2ODA4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1722695151902-f99413360f89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcGFzdGVsJTIwYWVzdGhldGljfGVufDF8fHx8MTc2MTM4MTczNnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1638644074459-9067407b72a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwbGF1Z2hpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NjEyOTY2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1511773454341-0f465d0acabd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFya2xlJTIwZmFpcnklMjBsaWdodHN8ZW58MXx8fHwxNzYxMzgxNzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1710688337064-dc1bf5e1ad6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VldCUyMGRlc3NlcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjEzODE3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1617150119008-d8966efb2b68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwc2t5JTIwY2xvdWRzfGVufDF8fHx8MTc2MTM4MTczN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  // Helper function to get image URL - tries local image first, falls back to placeholder
  const getImageUrl = (index: number) => `/assets/images/image${index + 1}.jpg`;
  
  const galleryImages = Array.from({ length: 40 }, (_, i) => ({
    primary: getImageUrl(i),
    fallback: placeholderImages[i]
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-peach-50 to-lavender-50 overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Pacifico&display=swap" rel="stylesheet" />
      
      <Confetti />
      <FloatingHearts />
      <MusicPlayer />

      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex flex-col items-center justify-center relative px-4"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="inline-block mb-6"
          >
            <Cake className="text-pink-400" size={80} />
          </motion.div>

          <h1 
            className="mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            style={{ 
              fontFamily: "'Pacifico', cursive",
              fontSize: '4rem',
              lineHeight: '1.2'
            }}
          >
            Happy Birthday!
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-purple-600 mb-8 max-w-2xl mx-auto"
            style={{ fontSize: '1.5rem', fontFamily: "'Dancing Script', cursive" }}
          >
            To my amazing bestie, the one who makes every day brighter! 🎉
          </motion.p>
          <h1 
            className="mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            style={{ 
              fontFamily: "'Pacifico', cursive",
              fontSize: '2rem',
              lineHeight: '1.2'
            }}
          >
            Officially 20
          </h1>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[Heart, Star, Sparkles, Gift].map((Icon, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              >
                <Icon className="text-pink-300" size={32} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {showScrollHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-12 text-pink-400"
          >
            <p className="mb-2">Scroll down for more ✨</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-center"
            >
              ↓
            </motion.div>
          </motion.div>
        )}
      </motion.section>

      {/* Messages Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 
            className="text-center mb-16 text-pink-500"
            style={{ fontFamily: "'Pacifico', cursive", fontSize: '3rem' }}
          >
            Messages Just For You
          </h2>
          

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Smile size={40} />,
                message: "You light up every room you enter and make everyone around you feel special. Your smile is contagious and your laugh is music to my ears!"
              },
              {
                icon: <Heart size={40} />,
                message: "Thank you for being the incredible person you are. You've been there through thick and thin, and I'm so grateful to have you in my life."
              },
              {
                icon: <Star size={40} />,
                message: "You deserve all the happiness in the world today and every day. May this year bring you endless joy, success, and beautiful memories!"
              },
              {
                icon: <Sparkles size={40} />,
                message: "Here's to another year of amazing adventures, late-night talks, inside jokes, and unforgettable moments together. Love you to the moon and back!"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
                className="bg-gradient-to-br from-pink-100 via-white to-lavender-100 rounded-3xl p-8 border-4 border-white/50 shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="text-pink-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-purple-700">
                    {item.message}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Memory Cards Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-lavender-100 to-pink-100">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 
            className="text-center mb-4 text-purple-600"
            style={{ fontFamily: "'Pacifico', cursive", fontSize: '3rem' }}
          >
            Our Favorite Memories
          </h2>
          <p className="text-center text-pink-500 mb-16" style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.25rem' }}>
            Click each card to reveal a special memory! 💫
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <MemoryCard
              title="First Day of Talking to you"
              memory="I remember you started the first conversation by asking me about my-grade 😁 it was so cool talking to you and that was the first milestone of our friendship"
              icon={<Camera size={40} />}
              delay={0}
            />
            <MemoryCard
              title="Late Night When we used to spy on your crush"
              memory="we used to sit around library and watch him through window and talk about him and it was so fun and we used to laugh a lot and it was so cool⭐"
              icon={<Star size={40} />}
              delay={0.2}
            />
            <MemoryCard
              title="The day we became really close"
              memory="I know we started to become really close day by day. Those last days of school were epic. we became three (Mekdi was added) and that was so fun and I really enjoyed living that time! 💃"
              icon={<Music2 size={40} />}
              delay={0.4}
            />
            <MemoryCard
              title="The last day dinner we ate at Tenae"
              memory="It was my first time that i got out of gibi and ate with someone and actually had fun.. I don't know, but each time i am with you i feel special and appreciated and thanks for being in my life. (and that day is the day i knew you like gursha😂)"
              icon={<Heart size={40} />}
              delay={0}
            />
            <MemoryCard
              title="The phone calls after we got home"
              memory="Those break time brought us even more closer and tied us together. We talked about family and friends, crushes and dates (of course those are yours 😒), and i liked listening to your stories each time and i will continue to like them."
              icon={<Sparkles size={40} />}
              delay={0.2}
            />
            <MemoryCard
              title="Our Little Secret"
              memory="There is not much i would say about this but we know what we know and am glad to have those moments with you and i love you😘"
              icon={<PartyPopper size={40} />}
              delay={0.4}
            />
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 
            className="text-center mb-4 text-pink-500"
            style={{ fontFamily: "'Pacifico', cursive", fontSize: '3rem' }}
          >
            Gallery of Joy
          </h2>
          <p className="text-center text-purple-500 mb-16" style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.25rem' }}>
            Beautiful moments & aesthetic vibes ✨
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((imageData, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.5 * 0.1 }}
                whileHover={{ scale: 1.4, rotate: index % 2 === 0 ? 4 : -4 }}
                className="relative overflow-hidden rounded-3xl aspect-square border-4 border-white shadow-xl"
              >
                <img
                  src={imageData.primary}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== imageData.fallback) {
                      target.src = imageData.fallback;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-peach-100 to-pink-100">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 
            className="text-center mb-16 text-purple-600"
            style={{ fontFamily: "'Pacifico', cursive", fontSize: '3rem' }}
          >
            Why You're Amazing
          </h2>

          <div className="space-y-6">
            {[
              "You have the biggest heart and you don't even know it but you're always there when in need 💖",
              "Your creativity and passion inspire everyone around you (saks!! i bet you don't even know about your talent 🤣)",
              "You make the ordinary extraordinary just by being yourself ✨",
              "Your strength and resilience are truly admirable 💪 (I know you can knockout me with one punch😭😭)",
              "You're the friend everyone wishes they had 🌟",
              "Your sense of humor lights up even the darkest days 😄",
            ].map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-full px-8 py-4 border-2 border-pink-200 shadow-lg"
              >
                <p className="text-purple-700 text-center" style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.25rem' }}>
                  {fact}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final Message */}
      <section className="py-32 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 5, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.5
            }}
            className="inline-block mb-8"
          >
            <Gift className="text-pink-400" size={80} />
          </motion.div>

          <h2 
            className="mb-8 text-pink-500"
            style={{ fontFamily: "'Pacifico', cursive", fontSize: '3.5rem' }}
          >
            Make a Wish!
          </h2>

          <p 
            className="text-purple-600 mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.75rem' }}
          >
            Here's to another year of laughter, love, and incredible memories together. 
            You deserve all the happiness in the world, today and always! 🎂✨
          </p>

          <motion.div
            className="flex gap-3 justify-center flex-wrap"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              >
                <Sparkles className="text-pink-300" size={24} />
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="mt-16 text-pink-400"
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.5rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            With all my love, always and forever 💕
          </motion.p>
          <motion.p
            className="mt-16 text-pink-400"
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.5rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            (i would've wrote all of this in amharic but my keyboard betrayed me 😭🤦‍♀️)
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}
