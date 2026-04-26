'use client'

import { motion } from 'framer-motion'

export default function ProblemSolution() {
  return (
    <div className="border-b border-subtle" id="problem">
      <motion.div
        className="w-full max-w-[var(--max)] mx-auto p-[64px_var(--spacing-pad)] lg:p-[96px_var(--spacing-pad)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-[30px] md:text-[36px] lg:text-[42px] font-bold tracking-[-1px] lg:tracking-[-1.5px] leading-[1.08] mb-8 lg:mb-12">Sound familiar?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-muted mb-6 pb-3.5 border-b border-subtle">The old way</div>
            <div className="text-[15px] text-muted leading-[1.6] pl-[18px] border-l-2 border-subtle mb-4">Your nutritionist tells you to carb-load tonight. They have no idea you&apos;ve been running on heavy legs since Tuesday.</div>
            <div className="text-[15px] text-muted leading-[1.6] pl-[18px] border-l-2 border-subtle mb-4">Your coach schedules a brutal workout for Thursday. Nobody told him you&apos;ve been underfueling all week.</div>
            <div className="text-[15px] text-muted leading-[1.6] pl-[18px] border-l-2 border-subtle mb-4">You start every check-in with the same three-minute recap. Every time. Both coaches.</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-muted mb-6 pb-3.5 border-b border-subtle">With Athlete AI</div>
            <div className="text-[15px] text-fg leading-[1.6] pl-[18px] border-l-2 border-green mb-4">You finish a 45-minute tempo run. Before you even ask, your nutrition coach already knows what you did.</div>
            <div className="text-[15px] text-fg leading-[1.6] pl-[18px] border-l-2 border-green mb-4">Thursday&apos;s session gets adjusted because your training coach saw you&apos;ve been underfueling since Monday.</div>
            <div className="text-[15px] text-fg leading-[1.6] pl-[18px] border-l-2 border-green mb-4">Open the app. Ask one question. Both coaches already compared notes. You just focus on the work.</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
