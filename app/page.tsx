'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const tagHover = {
  rest: { y: 0, opacity: 1 },
  hover: {
    y: -3,
    opacity: 0.9,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export default function Page() {
  const adventures = [
    {
      title: 'Solana AI Agents\nHackathon v1',
      category: 'Hackathon',
      gradient: 'bg-indigo-600',
      image: '/images/illustration1.png',
      buttonText: 'View Details',
      disabled: false,
    },
    {
      title: 'Autonomous AI Agents\nby Send AI',
      category: 'Product',
      gradient: 'bg-rose-200',
      image: '/images/illustration2.png',
      buttonText: 'Coming Soon',
      disabled: true,
    },
    {
      title: 'Solana AI Agents\nDeveloper Kit',
      category: 'Developer Tools',
      gradient: 'bg-neutral-700',
      image: '/images/illustration3.png',
      buttonText: 'View Details',
      disabled: false,
    },
  ];

  return (
    <main className='min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24'>
        {/* Hero Section */}
        <motion.div
          initial='hidden'
          animate='visible'
          className='text-center mb-12 sm:mb-20 lg:mb-28 max-w-4xl mx-auto'
        >
          <motion.h1
            variants={fadeIn}
            custom={0}
            className='text-3xl sm:text-4xl lg:text-[4.5rem] leading-tight lg:leading-[1.1] font-serif mb-4 sm:mb-6 tracking-tight'
          >
            Accelerating the
            <br />
            <span className='text-neutral-800'>Solana AI Ecosystem</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            custom={1}
            className='text-neutral-600 text-base sm:text-lg mb-6 sm:mb-8 px-4 sm:px-0'
          >
            Join us in building the future of AI on Solana
            <br className='hidden sm:block' />
            through powerful tools and infrastructure.
          </motion.p>
          <div className='flex flex-col sm:flex-row gap-3 items-center justify-center'>
            <Link href='/ideas' className='w-full sm:w-auto'>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='relative w-full px-6 sm:px-8 py-2.5 sm:py-3 group overflow-hidden'
              >
                <div className='absolute inset-0 border border-neutral-900 rounded-full transition-all duration-300 group-hover:bg-neutral-900/5' />
                <span className='relative z-10 font-medium text-neutral-900'>
                  Explore Ideas
                </span>
              </motion.button>
            </Link>
            <a
              href='https://x.com/sendaifun'
              target='_blank'
              rel='noopener noreferrer'
              className='w-full sm:w-auto'
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='relative w-full px-6 sm:px-8 py-2.5 sm:py-3 group overflow-hidden'
              >
                <div className='absolute inset-0 bg-neutral-900 rounded-full transition-all duration-300 group-hover:bg-neutral-800' />
                <span className='relative z-10 font-medium text-white'>
                  Get in Touch
                </span>
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial='hidden'
          animate='visible'
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'
        >
          {adventures.map((adventure, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              custom={index}
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl ${adventure.gradient} aspect-[16/10] sm:aspect-[3/4] cursor-pointer`}
            >
              {/* Background Image */}
              <motion.div
                className='absolute inset-0 w-full h-full'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
              >
                <Image
                  src={adventure.image}
                  alt={adventure.title}
                  fill
                  className='object-cover'
                  priority={index === 0}
                />
              </motion.div>

              {/* Gradient Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent'></div>

              {/* Content */}
              <div className='relative h-full flex flex-col p-4 sm:p-6'>
                <div className='space-y-2 sm:space-y-3'>
                  <motion.span
                    variants={tagHover}
                    className='inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium w-fit'
                  >
                    {adventure.category}
                  </motion.span>
                  <h3 className='text-lg sm:text-xl lg:text-2xl font-serif text-white whitespace-pre-line tracking-tight'>
                    {adventure.title}
                  </h3>
                </div>
                <div className='absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6'>
                  <motion.button
                    whileHover={
                      !adventure.disabled ? { scale: 1.02 } : undefined
                    }
                    whileTap={!adventure.disabled ? { scale: 0.98 } : undefined}
                    className={`w-full px-4 py-2 sm:py-2.5 bg-white text-neutral-900 rounded-full text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2 ${
                      adventure.disabled
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-neutral-100'
                    }`}
                    disabled={adventure.disabled}
                  >
                    {adventure.buttonText}
                    {!adventure.disabled && <span className='text-lg'>→</span>}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
