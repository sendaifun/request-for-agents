'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className='relative py-16 md:py-24'>
      <div className='relative px-6 w-full'>
        <div className='max-w-7xl mx-auto text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className='text-4xl md:text-6xl font-serif mb-5'
          >
            <motion.span className='text-neutral-900'>
              Explore Ideas
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className='text-neutral-600 text-base md:text-lg max-w-xl mx-auto'
          >
            Browse through our curated list of AI agent ideas and find your next
            project.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
