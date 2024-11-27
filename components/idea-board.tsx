'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Brain, Lightbulb, Users, X, Terminal, Database } from 'lucide-react'
import { motion } from 'framer-motion'

interface IdeaItem {
  "Idea Header (10 words max)": string
  "Idea Description (120 words max)": string
  "Theme": string
  "Platform": string
  "Reference Links and Examples": string
  "Idea Contributor": string
  "Idea Reviewer": string
}

function extractUrl(text: string): string {
  const httpMatch = text.match(/https?:\/\/[^\s]+/);
  if (httpMatch) return httpMatch[0];
  
  const domainMatch = text.match(/(?:^|\s)((?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})/);
  if (domainMatch) return `https://${domainMatch[1]}`;
  
  return '#';
}

const MotionCard = motion(Card);

export default function IdeaBoard() {
  const [ideas, setIdeas] = useState<IdeaItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedReference, setSelectedReference] = useState<string | null>(null)
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null)

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/2wu9a6ss452zk')
        const data = await response.json()
        console.log('Fetched ideas:', data.map((idea: IdeaItem) => idea.Theme))
        setIdeas(data)
      } catch (error) {
        console.error('Error fetching ideas:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchIdeas()
  }, [])

  const tracks = [
    { 
      name: 'Social Agents', 
      icon: Users, 
      activeClass: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50',
      iconClass: 'text-yellow-400' 
    },
    { 
      name: 'DeFi Agents', 
      icon: Brain, 
      activeClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50',
      iconClass: 'text-cyan-400'
    },
    { 
      name: 'Agent Infra', 
      icon: Terminal, 
      activeClass: 'bg-purple-500/20 text-purple-300 border-purple-500/50',
      iconClass: 'text-purple-400'
    },
    { 
      name: 'Agent Aggregators', 
      icon: Database, 
      activeClass: 'bg-green-500/20 text-green-300 border-green-500/50',
      iconClass: 'text-green-400'
    },
  ]

  const filteredIdeas = selectedTrack 
    ? ideas.filter(idea => {
        const ideaTheme = idea.Theme || '';
        const trackName = selectedTrack || '';
        
        return ideaTheme.trim().toLowerCase().includes(trackName.trim().toLowerCase()) ||
               trackName.trim().toLowerCase().includes(ideaTheme.trim().toLowerCase());
      })
    : ideas;

  console.log('Selected Track:', selectedTrack);
  console.log('Filtered Ideas Count:', filteredIdeas.length);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
      }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 relative overflow-hidden">
      {/* Static Grid - Change to z-0 */}
      <div 
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #666 1px, transparent 1px),
            linear-gradient(to bottom, #666 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Centered Header - Increase z-index */}
      <div className="max-w-7xl mx-auto mb-12 relative text-center z-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            Solana AI Hackathon
          </span>
        </h1>
        <p className="text-gray-400 text-lg font-mono">
          global • 15 days • build ai agents
        </p>
      </div>

      {/* Track Filters - Increase z-index */}
      <div className="max-w-7xl mx-auto mb-8 relative z-20">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setSelectedTrack(null)}
            className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
              selectedTrack === null
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 border border-gray-700'
            }`}
          >
            All Tracks
          </button>
          {tracks.map((track) => {
            const Icon = track.icon
            return (
              <button
                key={track.name}
                onClick={() => setSelectedTrack(track.name)}
                className={`px-4 py-2 rounded-full font-mono text-sm flex items-center gap-2 transition-all duration-300 border ${
                  selectedTrack === track.name
                    ? track.activeClass
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 border-gray-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${track.iconClass}`} />
                {track.name}
              </button>
            )
          })}
        </div>
      </div>

      {/* Ideas Grid - Increase z-index */}
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {loading
          ? Array(6)
              .fill(0)
              .map((_, i) => (
                <MotionCard
                  key={i}
                  variants={cardVariants}
                  className="bg-gray-900/30 border-gray-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-2/3 bg-gray-800/50 mb-4" />
                    <Skeleton className="h-4 w-full bg-gray-800/50 mb-2" />
                    <Skeleton className="h-4 w-5/6 bg-gray-800/50" />
                  </CardContent>
                </MotionCard>
              ))
          : filteredIdeas.map((idea, index) => (
              <MotionCard
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="relative bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6 relative">
                  <div className="flex items-center gap-2 mb-4">
                    {idea.Theme?.toLowerCase().includes('defi') ? (
                      <div className="relative">
                        <Brain className="w-5 h-5 text-cyan-400" />
                        <div className="absolute inset-0 blur-sm bg-cyan-400/50" />
                      </div>
                    ) : idea.Theme?.toLowerCase().includes('social') ? (
                      <div className="relative">
                        <Users className="w-5 h-5 text-yellow-400" />
                        <div className="absolute inset-0 blur-sm bg-yellow-400/50" />
                      </div>
                    ) : (
                      <div className="relative">
                        <Lightbulb className="w-5 h-5 text-purple-400" />
                        <div className="absolute inset-0 blur-sm bg-purple-400/50" />
                      </div>
                    )}
                    <span className="text-sm text-gray-400 font-mono">{idea.Theme}</span>
                    {idea.Platform && (
                      <span className="text-sm text-gray-500 font-mono">• {idea.Platform}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-50 font-mono">
                    {idea["Idea Header (10 words max)"]}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {idea["Idea Description (120 words max)"]}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span className="font-mono">{idea["Idea Contributor"] || 'Anonymous'}</span>
                    </div>
                    {idea["Reference Links and Examples"] && (
                      <button
                        onClick={() => setSelectedReference(idea["Reference Links and Examples"])}
                        className="text-cyan-400 hover:text-cyan-300 font-mono relative group"
                      >
                        <span>View References →</span>
                        <span className="absolute inset-0 blur-sm bg-cyan-400/25 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    )}
                  </div>
                </CardContent>
              </MotionCard>
            ))}
      </motion.div>

      {/* Custom Modal with updated styling */}
      {selectedReference && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900/90 border border-cyan-500/20 rounded-lg max-w-lg w-full p-6 relative"
          >
            <button
              onClick={() => setSelectedReference(null)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-lg font-semibold mb-4 text-white font-mono">
              References & Examples
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-400 text-sm whitespace-pre-wrap">
                {selectedReference}
              </p>
              {extractUrl(selectedReference) !== '#' && (
                <a
                  href={extractUrl(selectedReference)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-cyan-400 hover:text-cyan-300 text-sm font-mono group relative"
                >
                  <span>Open Link ↗</span>
                  <span className="absolute inset-0 blur-sm bg-cyan-400/25 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

