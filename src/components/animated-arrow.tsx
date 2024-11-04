"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [isAnimating, setIsAnimating] = useState(false)

  const mainPathVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  }

  const arrowheadPathVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      transition: { 
        duration: 0.5,
        ease: "easeInOut",
        delay: 1.5 // Start after main path animation
      }
    }
  }

  const handleClick = () => {
    setIsAnimating(true)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <svg width="600" height="200" viewBox="0 0 600 225">
        <motion.path
          d="M50 25 Q 100 175 550 175 L 575 175"
          fill="transparent"
          stroke="#ff0000"
          strokeWidth="4"
          strokeLinecap="butt"
          strokeLinejoin="round"
          initial="hidden"
          animate={isAnimating ? "visible" : "hidden"}
          variants={mainPathVariants}
        />
        <motion.path
          d="M 560 165 L 575 175 L 560 185"
          fill="transparent"
          stroke="#ff0000"
          strokeWidth="4"
          strokeLinecap="butt"
          strokeLinejoin="round"
          initial="hidden"
          animate={isAnimating ? "visible" : "hidden"}
          variants={arrowheadPathVariants}
        />
        <circle cx="40" cy="15" r="10" fill="transparent" />
        <circle cx="585" cy="175" r="10" fill="transparent" />
        <text x="200" y="80" fontSize="36" fill="#ff0000" fontWeight="bold">VENTURES, UNHINGED</text>
      </svg>
      <Button 
        onClick={handleClick} 
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Animate Arrow
      </Button>
    </div>
  )
}