'use client'

export default function TechBar() {
  return (
    <div className="bg-bg-white border-b border-subtle p-[18px_var(--spacing-pad)] flex flex-col md:flex-row items-center justify-center gap-[14px] md:gap-10 text-center">
      <span className="font-mono text-[11px] text-muted tracking-[0.5px]">Trusted technology from Google</span>
      <span className="w-10 md:w-[1px] h-[1px] md:h-4 bg-white/10 dark:bg-white/10 data-[theme=light]:bg-black/12"></span>
      <span className="font-mono text-[11px] text-muted tracking-[0.5px]">Built for competitive athletes</span>
      <span className="w-10 md:w-[1px] h-[1px] md:h-4 bg-white/10 dark:bg-white/10 data-[theme=light]:bg-black/12"></span>
      <span className="font-mono text-[11px] text-muted tracking-[0.5px]">Built in public · Follow the journey</span>
    </div>
  )
}
