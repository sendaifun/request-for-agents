'use client'

import { useEffect, useState } from 'react'

const randomLogs = [
  "initializing ai modules...",
  "loading neural networks...",
  "connecting to solana network...",
  "optimizing smart contracts...",
  "calibrating ai parameters...",
  "syncing blockchain data...",
  "loading model weights...",
  "establishing secure connection...",
  "validating network status...",
  "processing training data..."
]

export default function LoadingScreen() {
  const [logs, setLogs] = useState<string[]>([])
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < 5) { // Show 5 random logs
        setLogs(prev => [...prev, randomLogs[Math.floor(Math.random() * randomLogs.length)]])
        currentIndex++
      } else {
        clearInterval(interval)
        setTimeout(() => setShowContent(true), 1000) // Delay before showing content
      }
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`fixed inset-0 bg-[#050505] z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${showContent ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-cyan-500 text-2xl mb-8 animate-pulse">
        loading send_ai...
      </div>
      <div className="max-w-md w-full space-y-2 font-mono text-sm">
        {logs.map((log, index) => (
          <div 
            key={index}
            className="text-cyan-600/70 opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 500}ms` }}
          >
            {`> ${log}`}
          </div>
        ))}
      </div>
    </div>
  )
} 