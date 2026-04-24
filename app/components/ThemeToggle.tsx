'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialDark = saved ? saved === 'dark' : prefersDark
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(initialDark)
    document.documentElement.dataset.theme = initialDark ? 'dark' : 'light'
    setMounted(true)
  }, [])

  function toggle() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.dataset.theme = next ? 'dark' : 'light'
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button
      className="theme-toggle relative w-12 h-[26px] rounded-[13px] border border-white/18 data-[theme=light]:border-black/14 bg-white/8 data-[theme=light]:bg-black/6 cursor-pointer shrink-0 transition-[background,border-color] hover:bg-white/13 data-[theme=light]:hover:bg-black/10 p-0"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{ opacity: mounted ? 1 : 0 }}
    >
      <span className={`absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-fg transition-transform duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center text-bg ${isDark ? 'translate-x-0' : 'translate-x-[22px]'}`}>
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  )
}

function SunIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
