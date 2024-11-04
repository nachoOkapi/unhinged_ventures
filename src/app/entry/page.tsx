"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AnimatedPath } from '@/components/ui/animated-path';

export default function EntryPage() {
  const [isEntering, setIsEntering] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, padding: 24 });
  const [showSecondBackground, setShowSecondBackground] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        padding: window.innerWidth < 768 ? 16 : 24
      });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleEnterSite = () => {
    setIsEntering(true);
    setTimeout(() => {
      setShowSecondBackground(true);
      setTimeout(() => {
        router.push('/home');
      }, 3500);
    }, 1000);
  };

  const expandedPadding = Math.max(
    dimensions.width * 1.5,
    dimensions.height * 1.5
  );

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#d7d1bd]" ref={containerRef}>
      <AnimatePresence>
        <motion.div
          key="initial"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/background-1.jpg"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            alt="Background with letters"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="relative">
          <motion.div 
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg frosted-glass"
            initial={false}
            animate={isEntering ? {
              padding: expandedPadding,
              transition: { 
                duration: 1.2,
                ease: [0.22, 0.03, 0.75, 0.99]
              }
            } : {
              padding: dimensions.padding,
              transition: { 
                duration: 1,
                ease: "easeInOut"
              }
            }}
          >
            <div className="relative z-10 flex flex-col items-start">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 font-pp-mori-semibold whitespace-nowrap">
                VENTURES, UNHINGED
              </h1>
              <button
                onClick={handleEnterSite}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={`text-xl md:text-2xl text-white mt-2 focus:outline-none font-junicode-bold-italic 
                  ${isEntering ? 'opacity-50 cursor-not-allowed' : 'hover:underline active:underline'}`}
                disabled={isEntering}
              >
                enter site
                {(!isHovering && showCursor && !isEntering) && 
                  <span className="opacity-100 transition-opacity duration-100">|</span>
                }
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {isEntering && (
        <motion.div
          className="absolute inset-0 z-30 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1.2,
            ease: [0.22, 0.03, 0.75, 0.99]
          }}
        >
          <Image
            src="/images/background-2trans.png"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            alt="Overlay elements"
          />
        </motion.div>
      )}

      {showSecondBackground && dimensions.width > 0 && (
        <div className="absolute inset-0 pointer-events-none z-20">
          <AnimatedPath
            width={dimensions.width}
            height={dimensions.height}
            color="#ff3c3c"
            strokeWidth={window.innerWidth < 768 ? 2 : 4}
            duration={3}
          />
        </div>
      )}
    </div>
  );
}
