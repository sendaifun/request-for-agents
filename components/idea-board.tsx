'use client';

import { useEffect, useState } from 'react';
import { Brain, Users, Terminal, Database, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/use-media-query';

interface IdeaItem {
  'Idea Header (10 words max)': string;
  'Idea Description (120 words max)': string;
  Theme: string;
  Platform: string;
  'Reference Links and Examples': string;
  'Idea Contributor': string;
  'Idea Reviewer': string;
}

function extractUrl(text: string): string {
  const httpMatch = text.match(/https?:\/\/[^\s]+/);
  if (httpMatch) return httpMatch[0];
  const domainMatch = text.match(/(?:^|\s)((?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})/);
  if (domainMatch) return `https://${domainMatch[1]}`;
  return '#';
}

const tracks = [
  { name: 'Social Agents', icon: Users },
  { name: 'DeFi Agents', icon: Brain },
  { name: 'Agent Infra', icon: Terminal },
  { name: 'Agent Aggregators', icon: Database },
];

export default function IdeaBoard() {
  const [ideas, setIdeas] = useState<IdeaItem[]>([]);
  const [selectedReference, setSelectedReference] = useState<string | null>(
    null
  );
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/2wu9a6ss452zk');
        const data = await response.json();
        setIdeas(data);
      } catch (error) {
        console.error('Error fetching ideas:', error);
      }
    };
    fetchIdeas();
  }, []);

  const filteredIdeas = selectedTrack
    ? ideas.filter((idea) => {
        const ideaTheme = idea.Theme?.toLowerCase() || '';
        const trackName = selectedTrack.toLowerCase();
        return ideaTheme.includes(trackName) || trackName.includes(ideaTheme);
      })
    : ideas;

  return (
    <div className='relative'>
      {/* Track Filters */}
      <div className='relative px-6'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
          className='flex flex-wrap justify-center gap-3 max-w-2xl mx-auto'
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedTrack(null)}
            className={`${
              isMobile ? 'px-4 py-2 text-sm' : 'px-5 py-2.5 text-sm'
            } rounded-full font-medium transition-all duration-300 ${
              selectedTrack === null
                ? 'bg-neutral-900 text-white shadow-sm'
                : 'bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-100 shadow-sm'
            }`}
          >
            All Ideas
          </motion.button>
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <motion.button
                key={track.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTrack(track.name)}
                className={`${
                  isMobile ? 'px-4 py-2 text-sm' : 'px-5 py-2.5 text-sm'
                } rounded-full font-medium flex items-center gap-2 transition-all duration-300 ${
                  selectedTrack === track.name
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-100 shadow-sm'
                }`}
              >
                <Icon className='w-3.5 h-3.5' />
                {track.name}
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Ideas Grid */}
      <div className='px-6 py-8'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
        >
          {filteredIdeas.map((idea, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
              className='group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300'
            >
              <div className='flex flex-col h-full'>
                <div className='inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm font-medium mb-3 self-start'>
                  {idea.Theme?.toLowerCase().includes('defi') ? (
                    <Brain className='w-3.5 h-3.5' />
                  ) : idea.Theme?.toLowerCase().includes('social') ? (
                    <Users className='w-3.5 h-3.5' />
                  ) : (
                    <Terminal className='w-3.5 h-3.5' />
                  )}
                  {idea.Theme}
                </div>
                <h3 className='text-lg font-medium mb-2 text-neutral-900 font-serif'>
                  {idea['Idea Header (10 words max)']}
                </h3>
                <p className='text-sm text-neutral-600 mb-4 flex-grow leading-relaxed'>
                  {idea['Idea Description (120 words max)']}
                </p>
                <div className='flex items-center justify-between pt-4 border-t border-neutral-100'>
                  <div className='flex items-center gap-1.5 text-sm text-neutral-500'>
                    <Users className='w-3.5 h-3.5' />
                    {idea['Idea Contributor']}
                  </div>
                  {idea['Reference Links and Examples'] && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        setSelectedReference(
                          idea['Reference Links and Examples']
                        )
                      }
                      className='text-sm font-medium text-neutral-900 hover:text-neutral-600 flex items-center gap-1'
                    >
                      View Details
                      <svg
                        className='w-3.5 h-3.5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Reference Modal */}
      {selectedReference && (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className='bg-white rounded-2xl p-6 max-w-lg w-full relative'
          >
            <button
              onClick={() => setSelectedReference(null)}
              className='absolute top-4 right-4 text-neutral-500 hover:text-neutral-700'
            >
              <X className='w-5 h-5' />
            </button>
            <h3 className='text-lg font-medium mb-4'>Reference Links</h3>
            <div className='text-neutral-600'>
              <a
                href={extractUrl(selectedReference)}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:underline break-all'
              >
                {selectedReference}
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
