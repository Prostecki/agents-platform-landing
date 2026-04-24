"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/app/lib/utils";
import { AnimatedBeam } from "./magicui/animated-beam";

const Node = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children?: React.ReactNode;
    label?: string;
    description?: string;
  }
>(({ className, children, label, description }, ref) => {
  return (
    <div className="flex flex-col items-center gap-3 z-10">
      <div
        ref={ref}
        className={cn(
          "flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full border-2 border-subtle bg-bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {children}
      </div>
      {label && (
        <div className="flex flex-col items-center text-center">
          <div className="text-[13px] lg:text-[15px] font-semibold text-fg whitespace-nowrap tracking-[-0.2px]">
            {label}
          </div>
          {description && (
            <div className="hidden md:block text-[10px] lg:text-[13px] text-muted whitespace-nowrap">
              {description}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

Node.displayName = "Node";

export default function AgentNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-bg border-b border-subtle p-pad text-center overflow-hidden">
      <div className="">
        <h2 className="text-[30px] md:text-[36px] lg:text-[42px] font-bold tracking-[-1px] lg:tracking-[-1.5px] leading-[1.08] mb-3">
          How your coaches talk.
        </h2>
        <p className="text-[14px] lg:text-[16px] text-muted leading-[1.65] max-w-[480px] mx-auto">
          Every time you ask a question, both agents share context automatically. No setup. No switching.
        </p>
      </div>

      <div
        className="relative flex h-[420px] md:h-[520px] lg:h-[650px] w-full items-center justify-center overflow-hidden rounded-lg bg-bg p-4 lg:p-10"
        ref={containerRef}
      >
        <div className="flex size-full flex-col max-w-lg max-h-[260px] md:max-h-[310px] lg:max-h-[340px] items-stretch justify-center gap-6 md:gap-8 lg:gap-10">
          {/* Top Row */}
          <div className="flex flex-row items-center justify-between">
            <Node ref={div1Ref} label="You" description="Ask anything">
              <span className="text-2xl lg:text-3xl">💬</span>
            </Node>
            <Node ref={div5Ref} label="Nutrition" description="Meals & Macros">
              <span className="text-2xl lg:text-3xl">🥗</span>
            </Node>
          </div>

          {/* Middle Row */}
          <div className="flex flex-row items-center justify-between">
            <Node ref={div2Ref} label="Training Log" description="Sessions & Load">
              <span className="text-2xl lg:text-3xl">🏃</span>
            </Node>
            <Node
              ref={div4Ref}
              label="Athlete AI"
              description="A2A Protocol"
              className="h-16 w-16 lg:h-24 lg:w-24 border-green/30 shadow-[0_0_40px_var(--green-border)]"
            >
              <span className="text-3xl lg:text-4xl">⚡</span>
            </Node>
            <Node ref={div6Ref} label="Training Agent" description="Plan & Recovery">
              <span className="text-2xl lg:text-3xl">🏋️</span>
            </Node>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-row items-center justify-between">
            <Node ref={div3Ref} label="Health" description="HRV & Recovery">
              <span className="text-2xl lg:text-3xl">❤️</span>
            </Node>
            <Node ref={div7Ref} label="Insights" description="Real-time updates">
              <span className="text-2xl lg:text-3xl">📊</span>
            </Node>
          </div>
        </div>

        {/* Beams: Left Side */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-40}
          endYOffset={-10}
          duration={10}
          repeatDelay={1}
          gradientStartColor="var(--muted)"
          gradientStopColor="var(--fg)"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
          duration={10}
          repeatDelay={1}
          gradientStartColor="var(--muted)"
          gradientStopColor="var(--fg)"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={40}
          endYOffset={10}
          duration={10}
          repeatDelay={1}
          gradientStartColor="var(--muted)"
          gradientStopColor="var(--fg)"
        />

        {/* Beams: Right Side */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div5Ref}
          curvature={-40}
          startYOffset={-5}
          duration={10}
          repeatDelay={1}
          gradientStartColor="var(--green)"
          gradientStopColor="var(--green-text)"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div6Ref}
          duration={10}
          repeatDelay={1}
          gradientStartColor="var(--indigo-base)"
          gradientStopColor="var(--indigo-light)"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div7Ref}
          curvature={40}
          startYOffset={10}
          duration={10}
          repeatDelay={1}
          gradientStartColor="var(--purple)"
          gradientStopColor="var(--purple-subtle)"
        />
      </div>
    </div>
  );
}
