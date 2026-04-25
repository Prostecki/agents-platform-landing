'use client'

import { motion, Variants } from 'framer-motion'

export default function FeaturesCarousel() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <div className="bg-bg-white border-b border-subtle p-[96px_0_80px] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center px-pad mb-14"
      >
        <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold tracking-[-1px] lg:tracking-[-1.5px] leading-[1.08] text-fg">Built for Athlete Performance.</h2>
      </motion.div>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="carousel-container flex items-end justify-start md:justify-center gap-4 md:gap-6 lg:gap-10 px-6 md:px-8 lg:px-10 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory pb-8"
        tabIndex={0}
        role="region"
        aria-label="Features Carousel"
      >
        {/* Card 1: Cardio/Load */}
        <motion.div variants={cardVariants} className="shrink-0 text-center w-[85vw] sm:w-[320px] lg:w-[340px] snap-center">
          <div className="rounded-[32px] overflow-hidden relative mb-6 h-[340px] lg:h-[400px] bg-gradient-to-br from-[#bfcfdf] via-[#8faabf] to-[#6a8ea8] shadow-card">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
            
            {/* Top Badge: Recovery */}
            <div className="absolute top-5 left-5 bg-bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse"></div>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">Ready to train</span>
            </div>

            <svg className="absolute bottom-0 left-0 right-0 h-32 opacity-40" viewBox="0 0 340 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M0,80 Q85,70 170,40 T340,20" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />
              <path d="M0,80 Q85,70 170,40 T340,20 V120 H0 Z" fill="white" fillOpacity="0.1" />
            </svg>

            <div className="absolute bg-bg-white/90 border border-subtle backdrop-blur-xl rounded-2xl p-4 shadow-soft top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] text-left">
              <div className="text-[10px] text-muted font-mono mb-1 uppercase">Weekly Load</div>
              <div className="text-2xl font-bold text-fg leading-none mb-1">487 <span className="text-sm font-normal text-muted">TSS</span></div>
              <div className="text-[11px] text-green-text flex items-center gap-1 font-medium">
                <span>↑ 12%</span>
                <span className="text-muted opacity-60 font-normal">than last week</span>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 text-white text-left">
              <div className="text-4xl font-bold leading-none mb-1">118</div>
              <div className="text-sm font-medium opacity-80 uppercase tracking-wide">Fitness Level</div>
            </div>
          </div>
          <h3 className="text-lg lg:text-xl font-bold text-fg mb-2">Balance Your Load</h3>
          <p className="text-[13px] lg:text-sm text-muted leading-relaxed max-w-[280px] mx-auto">Training Load uses heart rate and effort to measure what your training actually does.</p>
        </motion.div>

        {/* Card 2: Strength (The Hero) */}
        <motion.div variants={cardVariants} className="shrink-0 text-center w-[85vw] sm:w-[380px] lg:w-[420px] snap-center">
          <div className="rounded-[40px] overflow-hidden relative mb-10 h-[420px] lg:h-[480px] bg-gradient-to-br from-[#c0bfd8] via-[#8a89b8] to-[#5c5a90] shadow-card scale-[1.02] lg:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50"></div>
            
            {/* Status: Recording */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/20 backdrop-blur-lg px-4 py-1.5 rounded-full border border-white/10">
              <div className="w-2 h-2 rounded-full bg-red animate-pulse"></div>
              <span className="text-[11px] font-bold text-white uppercase tracking-[1px]">Recording Session</span>
            </div>

            <div className="absolute top-[28%] lg:top-[30%] left-1/2 -translate-x-1/2 text-center w-full">
              <div className="text-[48px] lg:text-[64px] font-bold text-white tracking-[2px] leading-none [text-shadow:0_4px_24px_rgba(0,0,0,0.4)] tabular-nums">01:04:15</div>
              <div className="text-xs font-bold text-white/60 uppercase mt-2 tracking-widest">Strength Training</div>
            </div>

            <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 bg-bg-white/95 border border-subtle backdrop-blur-2xl rounded-[24px] p-5 w-[260px] lg:w-[300px] shadow-card">
              <div className="flex justify-between items-center mb-4 pb-3 border-b border-subtle">
                <span className="text-[12px] font-bold text-fg">Shoulder Press</span>
                <span className="text-[11px] text-red font-bold flex items-center gap-1">
                  <span className="animate-pulse">♥</span> 142 BPM
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[12, 10, 8, 8].map((reps, i) => (
                  <div key={i} className={`rounded-lg p-2 text-center transition-colors ${i === 2 ? 'bg-green text-[var(--fg-on-light)]' : 'bg-subtle text-fg'}`}>
                    <div className={`text-[9px] mb-0.5 ${i === 2 ? 'text-[var(--fg-on-light)]/70' : 'text-fg/60'}`}>S{i+1}</div>
                    <div className="text-[12px] font-bold">{reps}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[11px] text-muted font-medium">Estimated 1RM</div>
                <div className="text-[14px] font-bold text-fg">185 lbs</div>
              </div>
            </div>
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-fg mb-2">Built for Strength</h3>
          <p className="text-sm lg:text-base text-muted leading-relaxed max-w-[320px] mx-auto">Track every set, rep, and weight. Get real-time feedback on your performance.</p>
        </motion.div>

        {/* Card 3: Composition */}
        <motion.div variants={cardVariants} className="shrink-0 text-center w-[85vw] sm:w-[320px] lg:w-[340px] snap-center">
          <div className="rounded-[32px] overflow-hidden relative mb-6 h-[340px] lg:h-[400px] bg-gradient-to-br from-[#c5c0b8] via-[#a09890] to-[#7a706a] shadow-card">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

            <svg className="absolute bottom-0 left-0 right-0 h-32 opacity-30" viewBox="0 0 340 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M0,100 L40,95 L80,85 L120,88 L160,70 L200,65 L240,55 L280,58 L340,40" fill="none" stroke="#9678dc" strokeWidth="3" strokeLinecap="round" />
              <path d="M0,100 L40,95 L80,85 L120,88 L160,70 L200,65 L240,55 L280,58 L340,40 V120 H0 Z" fill="#9678dc" fillOpacity="0.1" />
            </svg>

            <div className="absolute top-6 right-6 text-right">
              <div className="text-[10px] font-mono text-white/60 mb-1 uppercase tracking-widest">Current Trend</div>
              <div className="text-lg font-bold text-white flex items-center justify-end gap-1">
                <span className="text-green-text">↑</span> Leaning out
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] flex flex-col gap-3">
              <div className="bg-bg-white/90 border border-subtle backdrop-blur-xl rounded-2xl p-4 shadow-card">
                <div className="text-[9px] text-muted font-mono mb-1 uppercase">Body Weight</div>
                <div className="text-xl font-bold text-fg">185.4 <span className="text-xs font-normal text-muted">lbs</span></div>
              </div>
              <div className="bg-bg-white/90 border border-subtle backdrop-blur-xl rounded-2xl p-4 shadow-card translate-x-4">
                <div className="text-[9px] text-muted font-mono mb-1 uppercase">Lean Mass</div>
                <div className="text-xl font-bold text-fg">160.2 <span className="text-xs font-normal text-muted">lbs</span></div>
              </div>
            </div>
          </div>
          <h3 className="text-lg lg:text-xl font-bold text-fg mb-2">Watch Progress</h3>
          <p className="text-[13px] lg:text-sm text-muted leading-relaxed max-w-[280px] mx-auto">Monitor body composition trends over time, from muscle gain to fat loss.</p>
        </motion.div>
      </motion.div>
      <div className="flex justify-center gap-1.5 mt-8">
        <div className="w-1.5 h-1.5 rounded-full bg-subtle"></div>
        <div className="bg-fg w-5 h-1.5 rounded-sm"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-subtle"></div>
      </div>
    </div>
  )
}
