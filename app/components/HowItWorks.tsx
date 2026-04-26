'use client'

import { motion } from 'framer-motion'

export default function HowItWorks() {
  return (
    <div className="border-b border-subtle" id="how">
      <motion.div
        className="w-full max-w-[var(--max)] mx-auto p-[64px_var(--spacing-pad)] lg:p-[96px_var(--spacing-pad)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="font-mono text-[11px] text-muted tracking-[1px] mb-2">04</div>
        <h2 className="text-[30px] md:text-[36px] lg:text-[42px] font-bold tracking-[-1px] lg:tracking-[-1.5px] leading-[1.08] mb-12">Simple for you.<br />Powerful behind the scenes.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

          <div className="relative pr-0 md:pr-14 border-b md:border-b-0 border-subtle mr-0 md:mr-14 mb-9 md:mb-0 pb-9 md:pb-0">
            <div className="text-[48px] lg:text-[64px] font-bold text-subtle leading-none mb-5 tracking-[-2px]">1</div>
            <h3 className="text-[18px] lg:text-[20px] font-bold text-fg mb-2.5">Talk to your coach</h3>
            <p className="text-sm text-muted leading-[1.7]">Message like you&apos;re texting your coach after a session. &ldquo;Heavy legs, race Saturday, skipped lunch.&rdquo; That&apos;s enough. No forms, no logging apps, no spreadsheets.</p>
            {/* Desktop connector */}
            <div className="hidden md:flex flex-col items-center justify-center absolute top-0 bottom-0 -right-7" aria-hidden="true">
              <div className="flex-1 border-l border-dashed border-subtle"></div>
              <span className="text-muted text-[11px] py-1">›</span>
              <div className="flex-1 border-l border-dashed border-subtle"></div>
            </div>
          </div>

          <div className="relative pr-0 md:pr-14 border-b md:border-b-0 border-subtle mr-0 md:mr-14 mb-9 md:mb-0 pb-9 md:pb-0">
            <div className="text-[48px] lg:text-[64px] font-bold text-subtle leading-none mb-5 tracking-[-2px]">2</div>
            <h3 className="text-[18px] lg:text-[20px] font-bold text-fg mb-2.5">Your coaches sync automatically</h3>
            <p className="text-sm text-muted leading-[1.7]">The moment you send that message, both coaches compare notes. Nutrition sees your training load. Training sees your recovery status. No repeat explanations, ever.</p>
            {/* Desktop connector */}
            <div className="hidden md:flex flex-col items-center justify-center absolute top-0 bottom-0 -right-7" aria-hidden="true">
              <div className="flex-1 border-l border-dashed border-subtle"></div>
              <span className="text-muted text-[11px] py-1">›</span>
              <div className="flex-1 border-l border-dashed border-subtle"></div>
            </div>
          </div>

          <div className="pb-0">
            <div className="text-[48px] lg:text-[64px] font-bold text-subtle leading-none mb-5 tracking-[-2px]">3</div>
            <h3 className="text-[18px] lg:text-[20px] font-bold text-fg mb-2.5">Get advice that makes sense</h3>
            <p className="text-sm text-muted leading-[1.7]">You get an answer that knows it&apos;s 3 days before your race, you ran an easy 8km this morning, and skipped breakfast. Not a template. Not a guess.</p>
          </div>

        </div>
      </motion.div>
    </div>
  )
}
