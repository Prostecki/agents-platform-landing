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
            <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-muted mb-6 pb-3.5 border-b border-subtle">The old way</div>
            <motion.div variants={fadeIn} className="text-[15px] text-muted leading-[1.6] pl-[18px] border-l-2 border-subtle mb-4">Your nutritionist tells you to carb-load tonight. They have no idea you&apos;ve been running on heavy legs since Tuesday.</motion.div>
            <motion.div variants={fadeIn} className="text-[15px] text-muted leading-[1.6] pl-[18px] border-l-2 border-subtle mb-4">Your coach schedules a brutal workout for Thursday. Nobody told him you&apos;ve been underfueling all week.</motion.div>
            <motion.div variants={fadeIn} className="text-[15px] text-muted leading-[1.6] pl-[18px] border-l-2 border-subtle mb-4">You start every check-in with the same three-minute recap. Every time. Both coaches.</motion.div>
            </motion.div>
            <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            >
            <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-muted mb-6 pb-3.5 border-b border-subtle">With Athlete AI</div>
            <motion.div variants={fadeIn} className="text-[15px] text-fg leading-[1.6] pl-[18px] border-l-2 border-green mb-4">You finish a 45-minute tempo run. Before you even ask, your nutrition coach already knows what you did.</motion.div>
            <motion.div variants={fadeIn} className="text-[15px] text-fg leading-[1.6] pl-[18px] border-l-2 border-green mb-4">Thursday&apos;s session gets adjusted because your training coach saw you&apos;ve been underfueling since Monday.</motion.div>
            <motion.div variants={fadeIn} className="text-[15px] text-fg leading-[1.6] pl-[18px] border-l-2 border-green mb-4">Open the app. Ask one question. Both coaches already compared notes. You just focus on the work.</motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
