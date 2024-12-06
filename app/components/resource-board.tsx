'use client'

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { ExternalLink, FileText, Github, Library } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from 'react'

type ResourceType = {
  title: string
  url: string
  type: "docs" | "repo" | "support" | "other"
  description?: string
}

type ResourceCategory = {
  type: ResourceType["type"]
  items: ResourceType[]
}

type SponsorType = {
  name: string
  logo?: string
  website?: string
  resourceCategories: ResourceCategory[]
}

// Updated sponsor data structure
const sponsors: SponsorType[] = [
  {
    name: "Lit Protocol",
    logo: "/sponsors/lit.png",
    website: "https://litprotocol.com",
    resourceCategories: [
      {
        type: "docs",
        items: [
          {
            title: "Documentation",
            url: "https://developer.litprotocol.com/",
            type: "docs",
            description: "Official Lit Protocol documentation for developers"
          },
          {
            title: "Integration Guide",
            url: "https://developer.litprotocol.com/integration",
            type: "docs",
            description: "Step by step guide for integrating Lit Protocol"
          }
        ]
      },
      {
        type: "repo",
        items: [
          {
            title: "Starter Template",
            url: "https://github.com/lit-protocol/starter-template",
            type: "repo",
            description: "Quick start template for building with Lit Protocol"
          },
          {
            title: "Example Projects",
            url: "https://github.com/lit-protocol/examples",
            type: "repo",
            description: "Collection of example projects using Lit Protocol"
          }
        ]
      }
    ]
  },
  {
    name: "ai16z",
    logo: "/sponsors/ai16z.jpg",
    resourceCategories: [
      {
        type: "docs",
        items: [
          {
            title: "Web3 Development Guide",
            url: "https://a16z.com/web3-dev-guide/",
            type: "docs"
          }
        ]
      }
    ]
  },
]

const getResourceIcon = (type: ResourceType["type"]) => {
  switch (type) {
    case "docs":
      return <FileText className="h-4 w-4" />
    case "repo":
      return <Github className="h-4 w-4" />
    case "support":
      return <ExternalLink className="h-4 w-4" />
    default:
      return <Library className="h-4 w-4" />
  }
}

const MotionCard = motion(Card)

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

export default function ResourceBoard() {
  const [selectedSponsor, setSelectedSponsor] = useState<string | null>(null)

  // Filter sponsors based on selection
  const filteredSponsors = selectedSponsor 
    ? sponsors.filter(sponsor => sponsor.name === selectedSponsor)
    : sponsors

  return (
    <div className="min-h-screen bg-black text-white p-6 relative overflow-hidden">
      {/* Static Grid Background */}
      <div 
        className="absolute inset-0 opacity-35 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #666 1px, transparent 1px),
            linear-gradient(to bottom, #666 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12 relative text-center z-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            sponsor resources
          </span>
        </h1>
        <p className="text-gray-400 text-lg font-mono">
          explore resources provided by our sponsors to help you build your project
        </p>
      </div>

      {/* Sponsor Filters */}
      <div className="max-w-7xl mx-auto mb-8 relative z-20">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setSelectedSponsor(null)}
            className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
              selectedSponsor === null
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 border border-gray-700'
            }`}
          >
            all sponsors
          </button>
          {sponsors.map((sponsor) => (
            <button
              key={sponsor.name}
              onClick={() => setSelectedSponsor(sponsor.name)}
              className={`px-4 py-2 rounded-full font-mono text-sm flex items-center gap-2 transition-all duration-300 border ${
                selectedSponsor === sponsor.name
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 border-gray-700'
              }`}
            >
              {sponsor.logo && (
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  width={16}
                  height={16}
                  className="rounded"
                />
              )}
              {sponsor.name.toLowerCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Resources Grid - Update to use filteredSponsors */}
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {filteredSponsors.map((sponsor) => (
          <MotionCard 
            key={sponsor.name} 
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="relative bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-6 relative">
              <div className="flex items-center gap-4 mb-4">
                {sponsor.logo && (
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                )}
                <h2 className="text-xl font-semibold font-mono text-cyan-50">
                  {sponsor.name.toLowerCase()}
                </h2>
              </div>

              <div className="space-y-6">
                {sponsor.resourceCategories.map((category) => (
                  <div key={category.type} className="space-y-3">
                    <div className="flex items-center gap-2 text-cyan-400/80 mb-2">
                      {getResourceIcon(category.type)}
                      <span className="text-sm font-mono uppercase">
                        {category.type}s
                      </span>
                    </div>
                    {category.items.map((resource) => (
                      <a
                        key={resource.url}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors group/item"
                      >
                        <span className="font-medium font-mono text-cyan-50">
                          {resource.title.toLowerCase()}
                        </span>
                        {resource.description && (
                          <p className="text-sm text-gray-400 mt-1">
                            {resource.description.toLowerCase()}
                          </p>
                        )}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </MotionCard>
        ))}
      </motion.div>
    </div>
  )
} 