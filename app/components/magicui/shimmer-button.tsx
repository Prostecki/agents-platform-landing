import React, { type ComponentPropsWithoutRef } from "react"
import { cn } from "@/app/lib/utils"

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
  children?: React.ReactNode
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "1.5px",
      shimmerDuration = "2.5s",
      borderRadius = "12px",
      background = "var(--fg)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative flex items-center justify-center overflow-hidden transition-all duration-300 active:scale-95 border-none p-0 shrink-0",
          className
        )}
        style={{ 
          borderRadius,
          background: "transparent",
          isolation: 'isolate'
        }}
        {...props}
      >
        {/* 1. The Shimmer Layer (Spinning Light) */}
        <div
          className="shimmer-spin-layer absolute inset-[-150%] pointer-events-none"
          style={{
            background: `conic-gradient(from 0deg, transparent 40%, ${shimmerColor} 50%, transparent 60%)`,
            animation: `shimmer-spin ${shimmerDuration} linear infinite`,
          }}
        />

        {/* 2. The Background Layer */}
        <div
          className="absolute z-10 transition-all duration-300"
          style={{ 
            inset: shimmerSize,
            borderRadius: `calc(${borderRadius} - ${shimmerSize})`,
            background: background,
          }}
        />

        {/* 3. The Content Layer - Reduced padding from 8 to 6 */}
        <div className="relative z-20 flex items-center justify-center w-full h-full px-6 py-2.5">
          {children}
        </div>

        {/* 4. Glassy Reflection Overlay */}
        <div 
          className="absolute inset-0 z-30 pointer-events-none transition-colors group-hover:bg-white/5" 
          style={{ borderRadius }}
        />
      </button>
    )
  }
)

ShimmerButton.displayName = "ShimmerButton"
