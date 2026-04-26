'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { LightRays } from '@/app/components/magicui/light-rays'
import { ShimmerButton } from '@/app/components/magicui/shimmer-button'

export default function Hero() {
  return (
    <div className="relative border-b border-subtle overflow-x-hidden bg-bg" style={{ backgroundImage: 'radial-gradient(circle, #ffffff15 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      <LightRays
        className="opacity-100"
        color="rgba(34, 197, 94, 0.35)"
        count={8}
        speed={10}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[680px] mx-auto px-pad py-[80px] lg:py-[120px] flex flex-col items-center text-center relative z-[1]"
      >
        <div className="inline-flex items-center gap-[7px] bg-green-bg border border-green-border rounded-[20px] py-[5px] px-[14px] mb-7 shadow-[0_2px_10px_rgba(34,197,94,0.1)]">
          <span className="w-[7px] h-[7px] rounded-full bg-green"></span>
          <span className="font-mono text-[10px] text-green-text tracking-[0.5px]">AI coaching that actually works together</span>
        </div>

        <h1 className="text-[40px] md:text-[52px] lg:text-[66px] font-bold leading-[1.02] tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.5px] mb-4 text-fg">
          Your coaches talk to each other.
          <br />
          <span className="text-green-text opacity-90">Finally.</span>
        </h1>

        <p className="text-[15px] md:text-[16px] lg:text-[17px] text-muted leading-[1.65] mb-10">
          Two AI coaches — nutrition and training —
          that actually share information with each other.
          Ask one question. Get advice that considers everything.
        </p>

        <div className="flex flex-col gap-3 items-center w-full">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <a href="#cta" className="no-underline">
              <ShimmerButton
                className="w-full sm:w-auto shadow-2xl"
                background="var(--fg)"
                shimmerColor="rgba(255,255,255,0.7)"
                borderRadius="12px"
              >
                <span className="text-bg font-bold text-[15px]">Join the Waitlist</span>
              </ShimmerButton>
            </a>
            <a href="#demo" className="border border-subtle text-muted text-sm py-[14px] px-[30px] rounded-md no-underline transition-[border-color,color] hover:border-muted hover:text-fg text-center active:scale-[0.98]">See it in action ↓</a>
          </div>
          <p className="text-[12px] text-muted font-mono m-0">No credit card. No catch. First 20 athletes free.</p>
        </div>
      </motion.div>
    </div>
  )
}
