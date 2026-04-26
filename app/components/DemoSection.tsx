'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Iphone } from '@/app/components/magicui/iphone'

const S = {
  card: {
    background: 'var(--bg-white)',
    border: '0.5px solid var(--subtle)',
    borderRadius: '8px',
    padding: '10px 11px',
  } as React.CSSProperties,
  label: { fontSize: '10px', color: 'var(--muted)', marginBottom: '4px' } as React.CSSProperties,
  agentMsg: (accent: string) => ({
    borderLeft: `2px solid ${accent}`,
    paddingLeft: '8px',
    fontSize: '11px',
    color: 'var(--fg)',
    lineHeight: 1.5,
  } as React.CSSProperties),
  dot: (color: string) => ({
    width: 7, height: 7, borderRadius: '50%', background: color, flexShrink: 0, display: 'inline-block',
  } as React.CSSProperties),
  pill: (color: string, bg: string) => ({
    marginLeft: 'auto', fontSize: '9px', background: bg,
    color: color, borderRadius: '10px', padding: '2px 7px', whiteSpace: 'nowrap' as const,
  }),
  userBubble: {
    background: '#1e3a5f', color: '#e8f4fd',
    borderRadius: '10px 10px 2px 10px',
    padding: '6px 10px', fontSize: '11px', maxWidth: '80%', lineHeight: 1.4,
  } as React.CSSProperties,
}

// Site Logo Component matching Nav.tsx exactly
const Logo = ({ size = 16 }: { size?: number }) => (
  <div 
    className="bg-fg flex items-center justify-center" 
    style={{ 
      width: size * 2, 
      height: size * 2, 
      borderRadius: '25%', // Matches rounded-lg feel
    }}
  >
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
      <path d="M3 8 L8 3 L13 8 L8 13 Z" fill="var(--bg)" />
    </svg>
  </div>
)

