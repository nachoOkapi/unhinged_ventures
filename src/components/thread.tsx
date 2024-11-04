"use client"

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimatedBeam } from '@/components/ui/animated-beam'
import React from 'react'
import FlickeringGrid from '@/components/ui/flickering-grid';

type Project = {
  id: string
  title: string
  description: string
  image: string
  link: string
}

type Idea = {
  id: string
  name: string
  projects: Project[]
}

const ideas: Idea[] = [
  {
    id: '1',
    name: 'Hardware',
    projects: [
      { id: '1a', title: 'SPCT', description: 'Description', image: '/placeholder.svg?height=200&width=300', link: 'https://example.com/spct' },
      { id: '1b', title: 'Alarm Cock', description: 'Description', image: '/placeholder.svg?height=200&width=300', link: 'https://example.com/alarm-cock' },
      { id: '1c', title: 'Butt Bowls', description: 'Description', image: '/placeholder.svg?height=200&width=300', link: 'https://example.com/butt-bowls' },
    ],
  },
  {
    id: '2',
    name: 'Apps',
    projects: [
      { id: '2a', title: 'DFTM', description: 'Doorframe Timemachine - DFTM - is a tool for parents to track the growth of their children, giving them an easy way to keep the memories of these changing times.', image: '/placeholder.svg?height=200&width=300', link: 'https://www.doorframetimemachine.com' },
      { id: '2b', title: 'Kost', description: 'Description', image: '/placeholder.svg?height=200&width=300', link: 'https://kost-landing.vercel.app/' },
      { id: '2c', title: 'Daily Profit', description: 'Description', image: '/placeholder.svg?height=200&width=300', link: 'https://dp-landing-hazel.vercel.app/' },
      { id: '2d', title: 'Supplia', description: 'Description', image: '/placeholder.svg?height=200&width=300', link: 'https://supplia-landing.vercel.app/' },
      { id: '2e', title: 'Energy', description: 'Description', image: '/placeholder.svg?height=200&width=300', link: 'https://energy-landing-alpha.vercel.app/' },
    ],
  },
  {
    id: '3',
    name: 'Toys',
    projects: [
      { id: '3a', title: 'Example', description: 'Description', image: '/placeholder.svg?height=200&width=300', link: 'https://example.com/build-a-bitch' },
    ],
  },
  {
    id: '4',
    name: 'World Changing',
    projects: [
      { id: '4a', title: 'Starlink-for-All', description: 'Description', image: '/placeholder.svg?height=200&width=300', link: 'https://example.com/starlink-for-all' },
      { id: '4b', title: 'Lentil', description: 'Description', image: '/placeholder.svg?height=200&width=300', link: 'https://example.com/lentil' },
      { id: '4c', title: 'Mel & Monaco', description: 'Description', image: '/placeholder.svg?height=200&width=300', link: 'https://example.com/mel-and-monaco' },
    ],
  },
]

export default function InteractiveElement() {
  const [selectedIdea, setSelectedIdea] = useState<string | null>(null);
  const [refsReady, setRefsReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const ideaRefs = useRef<{ [key: string]: React.RefObject<HTMLButtonElement> }>({});

  useEffect(() => {
    ideas.forEach((idea) => {
      if (!ideaRefs.current[idea.id]) {
        ideaRefs.current[idea.id] = React.createRef<HTMLButtonElement>();
      }
    });
    setRefsReady(true);
  }, []);

  return (
    <section className="py-20 relative bg-white">
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        flickerChance={0.3}
        color="rgb(200, 200, 200)"
        maxOpacity={0.1}
      />
      <div className="container mx-auto px-4 relative z-20">
        <div className="relative h-[500px] mb-16" ref={containerRef}>
          {refsReady && ideas.map((idea, index, array) => (
            <React.Fragment key={idea.id}>
              <div className={`absolute z-30 ${getPosition(index)}`}>
                <motion.button
                  ref={ideaRefs.current[idea.id]}
                  className={`px-4 py-2 rounded-full text-lg font-semibold ${
                    selectedIdea === idea.id ? 'bg-[#293cf1] text-white' : 'bg-white text-[#293cf1] border-2 border-[#293cf1]'
                  }`}
                  onClick={() => setSelectedIdea(selectedIdea === idea.id ? null : idea.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {idea.name}
                </motion.button>
              </div>
              {index < array.length - 1 && (
                <AnimatedBeam
                  key={`beam-${idea.id}-${array[index + 1].id}`}
                  containerRef={containerRef}
                  fromRef={ideaRefs.current[idea.id]}
                  toRef={ideaRefs.current[array[index + 1].id]}
                  curvature={30}
                  pathColor="#3B82F6"
                  pathWidth={2}
                  pathOpacity={0.2}
                  gradientStartColor="#3B82F6"
                  gradientStopColor="#93C5FD"
                  delay={index * 0.5}
                  duration={5}
                  className="z-10"
                />
              )}
            </React.Fragment>
          ))}
        </div>
        {selectedIdea && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {ideas
              .find((idea) => idea.id === selectedIdea)
              ?.projects.map((project) => (
                <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.id}>
                  <motion.div
                    className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer flex flex-col min-h-[400px]"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    </div>
                    <div className="relative h-40 w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </motion.div>
                </a>
              ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

function getPosition(index: number) {
  switch (index) {
    case 0: return 'left-[10%] top-[10%]'
    case 1: return 'left-[30%] top-[30%]'
    case 2: return 'right-[30%] bottom-[30%]'
    case 3: return 'right-[10%] bottom-[10%]'
    default: return 'left-1/2 top-1/2'
  }
}
