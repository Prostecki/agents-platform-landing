'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { TextAnimate } from '@/app/components/magicui/text-animate'

import { Terminal, TypingAnimation, AnimatedSpan } from '@/app/components/magicui/terminal'

export default function Hero() {
  return (
    <div className="grid lg:grid-cols-2 min-h-[620px] border-b border-subtle overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-pad flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-subtle bg-bg"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-[7px] bg-green-bg border border-green-border rounded-[20px] py-[5px] px-[14px] mb-7 self-start"
        >
          <span className="w-[7px] h-[7px] rounded-full bg-green"></span>
          <span className="font-mono text-[10px] text-green-text tracking-[0.5px]">AI coaching that actually works together</span>
        </motion.div>

        <h1 className="text-[40px] md:text-[52px] lg:text-[66px] font-bold leading-[1.02] tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.5px] mb-[22px] text-fg">
          <TextAnimate animation="blurInUp" by="character" delay={0.3}>
            Train smarter.
          </TextAnimate>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Eat right.
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-green-text opacity-90 block sm:inline"
          >
            Win more.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[15px] md:text-[16px] lg:text-[17px] text-muted leading-[1.65] mb-10 max-w-[440px]"
        >
          Athlete AI gives you two personal coaches — nutrition and training — that share information in real time. Ask one question. Get advice that considers everything.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="cta-row flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
        >
          <a href="#cta" className="w-full sm:w-auto bg-fg text-bg text-sm font-bold py-[14px] px-[30px] rounded-md no-underline transition-opacity hover:opacity-80 text-center">Join the Waitlist</a>
          <a href="#demo" className="w-full sm:w-auto border border-subtle text-muted text-sm py-[14px] px-[30px] rounded-md no-underline transition-[border-color] hover:border-muted hover:text-fg text-center">See it in action ↓</a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="p-pad lg:py-12 lg:pr-16 lg:pl-12 flex flex-col justify-center bg-bg relative before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_70%_60%_at_80%_40%,rgba(34,197,94,0.05)_0%,transparent_70%)] before:pointer-events-none"
      >
        <Terminal className="relative z-1 shadow-[0_24px_64px_rgba(0,0,0,0.15)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.35)] w-full max-w-2xl mx-auto lg:ml-auto min-w-0">
          <TypingAnimation>&gt; athlete-ai init --agents training,nutrition</TypingAnimation>

          <AnimatedSpan className="text-green-text">
            ✔ Training Agent active. Found Apple Health + Strava data.
          </AnimatedSpan>

          <AnimatedSpan className="text-green-text">
            ✔ Nutrition Agent active. Macros calibrated to base metabolic rate.
          </AnimatedSpan>

          <AnimatedSpan className="text-indigo-light">
            ℹ A2A Protocol: Established real-time context sharing.
          </AnimatedSpan>

          <TypingAnimation delay={1000}>&gt; user: What should I eat for tomorrow&apos;s 15mi run?</TypingAnimation>

          <AnimatedSpan className="text-muted">
            Analyzing training load (TSS 124)...
          </AnimatedSpan>

          <AnimatedSpan className="text-green-text">
            <span>[Nutrition] Suggestion:</span>
            <span className="pl-2">450g carbs total. High glycogen focus.</span>
          </AnimatedSpan>

          <AnimatedSpan className="text-indigo-light">
            <span>[Training] Sync:</span>
            <span className="pl-2">HRV 64. Recovery optimal. Session locked.</span>
          </AnimatedSpan>

          <TypingAnimation className="text-fg font-bold" delay={2000}>
            Success! Plan synchronized across all agents.
          </TypingAnimation>
        </Terminal>
      </motion.div>
    </div>
  )
}
