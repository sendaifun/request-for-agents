import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import { Logo } from './components/Logo';
import Link from 'next/link';
import './globals.css';

// vercel analytics
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SEND AI - Accelerating the Solana AI Ecosystem',
  description:
    'Join us in building the future of AI on Solana through powerful tools and infrastructure. Explore AI agent ideas, participate in hackathons, and build with our developer tools.',
  keywords: [
    'Solana',
    'AI',
    'Artificial Intelligence',
    'Blockchain',
    'Web3',
    'Cryptocurrency',
    'Developer Tools',
    'Hackathon',
  ],
  authors: [{ name: 'SEND AI' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sendai.fun',
    siteName: 'SEND AI',
    title: 'SEND AI - Accelerating the Solana AI Ecosystem',
    description:
      'Join us in building the future of AI on Solana through powerful tools and infrastructure.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'SEND AI - Accelerating the Solana AI Ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEND AI - Accelerating the Solana AI Ecosystem',
    description:
      'Join us in building the future of AI on Solana through powerful tools and infrastructure.',
    creator: '@sendaifun',
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://sendai.fun'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans bg-neutral-50`}
      >
        <nav className='w-full'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
            <div className='flex justify-between items-center'>
              <Link
                href='/'
                className='flex items-center gap-1 md:gap-2 hover:opacity-80 transition-opacity'
              >
                <Logo />
                <span className='text-base md:text-xl font-medium tracking-tight'>
                  SEND AI
                </span>
              </Link>
              <div className='hidden md:flex flex-1 justify-center items-center gap-8'>
                <Link
                  href='/ideas'
                  className='text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors'
                >
                  Ideas
                </Link>
                <a
                  href='https://x.com/sendaifun'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors'
                >
                  Twitter
                </a>
              </div>
              <div className='flex items-center gap-4 md:gap-8'>
                <div className='flex md:hidden items-center gap-4'>
                  <Link
                    href='/ideas'
                    className='text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors'
                  >
                    Ideas
                  </Link>
                  <a
                    href='https://x.com/sendaifun'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors'
                  >
                    Twitter
                  </a>
                </div>
                <a
                  href='https://x.com/sendaifun'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hidden md:block px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all duration-300'
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className='pt-16'>{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
