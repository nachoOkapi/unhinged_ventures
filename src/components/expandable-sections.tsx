"use client"

import React from "react"
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

interface Project {
  title: string
  description: string
  image: string
  link: string
}

interface Section {
  title: string
  items: Project[]
}

export default function ExpandableSections({ sections }: { sections: Section[] }) {
  const router = useRouter()

  const handleItemClick = (link: string) => {
    router.push(link)
  }

  return (
    <div className="flex flex-col md:flex-row w-full bg-primary-brown-dark/10 rounded-lg shadow-lg backdrop-blur-sm text-text-headline">
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col relative"
          style={{ width: '100%' }}
        >
          {index !== sections.length - 1 && (
            <div className="hidden md:block absolute right-0 h-[86%] top-1/2 -translate-y-1/2 border-r-4 border-primary-red-dark/70" />
          )}
          <div className="relative">
            <h2 className="p-4 md:p-6 font-bold text-3xl md:text-4xl font-pp-mori-semibold text-text-headline">
              {section.title}
            </h2>
            <div className="md:hidden h-0.5 mx-4 bg-primary-red-dark/70" />
          </div>
          <ul className="p-4 md:p-8 space-y-4 md:space-y-6 list-none">
            {section.items.map((item, itemIndex) => (
              <li 
                key={itemIndex} 
                className="text-2xl font-semibold cursor-pointer transition-all duration-300 hover:text-primary-red group flex justify-between items-center"
                onClick={() => handleItemClick(item.link)}
              >
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </span>
                <motion.svg
                  className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary-red"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
