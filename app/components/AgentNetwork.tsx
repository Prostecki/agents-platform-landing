'use client'

import React, { useRef } from 'react'
import { motion, Variants } from 'framer-motion'
import { AnimatedBeam } from './magicui/animated-beam'
import { fadeIn } from '@/app/lib/utils'

export default function AgentNetwork() {
  const containerRef = useRef<HTMLDivElement>(null)
  const hubRef = useRef<HTMLDivElement>(null)
  const userRef = useRef<HTMLDivElement>(null)
  const trnRef = useRef<HTMLDivElement>(null)
  const hlthRef = useRef<HTMLDivElement>(null)
  const nutrRef = useRef<HTMLDivElement>(null)
  const coachRef = useRef<HTMLDivElement>(null)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const nodeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <div className="bg-bg border-b border-subtle p-pad text-center overflow-hidden">
      <motion.div 
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-[30px] lg:text-[42px] font-bold tracking-[-1px] lg:tracking-[-1.5px] leading-[1.08] mb-3">How your coaches talk.</h2>
        <p className="text-[14px] lg:text-[16px] text-muted leading-[1.65] max-w-[480px] mx-auto">Every time you ask a question, both agents share context automatically. No setup. No switching.</p>
      </motion.div>

      <motion.div 
        ref={containerRef} 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative inline-block w-full max-w-[860px] h-[280px] lg:h-[400px]"
      >
        {/* Beams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={userRef}
          toRef={hubRef}
          curvature={-20}
          duration={3}
          gradientStartColor="var(--muted)"
          gradientStopColor="var(--fg)"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={trnRef}
          toRef={hubRef}
          curvature={-20}
          duration={3}
          delay={0.4}
          gradientStartColor="var(--muted)"
          gradientStopColor="var(--fg)"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={hlthRef}
          toRef={hubRef}
          curvature={-20}
          duration={3}
          delay={0.8}
          gradientStartColor="var(--muted)"
          gradientStopColor="var(--fg)"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={hubRef}
          toRef={nutrRef}
          curvature={-20}
          duration={3}
          delay={0.2}
          gradientStartColor="var(--green)"
          gradientStopColor="var(--green-text)"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={hubRef}
          toRef={coachRef}
          curvature={-20}
          duration={3}
          delay={0.6}
          gradientStartColor="var(--indigo-base)"
          gradientStopColor="var(--indigo-light)"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={nutrRef}
          toRef={coachRef}
          curvature={-20}
          duration={4}
          delay={1.2}
          gradientStartColor="var(--green)"
          gradientStopColor="var(--green-text)"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={coachRef}
          toRef={nutrRef}
          curvature={-20}
          duration={4}
          delay={1.8}
          reverse
          gradientStartColor="var(--indigo-base)"
          gradientStopColor="var(--indigo-light)"
        />

        {/* Nodes */}
        <motion.div ref={userRef} variants={nodeVariants} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-[2]" style={{left:'10%',top:'22%'}}>
          <div className="w-[38px] lg:w-[52px] h-[38px] lg:h-[52px] rounded-full border border-white/12 dark:border-white/12 data-[theme=light]:border-black/12 bg-bg-white flex items-center justify-center text-[13px] lg:text-[18px] shadow-[0_0_0_6px_var(--subtle)]">💬</div>
          <div className="text-[9px] lg:text-[11px] font-semibold text-fg whitespace-nowrap tracking-[-0.2px]">You</div>
          <div className="hidden lg:block text-[10px] text-muted -mt-1.5 whitespace-nowrap">Ask anything</div>
        </motion.div>
        <motion.div ref={trnRef} variants={nodeVariants} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-[2]" style={{left:'10%',top:'52%'}}>
          <div className="w-[38px] lg:w-[52px] h-[38px] lg:h-[52px] rounded-full border border-white/12 dark:border-white/12 data-[theme=light]:border-black/12 bg-bg-white flex items-center justify-center text-[13px] lg:text-[18px] shadow-[0_0_0_6px_var(--subtle)]">🏃</div>
          <div className="text-[9px] lg:text-[11px] font-semibold text-fg whitespace-nowrap tracking-[-0.2px]">Training Log</div>
          <div className="hidden lg:block text-[10px] text-muted -mt-1.5 whitespace-nowrap">Sessions &amp; load</div>
        </motion.div>
        <motion.div ref={hlthRef} variants={nodeVariants} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-[2]" style={{left:'10%',top:'82%'}}>
          <div className="w-[38px] lg:w-[52px] h-[38px] lg:h-[52px] rounded-full border border-white/12 dark:border-white/12 data-[theme=light]:border-black/12 bg-bg-white flex items-center justify-center text-[13px] lg:text-[18px] shadow-[0_0_0_6px_var(--subtle)]">❤️</div>
          <div className="text-[9px] lg:text-[11px] font-semibold text-fg whitespace-nowrap tracking-[-0.2px]">Health Data</div>
          <div className="hidden lg:block text-[10px] text-muted -mt-1.5 whitespace-nowrap">HRV · Sleep · Fatigue</div>
        </motion.div>
        <motion.div ref={hubRef} variants={nodeVariants} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-[2]" style={{left:'50%',top:'50%'}}>
          <div className="w-[52px] lg:w-[72px] h-[52px] lg:h-[72px] rounded-full border border-green/30 bg-bg-white flex items-center justify-center text-[18px] lg:text-2xl shadow-[0_0_0_8px_var(--green-bg),0_0_40px_var(--green-border)]">⚡</div>
          <div className="text-[9px] lg:text-[11px] font-semibold text-fg whitespace-nowrap tracking-[-0.2px]">Athlete AI</div>
          <div className="hidden lg:block text-[10px] text-muted -mt-1.5 whitespace-nowrap">A2A Protocol</div>
        </motion.div>
        <motion.div ref={nutrRef} variants={nodeVariants} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-[2]" style={{left:'90%',top:'28%'}}>
          <div className="w-[38px] lg:w-[52px] h-[38px] lg:h-[52px] rounded-full border border-green/30 bg-green-bg flex items-center justify-center text-[13px] lg:text-[18px] shadow-[0_0_0_6px_var(--green-bg)]">🥗</div>
          <div className="text-[9px] lg:text-[11px] font-semibold text-fg whitespace-nowrap tracking-[-0.2px]">Nutrition Agent</div>
          <div className="hidden lg:block text-[10px] text-muted -mt-1.5 whitespace-nowrap">Meals · Macros · Timing</div>
        </motion.div>
        <motion.div ref={coachRef} variants={nodeVariants} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-[2]" style={{left:'90%',top:'72%'}}>
          <div className="w-[38px] lg:w-[52px] h-[38px] lg:h-[52px] rounded-full border border-indigo-base/30 bg-indigo-subtle flex items-center justify-center text-[13px] lg:text-[18px] shadow-[0_0_0_6px_var(--indigo-subtle)]">🏋️</div>
          <div className="text-[9px] lg:text-[11px] font-semibold text-fg whitespace-nowrap tracking-[-0.2px]">Training Agent</div>
          <div className="hidden lg:block text-[10px] text-muted -mt-1.5 whitespace-nowrap">Load · Recovery · Plan</div>
        </motion.div>
      </motion.div>
    </div>
  )
}
