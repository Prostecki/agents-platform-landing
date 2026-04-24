'use client'

import { motion } from 'framer-motion'
import AvatarCircles from './AvatarCircles'

export default function Footer() {
  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-bg border-t border-subtle p-[80px_var(--pad)_48px]"
    >
      <div className="max-w-[var(--max)] mx-auto flex flex-col gap-20">
        {/* Top Section: Brand & Newsletter (Centered) */}
        <div className="flex flex-col items-center text-center gap-10">
          <div className="flex flex-col items-center gap-4">
            <div className="text-[20px] font-bold text-fg flex items-center gap-3">
              <div className="flex w-9 h-9 bg-fg rounded-xl items-center justify-center">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                  <path d="M3 8 L8 3 L13 8 L8 13 Z" fill="var(--bg)" />
                </svg>
              </div>
              Athlete AI
            </div>
            <p className="text-[16px] text-muted leading-[1.6] max-w-[420px]">
              The world&apos;s most advanced AI training management system for elite athletes. Your coaches talk to each other.
            </p>
          </div>

          <div className="w-full max-w-xl bg-bg-white border border-subtle rounded-[24px] p-8 lg:p-10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)] relative overflow-hidden">
            {/* Subtle glow background inside the card */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,var(--indigo-subtle),transparent_70%)] pointer-events-none" />
            
            <div className="relative z-1 flex flex-col items-center gap-6">
              <div className="flex flex-col gap-2">
                <div className="text-[14px] font-bold text-fg uppercase tracking-[1px]">Stay Updated</div>
                <p className="text-[15px] text-muted">Get the latest training insights and product updates.</p>
              </div>

              <form className="w-full max-w-md flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-bg border border-subtle rounded-xl p-[14px_18px] text-[15px] text-fg outline-none transition-all focus:border-indigo-base focus:ring-2 focus:ring-indigo-base/20"
                  required 
                />
                <button type="submit" className="bg-fg text-bg font-bold text-[15px] px-8 py-[14px] rounded-xl cursor-pointer transition-all hover:opacity-90 active:scale-[0.98] border-none whitespace-nowrap shadow-lg">
                  Join Waitlist →
                </button>
              </form>

              <div className="flex items-center gap-3">
                <AvatarCircles avatarUrls={avatarUrls} />
                <span className="text-[13px] text-muted font-medium">Join 2,400+ athletes already on the list</span>
              </div>
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <a href="#" className="text-muted transition-all hover:text-fg hover:scale-110" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" className="text-muted transition-all hover:text-fg hover:scale-110" aria-label="X">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-muted transition-all hover:text-fg hover:scale-110" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section: Links Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 border-t border-subtle pt-16">
          <div className="flex flex-col gap-4">
            <div className="text-[13px] font-bold text-fg uppercase tracking-[0.5px] mb-1">Company</div>
            <a href="#" className="text-sm text-muted no-underline transition-colors hover:text-fg">About us</a>
            <a href="#" className="text-sm text-muted no-underline transition-colors hover:text-fg">Careers</a>
            <a href="#" className="text-sm text-muted no-underline transition-colors hover:text-fg">Blog</a>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-[13px] font-bold text-fg uppercase tracking-[0.5px] mb-1">Product</div>
            <a href="#" className="text-sm text-muted no-underline transition-colors hover:text-fg">Download App</a>
            <a href="#" className="text-sm text-muted no-underline transition-colors hover:text-fg">Getting started</a>
            <a href="#" className="text-sm text-muted no-underline transition-colors hover:text-fg">Roadmap</a>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-[13px] font-bold text-fg uppercase tracking-[0.5px] mb-1">Resources</div>
            <a href="#" className="text-sm text-muted no-underline transition-colors hover:text-fg">FAQ</a>
            <a href="#" className="text-sm text-muted no-underline transition-colors hover:text-fg">Support</a>
            <a href="#" className="text-sm text-muted no-underline transition-colors hover:text-fg">Contact us</a>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-[13px] font-bold text-fg uppercase tracking-[0.5px] mb-1">Legal</div>
            <a href="#" className="text-sm text-muted no-underline transition-colors hover:text-fg">Terms</a>
            <a href="#" className="text-sm text-muted no-underline transition-colors hover:text-fg">Privacy</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-subtle pt-8">
          <div className="text-[13px] text-muted">© athletic-management.ai, Inc. {new Date().getFullYear()}</div>
          <div className="flex items-center gap-2 text-xs text-muted font-mono">
            <span className="w-1.5 h-1.5 bg-green rounded-full shadow-[0_0_8px_var(--color-green)]"></span>
            All systems operational
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
