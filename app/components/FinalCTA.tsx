'use client'

import { motion } from 'framer-motion'
import AvatarCircles from './AvatarCircles'
import { ShimmerButton } from './magicui/shimmer-button'

export default function FinalCTA() {
  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
  ];

  return (
    <section className="bg-bg-white border-y border-subtle relative overflow-hidden py-24 lg:py-32" id="cta">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--green-bg),transparent_70%)] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/20 to-transparent" />

      <div className="max-w-[var(--max)] mx-auto px-pad relative z-1 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green/10 border border-green/20 text-green-text font-mono text-[10px] uppercase tracking-wider shadow-sm">
            <span className="w-1 h-1 rounded-full bg-green animate-pulse" />
            Founding Member Program
          </div>

          <h2 className="text-[36px] md:text-[48px] lg:text-[64px] font-bold text-fg tracking-tight leading-[1.1] max-w-4xl">
            Start as a founder.<br />
            <span className="text-muted opacity-80">Lead as an athlete.</span>
          </h2>
          
          <p className="text-[16px] md:text-[18px] text-muted max-w-[600px] leading-relaxed">
            Our Beta phase offers full access to professional features that will soon require a premium subscription. Join now to lock in your early-access status and keep the edge for free.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 w-full max-w-lg"
        >
          {/* Form: Force row on all screens, use overflow-hidden for rounded edges */}
          <form 
            className="flex flex-row gap-2 p-1.5 rounded-2xl bg-bg border border-subtle shadow-card" 
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="Enter email" 
              aria-label="Email address for waitlist"
              className="flex-1 bg-transparent border-none outline-none px-3 py-2.5 text-[14px] md:text-[15px] text-fg placeholder:text-muted/50 min-w-0"
              required 
            />
            <ShimmerButton 
              background="var(--fg)"
              shimmerColor="rgba(255,255,255,0.7)"
              borderRadius="10px"
              className="shrink-0"
            >
              <span className="text-bg font-bold text-[13px] md:text-[14px] whitespace-nowrap">Lock Access</span>
            </ShimmerButton>
          </form>
          
          <div className="mt-4 text-[12px] text-green-text/80 font-medium italic">
            * All premium features included for first 5,000 members.
          </div>
          
          <div className="mt-10 flex flex-col items-center gap-4">
            <AvatarCircles avatarUrls={avatarUrls} />
            <span className="text-[13px] text-muted font-medium">Join 2,400+ elite athletes securing their spot</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
