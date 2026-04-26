'use client'

import { useState, useEffect } from 'react'

const menuItems = [
  { name: 'Your Coaches', href: '#a2a',  icon: '👥', sub: 'Your personal AI staff'  },
  { name: 'In Action',    href: '#demo', icon: '🎬', sub: 'Experience the flow'      },
  { name: 'The Process',  href: '#how',  icon: '⚡', sub: 'How you interact daily'   },
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
    document.body.dataset.scrollLocked = 'true'
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = prev
      delete document.body.dataset.scrollLocked
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <button
        className={`mobile-menu-trigger ${isOpen ? 'mobile-menu-close' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mobile-nav-item"
                onClick={() => setIsOpen(false)}
              >
                <div className="mobile-nav-icon">{item.icon}</div>
                <div className="mobile-nav-text">
                  <span className="mobile-nav-label">{item.name}</span>
                  <span className="mobile-nav-sub">{item.sub}</span>
                </div>
                <div className="ml-auto text-muted opacity-30">→</div>
              </a>
            ))}
          </div>

          <div className="mobile-menu-footer-new">
            <div className="mobile-menu-socials">
              {['𝕏', '📸', '📺'].map((s, i) => (
                <a key={i} href="#" className="mobile-social-link">{s}</a>
              ))}
            </div>
            <a href="#cta" className="mobile-cta-btn" onClick={() => setIsOpen(false)}>
              <span className="text-bg">Join the Waitlist</span>
            </a>
            <div className="text-center">
              <span className="text-[11px] font-mono text-muted uppercase tracking-wider opacity-60">
                © athlete-ai.tech 2026
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
