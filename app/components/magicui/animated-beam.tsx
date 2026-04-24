"use client";

import { useEffect, useId, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement | null>;
  fromRef: React.RefObject<HTMLElement | null>;
  toRef: React.RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 4, // Fixed duration to avoid hydration mismatch
  delay = 0,
  pathColor = "rgba(255,255,255,0.05)",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#22c55e",
  gradientStopColor = "#4ade80",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}: AnimatedBeamProps) => {
  const id = useId();
  const [path, setPath] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const gradientCoordinates = reverse
    ? { x1: "0%", x2: "100%" }
    : { x1: "100%", x2: "0%" };

  useEffect(() => {
    if (!mounted) return;

    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlX = (startX + endX) / 2;
        const controlY = (startY + endY) / 2 + curvature;
        const d = `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`;
        setPath(d);
      }
    };

    const resizeObserver = new ResizeObserver(updatePath);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    // Initial update
    updatePath();

    return () => resizeObserver.disconnect();
  }, [mounted, containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  if (!mounted) return null;

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none absolute left-0 top-0 overflow-visible", className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={path}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={path}
        stroke={`url(#${id})`}
        strokeWidth={pathWidth}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
          }}
          transition={{
            delay,
            duration,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
