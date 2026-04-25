'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { TextAnimate } from '@/app/components/magicui/text-animate'

export default function Demo() {
  const cardRef = useRef<HTMLDivElement>(null)
  
  // 3D Tilt values
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const typingVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.01,
      },
    },
  }

  return (
    <div className="bg-bg-white border-b border-subtle" id="demo">
      <div className="w-full max-w-[var(--max)] mx-auto p-[64px_var(--spacing-pad)] lg:p-[96px_var(--spacing-pad)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-[11px] text-muted tracking-[1px] mb-2 uppercase">03 — Proactive Sync</div>
            <h2 className="text-[30px] md:text-[36px] lg:text-[42px] font-bold tracking-[-1px] lg:tracking-[-1.5px] leading-[1.08] mb-4 lg:mb-5 text-fg">They work while you sleep.</h2>
            <p className="text-[15px] md:text-[16px] text-muted leading-[1.7] max-w-[440px] mb-6">
              Unlike static apps, Athlete AI doesn&apos;t wait for you to fail. It monitors your recovery and adjusts both training and fuel before you even step out the door.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-bg/5 dark:bg-white/5 border border-subtle shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-8 h-8 rounded-full bg-orange-400/10 border border-orange-400/20 flex items-center justify-center text-sm shrink-0 shadow-sm">📉</div>
                <div>
                  <p className="text-[14px] text-fg font-semibold mb-1">Fatigue Detected</p>
                  <p className="text-[12px] text-muted">Training Coach identifies 14% drop in HRV and poor sleep quality.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-bg/5 dark:bg-white/5 border border-subtle shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-sm shrink-0 shadow-sm">🔄</div>
                <div>
                  <p className="text-[14px] text-fg font-semibold mb-1">Auto-Adjustment</p>
                  <p className="text-[12px] text-muted">Nutrition Agent automatically switches to recovery-mode macros.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div style={{ perspective: '1200px' }}>
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, y: 40, rotateX: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-1 shadow-card w-full bg-bg-white rounded-2xl overflow-hidden border border-subtle"
              style={{ 
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
            >
              {/* Header */}
              <div className="px-5 py-4 border-b border-subtle text-center bg-bg/50">
                <p className="text-[11px] text-muted font-mono tracking-widest uppercase mb-0.5">Automated Recovery Sync</p>
                <p className="text-[17px] font-bold text-fg">Athlete AI</p>
              </div>

              {/* Messages */}
              <div className="p-5 lg:p-7 space-y-6">
                {/* User bubble */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex justify-end"
                >
                  <div className="bg-[#1e3a5f] text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                    <TextAnimate 
                      variants={typingVariants}
                      by="character" 
                      once 
                      delay={0.8}
                      duration={1.0}
                      className="text-[13.5px] leading-relaxed block"
                    >
                      I&apos;m feeling really sluggish this morning. Should I push through my planned 10k tempo run?
                    </TextAnimate>
                  </div>
                </motion.div>

                {/* Training Coach */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 2.2 }}
                >
                  <p className="text-[11px] font-bold text-muted uppercase tracking-wider mb-2 ml-12">Training Coach</p>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-indigo-base/10 border border-indigo-base/20 flex items-center justify-center text-[18px] flex-shrink-0 shadow-md">🏃</div>
                    <div className="border border-indigo-subtle bg-indigo-subtle/5 rounded-2xl rounded-tl-sm px-4 py-3 flex-1 flex flex-col gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                      <div className="text-[13.5px] leading-relaxed text-fg m-0 min-h-[1.5em]">
                        <TextAnimate 
                          variants={typingVariants}
                          by="character" 
                          once 
                          delay={2.5}
                          duration={0.8}
                        >
                          Don&apos;t push it. I see your HRV is down 14% and you only got 5.5 hours of deep sleep.
                        </TextAnimate>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 3.5, duration: 0.4 }}
                        className="bg-bg/40 border border-subtle rounded-lg p-2.5 flex items-center justify-between shadow-sm"
                      >
                        <span className="text-[12px] font-bold text-fg uppercase">Workout Updated</span>
                        <span className="text-[12px] text-muted line-through">10k Tempo</span>
                        <span className="text-[12px] text-orange font-bold">30m Easy Walk</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Nutrition Coach */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 4.2 }}
                >
                  <p className="text-[11px] font-bold text-muted uppercase tracking-wider mb-2 ml-12">Nutrition Coach</p>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-green/10 border border-green/20 flex items-center justify-center text-[18px] flex-shrink-0 shadow-md">🥗</div>
                    <div className="bg-bg border border-subtle rounded-2xl rounded-tl-sm px-4 pt-3 pb-4 flex-1 flex flex-col gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 4.4 }}
                        className="self-start inline-flex items-center gap-1.5 bg-green-bg border border-green-border text-green-text rounded-full px-2.5 py-1 text-[10px] font-mono font-bold tracking-wide shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                        Plan Adjusted
                      </motion.span>

                      <div className="text-[13.5px] leading-relaxed text-fg m-0 min-h-[3em]">
                        <span className="relative inline">
                          <motion.span
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 6.0, ease: [0.22, 1, 0.36, 1] }}
                            style={{ transformOrigin: 'left' }}
                            className="absolute inset-y-[-2px] -inset-x-1 bg-green/10 rounded pointer-events-none"
                          />
                          <TextAnimate 
                            variants={typingVariants}
                            by="character" 
                            once 
                            delay={4.6}
                            duration={1.5}
                          >
                            Synchronized with Training Coach. Since intensity is down, I&apos;ve reduced your carb intake and added a high-antioxidant smoothie to your lunch to speed up recovery.
                          </TextAnimate>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 6.5, duration: 0.6 }}
        className="text-center mt-8 text-[13px] text-muted italic pb-12"
      >
        Automated decision-making powered by the A2A (Agent-to-Agent) protocol.
      </motion.div>
    </div>
  )
}
