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

const cardHover = {
  rest: {
    scale: 1,
    transition: { duration: 0.5, type: 'tween', ease: 'easeOut' },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.4, type: 'tween', ease: 'easeOut' },
  },
};

const buttonHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1], // Custom cubic bezier for smoother motion
    },
  },
  tap: {
    scale: 0.97,
    y: 0,
    transition: {
      duration: 0.1,
      ease: 'easeIn',
    },
  },
};

const imageHover = {
  rest: {
    scale: 1,
    transition: { duration: 0.7, type: 'tween', ease: 'easeOut' },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.4, type: 'tween', ease: 'easeOut' },
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
          className='text-center mb-20 sm:mb-28 lg:mb-32 max-w-4xl mx-auto'
        >
          <motion.h1
            variants={fadeIn}
            custom={0}
            className='text-4xl sm:text-5xl lg:text-[4.5rem] leading-tight font-serif mb-6 sm:mb-8 tracking-tight'
          >
            Accelerating the
            <br />
            <span className='text-neutral-800'>Solana AI Ecosystem</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            custom={1}
            className='text-neutral-600 text-base sm:text-lg mb-8 sm:mb-10'
          >
            Join us in building the future of AI on Solana
            <br className='hidden sm:block' />
            through powerful tools and infrastructure.
          </motion.p>
          <div className='flex flex-row gap-3 items-center justify-center'>
            <Link href='/ideas'>
              <motion.button
                animate='rest'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='relative w-auto px-8 sm:px-10 py-3 sm:py-4 group overflow-hidden'
              >
                <div className='absolute inset-0 border border-neutral-900 rounded-full transition-all duration-300 group-hover:bg-neutral-900/5' />
                <span className='relative z-10 font-medium text-neutral-900'>
                  Explore Ideas
                </span>
              </motion.button>
            </Link>
            <motion.button
              animate='rest'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='relative w-auto px-8 sm:px-10 py-3 sm:py-4 group overflow-hidden'
            >
              <div className='absolute inset-0 bg-neutral-900 rounded-full transition-all duration-300 group-hover:bg-neutral-800' />
              <span className='relative z-10 font-medium text-white'>
                Get in Touch
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial='hidden'
          animate='visible'
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10'
        >
          {adventures.map((adventure, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial='rest'
              whileHover='hover'
              animate='rest'
              variants={cardHover}
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl ${adventure.gradient} aspect-[4/5] cursor-pointer`}
            >
              {/* Background Image */}
              <motion.div
                className='absolute inset-0 w-full h-full'
                variants={imageHover}
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
              <div className='relative h-full flex flex-col p-6 sm:p-8'>
                <div className='space-y-3 sm:space-y-4'>
                  <motion.span
                    variants={tagHover}
                    className='inline-block px-4 sm:px-5 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium w-fit'
                  >
                    {adventure.category}
                  </motion.span>
                  <h3 className='text-xl sm:text-2xl lg:text-3xl font-serif text-white whitespace-pre-line tracking-tight'>
                    {adventure.title}
                  </h3>
                </div>
                <div className='mt-auto'>
                  <motion.button
                    initial='rest'
                    whileHover={!adventure.disabled ? 'hover' : 'rest'}
                    whileTap={!adventure.disabled ? 'tap' : 'rest'}
                    variants={buttonHover}
                    className={`w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-neutral-900 rounded-full text-sm font-medium transition-colors duration-300 flex items-center justify-center sm:justify-start gap-2 ${
                      adventure.disabled
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-neutral-100'
                    }`}
                    disabled={adventure.disabled}
                  >
                    {adventure.buttonText}{' '}
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
