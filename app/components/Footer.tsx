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
      <div className="max-w-[var(--max)] mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 lg:gap-20 items-start">
          <div className="flex flex-col gap-5">
            <div className="text-[18px] font-bold text-fg flex items-center gap-2.5">
              <div className="hidden md:flex w-8 h-8 bg-fg rounded-lg items-center justify-center">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                  <path d="M3 8 L8 3 L13 8 L8 13 Z" fill="var(--bg)" />
                </svg>
              </div>
              Athlete AI
            </div>
            <p className="text-[15px] text-muted leading-[1.6] max-w-[360px]">
              The world&apos;s most advanced AI training management system for elite athletes.
            </p>
            <div className="flex gap-4 items-center">
              <a href="#" className="text-muted transition-[color,transform] hover:text-fg hover:-translate-y-0.5" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" className="text-muted transition-[color,transform] hover:text-fg hover:-translate-y-0.5" aria-label="X">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-muted transition-[color,transform] hover:text-fg hover:-translate-y-0.5" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-bg-white border border-subtle rounded-[20px] p-8 flex flex-col gap-5">
            <div className="text-[13px] font-bold text-fg uppercase tracking-[0.5px]">Stay Updated</div>
            <p className="text-sm text-muted">Get the latest training insights and product updates.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-bg border border-subtle rounded-md p-[12px_16px] text-sm text-fg outline-none transition-[border-color] focus:border-indigo-base"
                required 
              />
              <button type="submit" className="bg-fg text-bg font-bold text-sm px-6 rounded-md cursor-pointer transition-all hover:opacity-90 active:scale-[0.98] border-none whitespace-nowrap">
                Join Now →
              </button>
            </form>
            <div className="flex items-center gap-3 mt-1">
              <AvatarCircles avatarUrls={avatarUrls} />
              <span className="text-[12px] text-muted font-medium">Be among the first to join</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 border-t border-subtle pt-12">
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

        <div className="flex justify-between items-center border-t border-subtle pt-8">
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
