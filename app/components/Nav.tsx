'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import ThemeToggle from './ThemeToggle'
import { ShimmerButton } from './magicui/shimmer-button'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'h-16 bg-bg/80 backdrop-blur-xl border-b border-subtle' : 'h-20 bg-transparent'}`}>
      <div className="nav-inner max-w-[var(--max)] mx-auto px-pad flex items-center justify-between h-full">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-xl font-bold text-fg tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-fg rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" aria-hidden="true">
                <path d="M3 8 L8 3 L13 8 L8 13 Z" fill="var(--bg)" />
              </svg>
            </div>
            Athlete AI
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-[13px] text-muted no-underline transition-colors hover:text-fg font-medium">Features</a>
            <a href="#how" className="text-[13px] text-muted no-underline transition-colors hover:text-fg font-medium">How it works</a>
            <a href="#demo" className="text-[13px] text-muted no-underline transition-colors hover:text-fg font-medium">Demo</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <ThemeToggle />
          <div className="hidden md:block">
            <Link href="#cta" className="no-underline">
              <ShimmerButton 
                borderRadius="8px" 
                className="h-10" // Just height, padding is inside
              >
                <span className="text-[var(--fg-on-light)] font-bold text-[13px]">Join Waitlist</span>
              </ShimmerButton>
            </Link>
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}
