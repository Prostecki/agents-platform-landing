'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { LightRays } from '@/app/components/magicui/light-rays'
import { ShimmerButton } from '@/app/components/magicui/shimmer-button'

export default function Hero() {
  return (
    <div className="relative grid lg:grid-cols-2 min-h-[620px] border-b border-subtle overflow-x-hidden bg-bg" style={{ backgroundImage: 'radial-gradient(circle, #ffffff15 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
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
        className="p-pad flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-subtle relative z-[1]"
      >
        <div className="inline-flex items-center gap-[7px] bg-green-bg border border-green-border rounded-[20px] py-[5px] px-[14px] mb-7 self-start shadow-[0_2px_10px_rgba(34,197,94,0.1)]">
          <span className="w-[7px] h-[7px] rounded-full bg-green"></span>
          <span className="font-mono text-[10px] text-green-text tracking-[0.5px]">AI coaching that actually works together</span>
        </div>

        <h1 className="text-[40px] md:text-[52px] lg:text-[66px] font-bold leading-[1.02] tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.5px] mb-4 text-fg">
          Your coaches talk to each other.
          <br />
          <span className="text-green-text opacity-90 block sm:inline">Finally.</span>
        </h1>

        <div className="inline-flex items-center gap-2 font-mono text-[11px] text-muted tracking-[0.3px] mb-6">
          <span>🔧</span>
          <span>Currently in development · Building in public</span>
        </div>

        <p className="text-[15px] md:text-[16px] lg:text-[17px] text-muted leading-[1.65] mb-10 max-w-[440px]">
          Most athletes split their lives between a training coach and a nutritionist who&apos;ve never met. Athlete AI connects them. Ask one question the night before a race — and get an answer that knows your legs, your food, and your next start time.
        </p>

        <div className="cta-row flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          <a href="#cta" className="w-full sm:w-auto no-underline">
            <ShimmerButton
              className="w-full sm:w-auto shadow-2xl"
              background="var(--fg)"
              shimmerColor="rgba(255,255,255,0.7)"
              borderRadius="12px"
            >
              <span className="text-bg font-bold text-[15px]">Join the Waitlist</span>
            </ShimmerButton>
          </a>
          <a href="#demo" className="w-full sm:w-auto border border-subtle text-muted text-sm py-[14px] px-[30px] rounded-md no-underline transition-[border-color] hover:border-muted hover:text-fg text-center active:scale-[0.98]">See it in action ↓</a>
        </div>
      </motion.div>

      <div
        className="p-pad lg:py-12 lg:pr-16 lg:pl-12 flex flex-col justify-center relative before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_70%_60%_at_80%_40%,rgba(34,197,94,0.05)_0%,transparent_70%)] before:pointer-events-none"
        style={{ perspective: '900px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60, rotateY: -42, rotateX: 22 }}
          whileInView={{ opacity: 1, y: 0, rotateY: -18, rotateX: 8 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
            opacity: { duration: 0.7 },
          }}
          style={{ transformStyle: 'preserve-3d', rotateZ: -1 }}
          className="relative z-1 shadow-card w-full max-w-2xl mx-auto lg:ml-auto min-w-0 bg-bg-white rounded-2xl overflow-hidden border border-subtle"
        >
          <div className="px-5 py-4 border-b border-subtle text-center bg-bg/50">
            <p className="text-[11px] text-muted font-mono tracking-widest uppercase mb-0.5">Demo Chat</p>
            <p className="text-[17px] font-bold text-fg">Athlete AI</p>
          </div>

          <div className="p-5 space-y-5">
            <div className="flex justify-end">
              <div className="bg-[#1e3a5f] dark:bg-[#1a3560] text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[82%] shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                <p className="text-[13.5px] leading-relaxed">What should I eat tonight? I&apos;m feeling really tired.</p>
              </div>
            </div>

            <div>
              <p className="text-[12px] font-bold text-muted mb-2 ml-12 uppercase tracking-wide">Nutrition Coach</p>
              <div className="flex items-end gap-3">
                <div className="w-9 h-9 rounded-full bg-green/20 border border-green/30 flex items-center justify-center text-[18px] flex-shrink-0 shadow-md" aria-hidden="true">🥗</div>
                <div className="bg-bg border border-subtle rounded-2xl rounded-bl-sm px-4 pt-3 pb-4 flex-1 flex flex-col gap-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                  <span className="self-start inline-flex items-center gap-1.5 bg-green-bg border border-green-border text-green-text rounded-full px-2.5 py-1 text-[10px] font-mono font-bold tracking-wide shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                    Agent Sync
                  </span>
                  <p className="text-[13px] leading-relaxed text-fg m-0">
                    <span className="font-semibold text-fg">Your training coach just told me</span>
                    {" "}you had a heavy leg day — squats and plyometrics. That explains the fatigue.
                  </p>
                  <p className="text-[13px] leading-relaxed text-fg m-0">
                    Tonight: pasta or rice with chicken, ~600–700 kcal. Eat before 8 pm to recover in time for tomorrow&apos;s run.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[12px] font-bold text-muted mb-2 ml-12 uppercase tracking-wide">Training Coach</p>
              <div className="flex items-end gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-base/20 border border-indigo-base/30 flex items-center justify-center text-[18px] flex-shrink-0 shadow-md" aria-hidden="true">🏃</div>
                <div className="border border-indigo-subtle bg-indigo-subtle/5 rounded-2xl rounded-bl-sm px-4 py-3 flex-1 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                  <p className="text-[13px] leading-relaxed text-fg">
                    Good call on the early dinner. Tomorrow is a light 40-min easy run — nothing intense. Sleep matters more than carb-loading tonight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