function MacFrame({ innerRef }: { innerRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div
      ref={innerRef}
      className="demo-mac"
      style={{
        opacity: 0,
        transform: 'perspective(1200px) rotateY(-3deg) translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        borderRadius: '12px',
        border: '1px solid var(--subtle)',
        background: 'var(--bg)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
        overflow: 'hidden',
        minHeight: '520px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* macOS window chrome */}
      <div style={{
        height: '40px', background: 'var(--bg-white)',
        borderBottom: '1px solid var(--subtle)',
        display: 'flex', alignItems: 'center',
        padding: '0 14px', position: 'relative',
      }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {['#FF5F57', '#FFBD2E', '#27C840'].map(color => (
            <span key={color} style={{ width: 12, height: 12, borderRadius: '50%', background: color, display: 'inline-block' }} />
          ))}
        </div>
        <div style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          background: 'var(--subtle)', borderRadius: '6px',
          padding: '3px 14px', fontSize: '11px', color: 'var(--muted)',
          fontFamily: 'var(--font-mono)',
        }}>
          athlete-ai.tech
        </div>
      </div>

      {/* Dashboard nav */}
      <div style={{
        height: '46px', background: 'var(--bg-white)',
        borderBottom: '0.5px solid var(--subtle)',
        display: 'flex', alignItems: 'center',
        padding: '0 14px', gap: '16px',
      }}>
        <div style={{ 
          display: 'flex', alignItems: 'center', gap: '8px', 
          fontWeight: 700, fontSize: '13px', color: 'var(--fg)',
          letterSpacing: '-0.05em' 
        }}>
          <Logo size={10} />
          Athlete AI
        </div>
        <div style={{ display: 'flex', gap: '14px', flex: 1 }}>
          {['Dashboard', 'Nutrition', 'Training'].map((link, i) => (
            <span key={link} style={{ fontSize: '12px', color: i === 0 ? 'var(--fg)' : 'var(--muted)', fontWeight: i === 0 ? 600 : 400 }}>
              {link}
            </span>
          ))}
        </div>
        <div style={{
          width: 26, height: 26, borderRadius: '50%',
          background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '9px', fontWeight: 700, color: '#22C55E',
        }}>MK</div>
      </div>

      {/* Metric cards */}
      <div style={{ padding: '12px 14px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
        {[
          { label: 'Calories today', value: '2,340', sub: 'on target', subColor: '#22C55E' },
          { label: 'Protein', value: '142g', sub: 'target 180g', subColor: 'var(--muted)' },
          { label: 'Fatigue', value: '7/10', sub: 'recovery needed', subColor: '#F59E0B' },
          { label: 'Next competition', value: '18d', sub: 'Stockholm Open', subColor: 'var(--muted)' },
        ].map(card => (
          <div key={card.label} style={S.card}>
            <div style={S.label}>{card.label}</div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--fg)', lineHeight: 1.1, marginBottom: '3px' }}>{card.value}</div>
            <div style={{ fontSize: '10px', color: card.subColor }}>{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Chat panels */}
      <div style={{ padding: '0 14px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', flex: 1 }}>

        {/* Nutrition Coach */}
        <div style={S.card}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
            <span style={S.dot('#22C55E')} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--fg)' }}>Nutrition Coach</span>
            <span style={S.pill('#22C55E', 'rgba(34,197,94,0.1)')}>synced</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
            <div style={S.userBubble}>Should I carb load tonight?</div>
          </div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '4px',
            fontSize: '9px', color: '#22C55E',
            background: 'rgba(34,197,94,0.08)', borderRadius: '8px',
            padding: '3px 7px', marginBottom: '8px',
            fontFamily: 'var(--font-mono)',
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E', flexShrink: 0, display: 'inline-block' }} />
            Agent sync active
          </div>
          <div style={S.agentMsg('#22C55E')}>
            Absolutely — I’ve <strong>coordinated with your training schedule</strong>. Since you have a 
            high-intensity interval session tomorrow at 8:00 AM, increasing your complex 
            carbohydrate intake by 400–500g tonight will ensure your muscle glycogen 
            stores are fully topped up for <strong>peak performance</strong>. I've also adjusted your 
            morning pre-workout snack to be more easily digestible.
          </div>
        </div>

        {/* Training Coach */}
        <div style={S.card}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
            <span style={S.dot('#3B82F6')} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--fg)' }}>Training Coach</span>
            <span style={S.pill('#3B82F6', 'rgba(59,130,246,0.1)')}>synced</span>
          </div>
          {[
            { label: 'Weekly load', value: '68%', color: '#3B82F6', pct: 68 },
            { label: 'Recovery', value: '42%', color: '#F59E0B', pct: 42 },
          ].map(bar => (
            <div key={bar.label} style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '10px', color: 'var(--muted)' }}>{bar.label}</span>
                <span style={{ fontSize: '10px', color: bar.color, fontWeight: 600 }}>{bar.value}</span>
              </div>
              <div style={{ height: '4px', background: 'var(--subtle)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: `${bar.pct}%`, height: '100%', background: bar.color, borderRadius: '2px' }} />
              </div>
            </div>
          ))}
          <div style={S.agentMsg('#3B82F6')}>
            Agreed. Based on your current fatigue levels (7/10), I've scheduled a 
            10-minute active mobility and CNS priming session for tomorrow morning. 
            I’ve already <strong>synced this with your nutrition coach</strong> to ensure your breakfast 
            macros provide the <strong>necessary energy without causing GI distress</strong>.
          </div>
        </div>

      </div>
    </div>
  )
}

function IPhoneFrame({ innerRef }: { innerRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div
      ref={innerRef}
      className="demo-iphone"
      style={{
        opacity: 0,
        transform: 'perspective(1200px) rotateY(3deg) translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        width: 270,
        flexShrink: 0,
        filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.45))',
      }}
    >
      <Iphone>
        <div style={{
          width: '100%', height: '100%',
          background: 'var(--bg)',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          fontFamily: 'var(--font-sans)',
        }}>

          {/* Status bar */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '14px 22px 0',
            fontSize: '13px', fontWeight: 600, color: 'var(--fg)',
            flexShrink: 0,
          }}>
            <span>9:41</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="7" width="3" height="4" rx="1" fill="currentColor" />
                <rect x="4" y="5" width="3" height="6" rx="1" fill="currentColor" />
                <rect x="8" y="2.5" width="3" height="8.5" rx="1" fill="currentColor" />
                <rect x="12" y="0" width="3" height="11" rx="1" fill="currentColor" style={{ opacity: 0.35 }} />
              </svg>
              <div style={{ width: 22, height: 11, border: '1px solid currentColor', borderRadius: 3, padding: 1, position: 'relative', opacity: 0.8 }}>
                <div style={{ width: '70%', height: '100%', background: 'currentColor', borderRadius: 1 }} />
                <div style={{ position: 'absolute', right: -4, top: 3, width: 2, height: 4, background: 'currentColor', borderRadius: '0 1px 1px 0' }} />
              </div>
            </div>
          </div>

          {/* App header */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '10px 19px 12px',
            borderBottom: '0.5px solid var(--subtle)', flexShrink: 0,
          }}>
            <div style={{ 
              display: 'flex', alignItems: 'center', gap: '8px', 
              fontWeight: 700, color: 'var(--fg)',
              letterSpacing: '-0.05em'
            }}>
              <Logo size={12} />
              <span style={{ fontSize: '17px' }}>Athlete AI</span>
            </div>
            <div style={{
              width: 31, height: 31, borderRadius: '50%',
              background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '11px', fontWeight: 700, color: '#22C55E',
            }}>MK</div>
          </div>

          {/* Metric cards */}
          <div style={{ padding: '8px 14px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, flexShrink: 0 }}>
            {[
              { label: 'Fatigue', value: '7/10', sub: 'recovery needed', valueColor: '#F59E0B', subColor: '#F59E0B' },
              { label: 'Calories', value: '2,340', sub: 'on target', valueColor: 'var(--fg)', subColor: '#22C55E' },
            ].map(c => (
              <div key={c.label} style={{ background: 'var(--bg-white)', border: '0.5px solid var(--subtle)', borderRadius: 10, padding: '8px 12px' }}>
                <div style={{ fontSize: '11px', color: 'var(--muted)', marginBottom: 2 }}>{c.label}</div>
                <div style={{ fontSize: '20px', fontWeight: 700, color: c.valueColor, lineHeight: 1 }}>{c.value}</div>
                <div style={{ fontSize: '11px', color: c.subColor, marginTop: 2 }}>{c.sub}</div>
              </div>
            ))}
          </div>

          {/* Chat thread */}
          <div style={{
            flex: 1, minHeight: 0, margin: '8px 14px 0',
            background: 'var(--bg-white)', border: '0.5px solid var(--subtle)',
            borderRadius: 10, padding: '10px 12px',
            display: 'flex', flexDirection: 'column', overflow: 'hidden',
          }}>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
              <div style={{
                background: '#1e3a5f', color: '#e8f4fd',
                borderRadius: '12px 12px 4px 12px',
                padding: '6px 10px', fontSize: '12px', maxWidth: '85%', lineHeight: 1.4,
              }}>
                I had to skip my afternoon run. What should I do for dinner?
              </div>
            </div>

            <div style={{ marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3B82F6', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)' }}>Training Coach</span>
              </div>
              <div style={{ borderLeft: '2px solid #3B82F6', paddingLeft: 8, fontSize: '12px', color: 'var(--fg)', lineHeight: 1.45 }}>
                Log noted. I've <strong>moved your aerobic session</strong> to tomorrow morning. <strong>Recovery is now the priority.</strong>
              </div>
            </div>

            <div style={{ marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)' }}>Nutrition Coach</span>
              </div>
              <div style={{ borderLeft: '2px solid #22C55E', paddingLeft: 8, fontSize: '12px', color: 'var(--fg)', lineHeight: 1.45 }}>
                Got it. <strong>Reducing dinner carbs</strong> by 40g since output is lower. <strong>Increasing protein for recovery.</strong>
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: 8, borderTop: '0.5px solid var(--subtle)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
              <span style={{ fontSize: '10px', color: '#22C55E', fontFamily: 'var(--font-mono)' }}>agents synced · live</span>
            </div>

          </div>

          {/* Tab bar */}
          <div style={{
            display: 'flex', justifyContent: 'space-around', alignItems: 'center',
            padding: '8px 14px 14px',
            borderTop: '0.5px solid var(--subtle)', flexShrink: 0,
          }}>
            {[
              { label: 'Dashboard', active: true, icon: '⊞' },
              { label: 'Nutrition', active: false, icon: '🥗' },
              { label: 'Training', active: false, icon: '🏃' },
            ].map(tab => (
              <div key={tab.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <span style={{ fontSize: '19px', opacity: tab.active ? 1 : 0.35 }}>{tab.icon}</span>
                <span style={{ fontSize: '11px', color: tab.active ? '#22C55E' : 'var(--muted)', fontWeight: tab.active ? 600 : 400 }}>
                  {tab.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </Iphone>
    </div>
  )
}

export default function DemoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const macRef = useRef<HTMLDivElement>(null)
  const iphoneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const mac = macRef.current
    const iphone = iphoneRef.current
    if (!section) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        
        if (mac) {
          mac.style.opacity = '1'
          mac.style.transform = 'perspective(1200px) rotateY(-3deg) translateY(0)'
        }
        
        if (iphone) {
          setTimeout(() => {
            iphone.style.opacity = '1'
            iphone.style.transform = 'perspective(1200px) rotateY(3deg) translateY(0)'
          }, 200)
        }
        obs.disconnect()
      },
      { threshold: 0.1 }
    )
    obs.observe(section)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="demo" className="border-b border-subtle bg-bg overflow-hidden">
      <div style={{ width: '100%', maxWidth: 'var(--max)', margin: '0 auto', padding: '80px var(--pad)' }}>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mx-auto text-center mb-16"
        >
          <h2 className="text-[32px] md:text-[42px] font-bold leading-[1.1] tracking-[-1.5px] mb-4 text-fg">
            Performance intelligence, <span className="text-green-text opacity-90">synchronized.</span>
          </h2>
          <p className="text-[15px] md:text-[16px] text-muted leading-[1.65] max-w-[520px] mx-auto">
            Experience the synergy of unified coaching. Our system eliminates data silos 
            and conflicting advice, synchronizing your nutrition and training into 
            one optimized path to performance.
          </p>
        </motion.div>

        {/* Side-by-side device frames */}
        <div className="demo-frames">
          <MacFrame innerRef={macRef} />
          <IPhoneFrame innerRef={iphoneRef} />
        </div>

        {/* Mobile fallback */}
        <div className="demo-mobile-fallback">
          <div style={{
            background: 'var(--bg-white)', border: '1px solid var(--subtle)',
            borderRadius: '16px', padding: '20px 20px 24px',
            maxWidth: '480px', margin: '0 auto',
          }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '14px' }}>
              <div style={{
                background: '#1e3a5f', color: '#e8f4fd',
                borderRadius: '16px 16px 4px 16px',
                padding: '10px 14px', fontSize: '14px', maxWidth: '85%', lineHeight: 1.5,
              }}>
                Should I carb load tonight?
              </div>
            </div>
            {[
              { icon: '🥗', accent: '#22C55E', bg: 'rgba(34,197,94,0.15)', border: 'rgba(34,197,94,0.25)', text: "Yes — your training coach confirmed race day is in 2 days. Load with complex carbs, 400–500g target." },
              { icon: '🏃', accent: '#3B82F6', bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.25)', text: "Race morning: easy 10min activation only. I’ve updated your nutrition coach with the race window." },
            ].map((msg, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: i === 0 ? '12px' : 0 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                  background: msg.bg, border: `1px solid ${msg.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px',
                }}>{msg.icon}</div>
                <div style={{ borderLeft: `2px solid ${msg.accent}`, paddingLeft: '10px', fontSize: '13px', color: 'var(--fg)', lineHeight: 1.55 }}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
