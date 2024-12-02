'use client'

import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import LoadingScreen from './components/LoadingScreen'

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden">
        {/* Animated Circuit Board Background */}
        <div 
          className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] gap-[1px] opacity-5 animate-pulse"
          style={{
            background: "linear-gradient(to right, #111111 1px, transparent 1px), linear-gradient(to bottom, #111111 1px, transparent 1px)"
          }}
        />
        
        {/* Enhanced Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061414] via-[#050808] to-[#061414] opacity-20" />
        
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-60 h-60 bg-[#00ffff]/3 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#00ffff]/3 rounded-full blur-3xl animate-float-delayed" />
          {/* Neural Network Animation */}
          <div className="absolute top-1/4 left-1/3 w-96 h-96 opacity-10">
            <div className="absolute w-2 h-2 bg-cyan-700 rounded-full animate-neural-1" />
            <div className="absolute w-2 h-2 bg-cyan-700 rounded-full animate-neural-2" />
            <div className="absolute w-2 h-2 bg-cyan-700 rounded-full animate-neural-3" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center text-center">
          {/* Logo with Glow Effect */}
          <div className="mb-16 relative group">
            <div className="absolute inset-0 blur-2xl bg-cyan-900/10 group-hover:bg-cyan-900/20 transition-all duration-500 rounded-full" />
            <Image
              src="/sendai-logo.png"
              alt="SendAI Logo"
              width={280}
              height={80}
              className="mb-4 relative z-10 drop-shadow-[0_0_15px_rgba(0,255,255,0.2)]"
            />
          </div>

          {/* Animated Tagline */}
          {/* <h2 className="text-3xl md:text-5xl mb-4 font-light">
            <span className="text-white">sendai</span>
          </h2> */}
          <h3 className="text-2xl md:text-4xl mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-700 font-light max-w-3xl leading-tight animate-gradient">
            accelerating the solana ai ecosystem
          </h3>

          {/* Enhanced CTA Buttons */}
          <div className="flex gap-4">
            <Link
              href="https://solanaaihackathon.com"
              target="_blank"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#061010] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 border border-cyan-900/20"
            >
              <span className="relative z-10 flex items-center">
                join the hackathon
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-cyan-800/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* Animated Border */}
              <div className="absolute inset-0 border border-cyan-800/30 rounded-lg animate-border-glow" />
            </Link>

            <Link
              href="/ideas"
              className="group relative inline-flex items-center justify-center px-6 py-4 text-lg font-medium text-cyan-500/70 hover:text-cyan-400/90 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                ideas
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Enhanced Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-3 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM40.97 0l7.07 7.07-1.414 1.415L38.143 0h2.828zM19.03 0l-7.07 7.07 1.414 1.415L21.857 0H19.03zm16.97 0l7.485 7.485-1.414 1.414L31.515 0h4.485zM24 0l-7.485 7.485 1.414 1.414L28.485 0H24z' fill='%2300ffff' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
    </>
  )
}

