import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-stone-900/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=80"
          alt="Town Coffee cozy interior"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-stone-200 tracking-[0.2em] uppercase text-sm mb-6 font-medium"
        >
          Jaipur, Rajasthan
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 font-bold"
        >
          Town Coffee
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-stone-100 max-w-2xl font-serif italic"
        >
          "Brewing Coffee Stories in Jaipur Since 2019."
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-stone-200">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-white/50 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 48, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-full h-1/2 bg-white absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
