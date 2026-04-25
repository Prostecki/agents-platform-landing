'use client'

import { motion, Variants } from 'framer-motion'

export default function HowItWorks() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  }

  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="border-b border-subtle" id="how">
      <div className="w-full max-w-[var(--max)] mx-auto p-[64px_var(--spacing-pad)] lg:p-[96px_var(--spacing-pad)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-[11px] text-muted tracking-[1px] mb-2">04</div>
          <h2 className="text-[30px] md:text-[36px] lg:text-[42px] font-bold tracking-[-1px] lg:tracking-[-1.5px] leading-[1.08] mb-12">Simple for you.<br />Powerful behind the scenes.</h2>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
        >
          <motion.div variants={stepVariants} className="pr-0 md:pr-14 border-r-0 md:border-r border-b md:border-b-0 border-subtle mr-0 md:mr-14 mb-9 md:mb-0 pb-9 md:pb-0">
            <div className="text-[48px] lg:text-[64px] font-bold text-subtle leading-none mb-5 tracking-[-2px]">1</div>
            <h3 className="text-[18px] lg:text-[20px] font-bold text-fg mb-2.5">Talk to your coach</h3>
            <div className="text-sm text-muted leading-[1.7]">Just message like you would a real coach. Tell it what you ate, how you feel, what&apos;s coming up. No forms, no logging apps, no spreadsheets.</div>
          </motion.div>
          <motion.div variants={stepVariants} className="pr-0 md:pr-14 border-r-0 md:border-r border-b md:border-b-0 border-subtle mr-0 md:mr-14 mb-9 md:mb-0 pb-9 md:pb-0">
            <div className="text-[48px] lg:text-[64px] font-bold text-subtle leading-none mb-5 tracking-[-2px]">2</div>
            <h3 className="text-[18px] lg:text-[20px] font-bold text-fg mb-2.5">Your coaches sync automatically</h3>
            <div className="text-sm text-muted leading-[1.7]">The moment you ask a question, both agents share information. Your nutrition coach knows your training load. Your training coach knows your energy and recovery status.</div>
          </motion.div>
          <motion.div variants={stepVariants} className="pb-0">
            <div className="text-[48px] lg:text-[64px] font-bold text-subtle leading-none mb-5 tracking-[-2px]">3</div>
            <h3 className="text-[18px] lg:text-[20px] font-bold text-fg mb-2.5">Get advice that makes sense</h3>
            <div className="text-sm text-muted leading-[1.7]">No generic meal plans. No one-size-fits-all programs. Every response considers your actual week — your sessions, your food, your fatigue, your next competition.</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
