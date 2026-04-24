'use client'

import { motion, Variants } from 'framer-motion'

export default function ProductShowcase() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <div className="bg-bg-white border-b border-subtle p-[64px_var(--spacing-pad)] lg:p-[100px_var(--spacing-pad)] text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="font-mono text-[11px] text-[#bbb] tracking-[1.5px] uppercase mb-4">The Nutrition Agent</div>
        <h2 className="text-[30px] lg:text-[46px] font-bold tracking-[-1px] lg:tracking-[-1.5px] leading-[1.08] mb-4">Fuel that knows your training.</h2>
        <p className="text-[14px] lg:text-[16px] text-muted leading-[1.65] max-w-[480px] mx-auto mb-10 lg:mb-[72px]">Every meal recommendation is backed by your actual training data — not a generic algorithm.</p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative inline-block w-full lg:w-[700px] h-[520px] lg:h-[620px]"
      >
        {/* Floating cards - hidden on mobile */}
        <motion.div 
          variants={cardVariants}
          className="hidden lg:block absolute bg-bg-white/96 border border-white/8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.45)] p-[14px_16px] z-[3] text-left w-40 top-[30px] left-5 data-[theme=light]:shadow-[0_8px_32px_rgba(0,0,0,0.1)] data-[theme=light]:border-black/9"
        >
          <div className="text-[20px] mb-1.5">🥗 ⭐</div>
          <div className="text-xs font-bold text-fg mb-0.5 leading-[1.3]">Homemade Chicken<br />&amp; Veggie Soup</div>
          <div className="text-[10px] text-muted">285 kcal · 1 bowl</div>
        </motion.div>

        <motion.div 
          variants={cardVariants}
          className="hidden lg:block absolute bg-bg-white/96 border border-white/8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.45)] p-[14px_16px] z-[3] text-left w-[168px] top-[60px] right-4 data-[theme=light]:shadow-[0_8px_32px_rgba(0,0,0,0.1)] data-[theme=light]:border-black/9"
        >
          <div className="text-[9px] text-muted mb-1.5 flex items-center gap-1">
            <span className="w-[5px] h-[5px] rounded-full bg-indigo-base"></span>Nutritional Goals
          </div>
          <div className="text-[26px] font-bold text-fg leading-none">2,325<span className="text-xs font-normal text-muted"> kcal</span></div>
          <div className="text-orange text-[10px] font-semibold">Above target</div>
          <div className="flex items-end gap-[3px] mt-2 h-7">
            <div className="w-2.5 bg-indigo-base rounded-[2px]" style={{height:'60%'}}></div>
            <div className="w-2.5 bg-indigo-base rounded-[2px]" style={{height:'80%'}}></div>
            <div className="w-2.5 bg-indigo-base rounded-[2px]" style={{height:'100%'}}></div>
            <div className="w-2.5 bg-indigo-base rounded-[2px]" style={{height:'90%'}}></div>
            <div className="w-2.5 bg-white/10 dark:bg-white/10 data-[theme=light]:bg-black/8 rounded-[2px]" style={{height:'50%'}}></div>
            <div className="w-2.5 bg-white/10 dark:bg-white/10 data-[theme=light]:bg-black/8 rounded-[2px]" style={{height:'30%'}}></div>
            <div className="w-2.5 bg-white/10 dark:bg-white/10 data-[theme=light]:bg-black/8 rounded-[2px]" style={{height:'20%'}}></div>
          </div>
        </motion.div>

        <motion.div 
          variants={cardVariants}
          className="hidden lg:block absolute bg-bg-white/96 border border-white/8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.45)] p-[14px_16px] z-[3] text-left w-[156px] top-[300px] left-[10px] data-[theme=light]:shadow-[0_8px_32px_rgba(0,0,0,0.1)] data-[theme=light]:border-black/9"
        >
          <div className="text-[9px] text-muted mb-1.5 flex items-center gap-1">
            <span className="w-[5px] h-[5px] rounded-full bg-green"></span>Macro Balance
          </div>
          <div className="flex gap-2.5 mt-2">
            <div className="text-center">
              <div className="text-sm font-bold leading-none text-fg">67g</div>
              <div className="text-[8px] text-muted">Fat</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold leading-none text-blue">150g</div>
              <div className="text-[8px] text-muted">Carbs</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold leading-none text-orange">98g</div>
              <div className="text-[8px] text-muted">Protein</div>
            </div>
          </div>
          <div className="flex items-end gap-[3px] mt-2.5 h-7">
            <div className="w-2.5 rounded-[2px] bg-fg" style={{height:'50%'}}></div>
            <div className="w-2.5 rounded-[2px] bg-blue" style={{height:'70%'}}></div>
            <div className="w-2.5 rounded-[2px] bg-blue" style={{height:'90%'}}></div>
            <div className="w-2.5 rounded-[2px] bg-blue" style={{height:'100%'}}></div>
            <div className="w-2.5 rounded-[2px] bg-orange" style={{height:'80%'}}></div>
            <div className="w-2.5 rounded-[2px] bg-orange" style={{height:'60%'}}></div>
            <div className="w-2.5 rounded-[2px] bg-orange" style={{height:'40%'}}></div>
          </div>
        </motion.div>

        <motion.div 
          variants={cardVariants}
          className="hidden lg:block absolute bg-bg-white/96 border border-white/8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.45)] p-[14px_16px] z-[3] text-left w-[164px] bottom-5 right-4 data-[theme=light]:shadow-[0_8px_32px_rgba(0,0,0,0.1)] data-[theme=light]:border-black/9"
        >
          <div className="text-[9px] text-muted mb-1.5 flex items-center gap-1">
            <span className="w-[5px] h-[5px] rounded-full bg-green"></span>Food Log
          </div>
          <div className="bg-white/6 dark:bg-white/6 data-[theme=light]:bg-black/4 rounded-lg p-[7px_9px] text-[10px] text-muted leading-[1.4] mt-2">What are you eating?<br />Breakfast waffle with 2 eggs on the side</div>
          <div className="bg-white/4 border border-white/8 rounded-lg p-[6px_9px] text-[10px] text-[#bbb] mt-1.5 flex justify-between items-center data-[theme=light]:bg-black/3 data-[theme=light]:border-black/8 data-[theme=light]:text-muted">
            <span>Add meal...</span>
            <div className="w-[18px] h-[18px] rounded-full bg-fg text-[#fff] dark:text-[#000] text-xs flex items-center justify-center">+</div>
          </div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[260px] h-[560px] bg-[#111] rounded-[46px] shadow-[0_0_0_2px_#2a2a2a,0_32px_80px_rgba(0,0,0,0.22),inset_0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden z-[2]"
        >
          <div className="absolute inset-2 bg-[#f5f5f7] rounded-[38px] overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-7 bg-[#111] rounded-b-[20px] z-10"></div>
            <div className="p-[10px_20px_0] flex justify-between items-center text-[9px] text-[#1a1a1a] font-semibold relative z-[5] mb-1.5">
              <span>9:41</span>
              <span>▲▲▲ ᯤ ⬛</span>
            </div>
            <div className="px-3.5">
              <div className="flex justify-between items-center p-[6px_0_10px] text-[11px] text-[#aaa]">
                <span>←</span>
                <span></span>
                <span>···</span>
              </div>
              <div className="text-lg font-bold text-center mb-0.5 text-[#111]">Nutrition</div>
              <div className="text-[11px] text-muted text-center mb-4">Today ↓</div>
              <div className="w-[100px] h-[100px] rounded-full border-[8px] border-[#e8e8e8] mx-auto mb-2.5 flex items-center justify-center bg-[conic-gradient(#6366f1_0%_72%,#e8e8e8_72%_100%)]">
                <div className="w-[76px] h-[76px] rounded-full bg-[#f5f5f7] flex flex-col items-center justify-center">
                  <div className="text-2xl font-bold text-[#111] leading-none">93</div>
                  <div className="text-[9px] text-muted">optimal</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1.5 mb-2.5">
                <div className="bg-white rounded-[10px] p-[8px_10px] text-left">
                  <div className="text-[8px] text-muted mb-0.5">Food Quality</div>
                  <div className="text-base font-bold text-[#111]">92</div>
                  <div className="text-[9px] text-green-text">Optimal</div>
                </div>
                <div className="bg-white rounded-[10px] p-[8px_10px] text-left">
                  <div className="text-[8px] text-muted mb-0.5">Glucose Impact</div>
                  <div className="text-base font-bold text-[#111]">94</div>
                  <div className="text-[9px] text-green-text">Optimal</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5 mb-2.5">
                <div className="bg-white rounded-[10px] p-[8px_4px] text-center">
                  <div className="text-sm mb-0.5">🔍</div>
                  <div className="text-[8px] text-muted">Search</div>
                </div>
                <div className="bg-white rounded-[10px] p-[8px_4px] text-center">
                  <div className="text-sm mb-0.5">📷</div>
                  <div className="text-[8px] text-muted">Capture</div>
                </div>
                <div className="bg-white rounded-[10px] p-[8px_4px] text-center">
                  <div className="text-sm mb-0.5">Aↄ</div>
                  <div className="text-[8px] text-muted">Describe</div>
                </div>
              </div>
              <div className="bg-white rounded-[10px] p-[9px_10px] flex justify-between items-center mb-1.5">
                <div>
                  <div className="text-[10px] font-semibold text-[#111]">My Foods</div>
                  <div className="text-[9px] text-muted">8 favorites · 12 recipes · 10 foods</div>
                </div>
                <div className="text-[11px] text-[#ccc]">→</div>
              </div>
              <div className="bg-white rounded-[10px] p-[9px_10px] flex justify-between items-center mb-1.5">
                <div>
                  <div className="text-[10px] font-semibold text-[#111]">Goals</div>
                  <div className="text-[9px] text-muted">Calories · 200 kcal left</div>
                </div>
                <div className="text-[11px] text-[#ccc]">→</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
