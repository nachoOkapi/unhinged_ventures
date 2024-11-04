"use client";

import { motion } from "framer-motion";

interface AnimatedPathProps {
  width: number;
  height: number;
  color?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
}

export function AnimatedPath({
  width,
  height,
  color = "#ff3c3c",
  strokeWidth = 4,
  duration = 3,
  delay = 0,
}: AnimatedPathProps) {
  const centerX = width / 2;
  const centerY = height / 2;
  const boxWidth = 676;
  const boxHeight = 338;
  const padding = 85;
  
  // Different extension lengths for left and right sides
  const leftTailExtension = width * 0.14;
  const rightTailExtension = width * 0.21; // Increased from 0.15 to 0.25

  // Calculate path points with asymmetric tails
  const startX = centerX - (boxWidth / 2) - padding - leftTailExtension;
  const endX = centerX + (boxWidth / 2) + padding + rightTailExtension;
  const topY = centerY - (boxHeight / 2) - padding;
  const bottomY = centerY + (boxHeight / 2) + padding;

  // Create path that circles the box with extended tails
  const pathD = `
    M ${startX} ${centerY}
    H ${centerX - boxWidth/2 - padding/2}
    C ${centerX - boxWidth/2 - padding/2} ${topY},
      ${centerX + boxWidth/2 + padding/2} ${topY},
      ${centerX + boxWidth/2 + padding/2} ${centerY}
    C ${centerX + boxWidth/2 + padding/2} ${bottomY},
      ${centerX - boxWidth/2 - padding/2} ${bottomY},
      ${centerX - boxWidth/2 - padding/2} ${centerY}
    H ${endX}
  `;

  // Create arrowhead path
  const arrowD = `
    M ${endX - 20} ${centerY - 10}
    L ${endX} ${centerY}
    L ${endX - 20} ${centerY + 10}
  `;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id="marker-blur" x="-2" y="-2" width="400%" height="400%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <motion.path
        d={pathD}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#marker-blur)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration, ease: "easeInOut", delay }}
      />
      <motion.path
        d={arrowD}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: duration - 0.3 + delay }}
      />
    </svg>
  );
} 