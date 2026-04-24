'use client'

import { motion, Variants } from 'framer-motion'

export default function Demo() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const messageVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="bg-bg-white border-b border-subtle" id="demo">
      <div className="max-w-max mx-auto p-[64px_var(--spacing-pad)] lg:p-[96px_var(--spacing-pad)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-[11px] text-muted tracking-[1px] mb-2">03</div>
            <h2 className="text-[30px] lg:text-[42px] font-bold tracking-[-1px] lg:tracking-[-1.5px] leading-[1.08] mb-4 lg:mb-5">Watch it happen.</h2>
            <p className="text-[15px] text-muted leading-[1.7] max-w-[400px]">A real conversation. Real agents. No scripts. See what it looks like when your coaches actually talk to each other.</p>
          </motion.div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#0f0f0f] rounded-lg lg:rounded-2xl overflow-hidden border border-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
          >
            <div className="bg-[#1a1a1a] p-[14px_20px] flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#333]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#333]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#333]"></span>
              <span className="font-mono text-[11px] text-[#555] ml-2.5 uppercase tracking-[0.5px]">Nutrition Agent</span>
            </div>
            <div className="p-7 lg:p-[28px_26px]">
              <motion.div variants={messageVariants} className="flex gap-3 mb-4 lg:mb-[18px] items-start">
                <div className="w-[30px] h-[30px] rounded-full bg-[#2a2a2a] shrink-0"></div>
                <div className="bg-[#1e1e1e] border border-white/5 rounded-[10px] p-[11px_15px] text-[13px] text-[#ccc] leading-[1.6]">I have a really tough speed session tomorrow morning. What should I eat tonight?</div>
              </motion.div>
              <motion.div variants={messageVariants} className="bg-[var(--green-bg)] border border-[var(--green-border)] rounded-sm p-[9px_15px] font-mono text-[11px] text-[var(--green-text)] text-center mb-[18px]">Nutrition agent is checking your training schedule...</motion.div>
              <motion.div variants={messageVariants} className="flex gap-3 items-start">
                <div className="w-[30px] h-[30px] rounded-full bg-[var(--green-bg)] border border-[var(--green-border)] shrink-0"></div>
                <div className="bg-[#0f1f17] border border-[var(--green-border)] rounded-[10px] p-[11px_15px] text-[13px] text-[var(--green-text)] leading-[1.6]">Based on tomorrow&apos;s high-intensity speed session and your current fatigue level, tonight focus on: a large portion of pasta or rice (around 120g dry), chicken or salmon for protein, and avoid heavy fats after 8pm. Your body needs full glycogen stores for tomorrow. Last time before a similar session you felt better after eating earlier — around 7pm.</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="text-center mt-5 text-[13px] text-muted italic pb-10"
      >
        That last sentence? Your agent remembered it from three weeks ago.
      </motion.div>
    </div>
  )
}
