'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/app/lib/utils'

export default function FinalCTA() {
  return (
    <div className="bg-bg-white border-y border-subtle relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,var(--green-bg)_0%,transparent_70%)] before:pointer-events-none" id="cta">
      <div className="max-w-max mx-auto p-[72px_var(--spacing-pad)] lg:p-[100px_var(--spacing-pad)] flex flex-col lg:flex-row justify-between items-start lg:items-center relative gap-9 lg:gap-0">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <h2 className="text-[38px] lg:text-[56px] font-bold text-fg tracking-[-1.5px] lg:tracking-[-2px] leading-[1.05] mb-3.5">Be the first<br />to know.</h2>
          <p className="text-[15px] text-muted lineHeight-[1.7] max-w-[440px] mt-4">Join our exclusive waitlist and be the first to experience the future of AI coaching. Get early access to insights and launch updates.</p>
        </motion.div>
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex flex-col items-start lg:items-end gap-3.5 w-full lg:w-auto"
        >
          <a href="#" className="bg-fg text-bg text-base font-bold p-[17px_44px] rounded-md no-underline transition-opacity hover:opacity-88 w-full lg:w-auto text-center">Join the Waitlist</a>
          <span className="font-mono text-[11px] text-muted text-left lg:text-right">Built for competitive athletes who take their performance seriously.</span>
        </motion.div>
      </div>
    </div>
  )
}
