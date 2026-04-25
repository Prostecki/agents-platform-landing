'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
  { 
    name: 'Your Coaches', 
    href: '#a2a', 
    icon: '👥', 
    sub: 'Your personal AI staff' 
  },
  { 
    name: 'In Action', 
    href: '#demo', 
    icon: '🎬', 
    sub: 'Experience the flow' 
  },
  { 
    name: 'The Process', 
    href: '#how', 
    icon: '⚡', 
    sub: 'How you interact daily' 
  }
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Get original body padding
      const originalPaddingRight = document.body.style.paddingRight;

      // Calculate scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Apply styles
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      // Set data attribute for CSS targeting
      document.body.dataset.scrollLocked = 'true';
      
      // Cleanup function
      return () => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = originalPaddingRight;
        delete document.body.dataset.scrollLocked;
      };
    }
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button 
        className={`mobile-menu-trigger ${isOpen ? 'mobile-menu-close' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <motion.line 
            x1="3" y1="6" x2="21" y2="6" 
            animate={{ 
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 6 : 0,
              originX: 'center'
            }} 
          />
          <motion.line 
            x1="3" y1="12" x2="21" y2="12" 
            animate={{ 
              opacity: isOpen ? 0 : 1,
              x: isOpen ? 8 : 0
            }} 
          />
          <motion.line 
            x1="3" y1="18" x2="21" y2="18" 
            animate={{ 
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -6 : 0,
              originX: 'center'
            }} 
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="mobile-menu-content">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="mobile-nav-item"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                >
                  <div className="mobile-nav-icon">{item.icon}</div>
                  <div className="mobile-nav-text">
                    <span className="mobile-nav-label">{item.name}</span>
                    <span className="mobile-nav-sub">{item.sub}</span>
                  </div>
                  <div className="ml-auto text-muted opacity-30">→</div>
                </motion.a>
              ))}
            </div>

            <motion.div 
              className="mobile-menu-footer-new"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
