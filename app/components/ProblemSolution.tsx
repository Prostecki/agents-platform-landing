'use client'

import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/app/lib/utils'

export default function ProblemSolution() {
  return (
    <div className="border-b border-subtle" id="problem">
      <div className="w-full max-w-[var(--max)] mx-auto p-[64px_var(--spacing-pad)] lg:p-[96px_var(--spacing-pad)]">
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <div className="font-mono text-[11px] text-muted tracking-[1px] mb-2">02</div>
          <h2 className="text-[30px] md:text-[36px] lg:text-[42px] font-bold tracking-[-1px] lg:tracking-[-1.5px] leading-[1.08] mb-8 lg:mb-12">Sound familiar?</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-[#bbb] mb-6 pb-3.5 border-b border-subtle">The old way</div>
            <motion.div variants={fadeIn} className="text-[15px] text-muted leading-[1.6] pl-[18px] border-l-2 border-white/10 data-[theme=light]:border-black/14 mb-4">Your nutritionist says eat more carbs. But they don&apos;t know you destroyed your legs yesterday.</motion.div>
            <motion.div variants={fadeIn} className="text-[15px] text-muted leading-[1.6] pl-[18px] border-l-2 border-white/10 data-[theme=light]:border-black/14 mb-4">Your coach plans a brutal session tomorrow. But your body is running on empty and nobody connected the dots.</motion.div>
            <motion.div variants={fadeIn} className="text-[15px] text-muted leading-[1.6] pl-[18px] border-l-2 border-white/10 data-[theme=light]:border-black/14 mb-4">You spend more time explaining your week to each coach than actually training.</motion.div>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-[#bbb] mb-6 pb-3.5 border-b border-subtle">With Athlete AI</div>
            <motion.div variants={fadeIn} className="text-[15px] text-fg leading-[1.6] pl-[18px] border-l-2 border-green mb-4">Your nutrition coach knows exactly what you trained today and adjusts your evening meal automatically.</motion.div>
            <motion.div variants={fadeIn} className="text-[15px] text-fg leading-[1.6] pl-[18px] border-l-2 border-green mb-4">Your training coach sees your energy levels and nutrition data before loading your next session.</motion.div>
            <motion.div variants={fadeIn} className="text-[15px] text-fg leading-[1.6] pl-[18px] border-l-2 border-green mb-4">Both coaches share context the moment you open the app. You just train.</motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
