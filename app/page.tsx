'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

const combinedCardVariants = {
  rest: {
    scale: 1,
    opacity: 0,
    y: 20,
    transition: { duration: 0.5, type: 'tween', ease: 'easeOut' },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.4, type: 'tween', ease: 'easeOut' },
  },
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
      gradient: 'bg-blue-500',
      image: '/images/illustration3.png',
      buttonText: 'View Details',
      disabled: false,
    },
  ];

  return (
    <main className='relative'>
      <div className='relative px-6 py-24 md:py-32'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            variants={container}
            initial='hidden'
            animate='visible'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            {adventures.map((adventure, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={combinedCardVariants}
                initial='rest'
                whileHover='hover'
                animate='visible'
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
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />

                {/* Content */}
                <div className='absolute inset-0 p-6 sm:p-8 flex flex-col'>
                  <motion.div
                    variants={tagHover}
                    className='inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium self-start'
                  >
                    {adventure.category}
                  </motion.div>

                  <div className='mt-auto'>
                    <h2 className='text-2xl sm:text-3xl font-serif text-white whitespace-pre-line mb-4'>
                      {adventure.title}
                    </h2>
                    {adventure.disabled ? (
                      <span className='inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium'>
                        {adventure.buttonText}
                      </span>
                    ) : (
                      <Link href='/ideas'>
                        <span className='inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/20 transition-colors'>
                          {adventure.buttonText}
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
