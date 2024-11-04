"use client";

import { RefObject, useEffect, useId, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement>; // Container ref
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "#293cf1",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#293cf1",
  gradientStopColor = "#6b76f3",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const gradientCoordinates = reverse
    ? {
        x1: ["100%", "0%"],
        x2: ["0%", "100%"],
      }
    : {
        x1: ["0%", "100%"],
        x2: ["100%", "0%"],
      };

  useEffect(() => {
    if (!containerRef?.current || !fromRef?.current || !toRef?.current) {
      console.log('AnimatedBeam: Refs not available, waiting...');
      const checkRefs = setInterval(() => {
        if (containerRef?.current && fromRef?.current && toRef?.current) {
          clearInterval(checkRefs);
          updatePath();
        }
      }, 100);
      return () => clearInterval(checkRefs);
    }

    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) {
        console.log('AnimatedBeam: Refs not available in updatePath');
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const rectA = fromRef.current.getBoundingClientRect();
      const rectB = toRef.current.getBoundingClientRect();

      const svgWidth = containerRect.width;
      const svgHeight = containerRect.height;

      if (svgWidth === 0 || svgHeight === 0) {
        console.log('AnimatedBeam: Container has zero width or height');
        return;
      }

      setSvgDimensions({ width: svgWidth, height: svgHeight });

      const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
      const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
      const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
      const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

      const midX = (startX + endX) / 2;
      const midY = (startY + endY) / 2;

      const controlX1 = midX + (endY - startY) * curvature / 100;
      const controlY1 = midY - (endX - startX) * curvature / 100;
      const controlX2 = midX - (endY - startY) * curvature / 100;
      const controlY2 = midY + (endX - startX) * curvature / 100;

      const d = `M ${startX},${startY} C ${controlX1},${controlY1} ${controlX2},${controlY2} ${endX},${endY}`;
      setPathD(d);

      console.log('AnimatedBeam: Path updated', { svgWidth, svgHeight, startX, startY, endX, endY, d });
    };

    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });

    resizeObserver.observe(containerRef.current);
    updatePath();

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  console.log('AnimatedBeam: Rendering SVG', { svgDimensions, pathD });

  if (svgDimensions.width === 0 || svgDimensions.height === 0) {
    return null;
  }

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu",
        className
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          animate={gradientCoordinates}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration,
            delay,
            ease: "linear",
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" offset="0%" />
          <stop stopColor={gradientStartColor} offset="20%" />
          <stop stopColor={gradientStopColor} offset="80%" />
          <stop stopColor={gradientStopColor} stopOpacity="0" offset="100%" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
