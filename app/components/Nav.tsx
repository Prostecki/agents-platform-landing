'use client'

import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import MobileMenu from './MobileMenu'

export default function Nav() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-100 bg-bg/88 backdrop-blur-xl border-b border-subtle h-16 flex items-center"
    >
      <div className="w-full max-w-[var(--max)] mx-auto px-pad flex justify-between items-center">
        <span className="text-[15px] font-bold tracking-[-0.3px]">Athlete AI</span>
        
        <div className="hidden md:flex gap-9">
          <a href="#how" className="text-[13px] text-muted no-underline transition-colors hover:text-fg">How it works</a>
          <a href="#features" className="text-[13px] text-muted no-underline transition-colors hover:text-fg">Features</a>
          <a href="#demo" className="text-[13px] text-muted no-underline transition-colors hover:text-fg">Demo</a>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#cta" className="hidden md:block bg-fg text-bg text-[13px] font-semibold py-[9px] px-5 rounded-sm no-underline transition-opacity hover:opacity-82">
            Get Early Access →
          </a>
          <MobileMenu />
        </div>
      </div>
    </motion.nav>
  )
}
