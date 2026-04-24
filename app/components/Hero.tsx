'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="grid lg:grid-cols-2 min-h-[620px] border-b border-subtle">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
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
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[40px] lg:text-[66px] font-bold leading-[1.02] tracking-[-1.5px] lg:tracking-[-2.5px] mb-[22px] text-fg"
        >
          Train smarter.<br />Eat right.<br /><span className="text-green-text opacity-90">Win more.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[15px] lg:text-[17px] text-muted leading-[1.65] mb-10 max-w-[440px]"
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
          <a href="#cta" className="bg-fg text-bg text-sm font-bold py-[14px] px-[30px] rounded-md no-underline transition-opacity hover:opacity-80 text-center">Join the Waitlist</a>
          <a href="#demo" className="border border-subtle text-muted text-sm py-[14px] px-[30px] rounded-md no-underline transition-[border-color] hover:border-muted hover:text-fg text-center">See it in action ↓</a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="p-pad lg:py-12 lg:pr-16 lg:pl-12 flex flex-col justify-center bg-bg relative before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_70%_60%_at_80%_40%,rgba(34,197,94,0.05)_0%,transparent_70%)] before:pointer-events-none"
      >
        <div className="agents-ui bg-bg-white border border-subtle rounded-[20px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.15)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.35)] relative z-1">
          <div className="flex items-center gap-1.5 p-[12px_16px] border-b border-subtle bg-white/3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
            <span className="font-mono text-[10px] text-muted ml-1.5 tracking-[0.5px]">ATHLETE AI — AGENTS</span>
          </div>

          <div className="p-5 flex flex-col gap-1">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="agent-panel border border-subtle rounded-[14px] overflow-hidden bg-white/3"
            >
              <div className="flex items-center gap-2 p-[10px_14px] border-b border-subtle">
                <div className="w-[22px] h-[22px] rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 bg-green/20 text-green-text border border-green/25">N</div>
                <span className="text-[11px] font-semibold text-fg">Nutrition Agent</span>
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-[5px] h-[5px] rounded-full bg-green"></div>
                  <span className="font-mono text-[9px] text-muted">ACTIVE</span>
                </div>
              </div>
              <div className="p-[12px_14px] flex flex-col gap-[7px]">
                <div className="flex items-start gap-2">
                  <div className="w-[18px] h-[18px] rounded-[5px] shrink-0 mt-[1px] flex items-center justify-center text-[8px] font-bold bg-subtle text-muted">U</div>
                  <div className="p-[8px_11px] rounded-[10px] text-xs leading-[1.5] max-w-[85%] bg-bg-white text-muted border border-subtle">What should I eat tonight before tomorrow&apos;s session?</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-[18px] h-[18px] rounded-[5px] shrink-0 mt-[1px] flex items-center justify-center text-[8px] font-bold bg-green/20 text-green-text border border-green/25">N</div>
                  <div className="p-[8px_11px] rounded-[10px] text-xs leading-[1.5] max-w-[85%] bg-green/12 text-green-text border border-green/15">Based on 87 TSS tomorrow: 180g carbs, 3–4hr pre-sleep window. Skip high fiber.</div>
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-center gap-2.5 p-[8px_14px] relative z-10">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="bg-green/10 border border-green/22 rounded-[20px] p-[3px_10px] font-mono text-[9px] text-green-text flex items-center gap-[5px] shrink-0"
              >
                <div className="w-[5px] h-[5px] rounded-full bg-green"></div>
                A2A SYNC
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="agent-panel border border-subtle rounded-[14px] overflow-hidden bg-white/3"
            >
              <div className="flex items-center gap-2 p-[10px_14px] border-b border-subtle">
                <div className="w-[22px] h-[22px] rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 bg-indigo-base/20 text-indigo-light border border-indigo-base/25">T</div>
                <span className="text-[11px] font-semibold text-fg">Training Agent</span>
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-[5px] h-[5px] rounded-full bg-indigo-light"></div>
                  <span className="font-mono text-[9px] text-muted">SYNCED</span>
                </div>
              </div>
              <div className="p-[12px_14px] flex flex-col gap-[7px]">
                <div className="flex items-start gap-2">
                  <div className="w-[18px] h-[18px] rounded-[5px] shrink-0 mt-[1px] flex items-center justify-center text-[8px] font-bold bg-indigo-base/20 text-indigo-light border border-indigo-base/25">T</div>
                  <div className="p-[8px_11px] rounded-[10px] text-xs leading-[1.5] max-w-[85%] bg-indigo-base/12 text-indigo-light border border-indigo-base/15">Tomorrow: Speed endurance · TSS 87 · HRV 62</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-[18px] h-[18px] rounded-[5px] shrink-0 mt-[1px] flex items-center justify-center text-[8px] font-bold bg-indigo-base/20 text-indigo-light border border-indigo-base/25">T</div>
                  <div className="p-[8px_11px] rounded-[10px] text-xs leading-[1.5] max-w-[85%] bg-indigo-base/12 text-indigo-light border border-indigo-base/15">Glycogen priority flagged → shared with Nutrition</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
