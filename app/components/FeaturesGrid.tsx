'use client'

import { motion } from 'framer-motion'

export default function FeaturesGrid() {
  const features = [
    {
      icon: "🤝",
      title: "Two coaches, zero gaps",
      desc: "Your nutritionist and training coach share everything — load, recovery, upcoming races. You never have to explain your week twice."
    },
    {
      icon: "🧠",
      title: "It remembers everything",
      desc: "Every meal. Every session. Every morning you felt heavy, every week you peaked. Your coaches build a picture of you that gets sharper over time."
    },
    {
      icon: "⚡",
      title: "Instant answers, any time",
      desc: "It's 10pm. Race at 8am. Ask what to eat tonight — get a real answer that knows your body, not a generic PDF from three months ago."
    },
    {
      icon: "🌍",
      title: "Global athletic support",
      desc: "50+ languages, voice notes, or text. Your coaches understand athletic context no matter how you communicate — or what language you think in after a hard session."
    }
  ]

  return (
    <div className="bg-bg-white border-b border-subtle" id="features">
      <motion.div
        className="w-full max-w-[var(--max)] mx-auto p-[64px_var(--spacing-pad)] lg:p-[96px_var(--spacing-pad)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="font-mono text-[11px] text-muted tracking-[1px] mb-2 uppercase">05 — Platform Core</div>
        <h2 className="text-[30px] md:text-[36px] lg:text-[42px] font-bold tracking-[-1px] lg:tracking-[-1.5px] leading-[1.08] mb-8 lg:mb-12 text-fg">Everything a serious athlete needs.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group border border-subtle rounded-2xl p-6 md:p-8 lg:p-[32px_36px] bg-bg/20 hover:bg-bg/40 transition-all duration-300 hover:shadow-card hover:-translate-y-1 cursor-default"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-fg mb-2.5 group-hover:text-green-text transition-colors duration-300">{feature.title}</h3>
              <div className="text-sm text-muted leading-[1.7]">{feature.desc}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
