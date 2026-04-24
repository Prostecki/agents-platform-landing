'use client'

import { motion, Variants } from 'framer-motion'

export default function FeaturesGrid() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="bg-bg-white border-b border-subtle" id="features">
      <div className="max-w-max mx-auto p-[64px_var(--spacing-pad)] lg:p-[96px_var(--spacing-pad)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-[11px] text-muted tracking-[1px] mb-2">05</div>
          <h2 className="text-[30px] lg:text-[42px] font-bold tracking-[-1px] lg:tracking-[-1.5px] leading-[1.08] mb-8 lg:mb-12">Everything a serious athlete needs.</h2>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <motion.div variants={itemVariants} className="border border-subtle rounded-2xl p-8 lg:p-[32px_36px] transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <div className="text-lg font-bold text-fg mb-2.5">Two coaches, one conversation</div>
            <div className="text-sm text-muted leading-[1.7]">Stop repeating yourself to every coach and nutritionist. Athlete AI keeps both agents in sync so your advice is always consistent and always current.</div>
          </motion.div>
          <motion.div variants={itemVariants} className="border border-subtle rounded-2xl p-8 lg:p-[32px_36px] transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <div className="text-lg font-bold text-fg mb-2.5">It remembers everything</div>
            <div className="text-sm text-muted leading-[1.7]">Every meal. Every session. Every time you felt heavy on the track or light in the weight room. Your coaches build a picture of you over time — and get smarter every week.</div>
          </motion.div>
          <motion.div variants={itemVariants} className="border border-subtle rounded-2xl p-8 lg:p-[32px_36px] transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <div className="text-lg font-bold text-fg mb-2.5">Built for your sport</div>
            <div className="text-sm text-muted leading-[1.7]">Athlete AI understands the demands of multi-event competition. Periodization, peak weeks, recovery phases, pre-competition nutrition — it knows the difference between a preparation block and competition week.</div>
          </motion.div>
          <motion.div variants={itemVariants} className="border border-subtle rounded-2xl p-8 lg:p-[32px_36px] transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <div className="text-lg font-bold text-fg mb-2.5">Instant answers, any time</div>
            <div className="text-sm text-muted leading-[1.7]">Your coach doesn&apos;t sleep. Ask at 10pm what to eat before tomorrow&apos;s 7am session. Get a real answer in seconds, not a generic meal plan PDF from three months ago.</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
