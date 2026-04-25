"use client";

import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scenarios = [
  {
    icon: "😮‍💨",
    label: "AFTER A HARD SESSION",
    headline: "You're exhausted and don't know what to eat.",
    before: "You guess. Maybe pasta. Maybe nothing. Your body needed specific fuel and didn't get it.",
    after: "Your nutrition coach already knows you did heavy squats and plyometrics today. It tells you exactly what to eat and when — before you even ask.",
  },
  {
    icon: "⚡",
    label: "NIGHT BEFORE COMPETITION",
    headline: "Tomorrow is the most important day of your season.",
    before: "You follow a generic carb-loading plan. Your coach gave you training advice without knowing what you ate this week.",
    after: "Both coaches synced three days ago. Your meals were already adjusted for peak performance. Your session load was tapered based on your nutrition. Everything is aligned.",
  },
  {
    icon: "📉",
    label: "WEEK OF POOR RECOVERY",
    headline: "You feel heavy. Your times are dropping.",
    before: "You push through. Two coaches, two separate opinions, no one seeing the full picture.",
    after: "Your training coach sees your fatigue score and nutrition data together. It flags the problem and adjusts this week's load automatically. You recover. You come back stronger.",
  },
];

// Diagonal resting tilt — every card sits at this angle when active
const REST = { rotationX: 7, rotationY: -18, scale: 1, y: 0, opacity: 1 };
// Cards wait far above viewport — hidden until their animation starts
const WAIT = { rotationX: 18, rotationY: -6, scale: 1.04, y: -800, opacity: 0 };
// Active card exits downward and tilts deeper
const EXIT = { rotationX: 3, rotationY: -32, scale: 0.85, y: 200, opacity: 0 };

const SCROLL_PER_CARD = 720;

export default function AgentNetwork() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const dotsRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const section = sectionRef.current;
    const dotsEl = dotsRef.current;
    if (!section || !dotsEl) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".an-card", section);
      const dots = gsap.utils.toArray<HTMLElement>(".an-dot", dotsEl);
      const n = cards.length;

      // Initial state
      gsap.set(cards[0], { ...REST, zIndex: 10 });
      cards.slice(1).forEach((card) => {
        gsap.set(card, { ...WAIT, zIndex: 1 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: `+=${SCROLL_PER_CARD * (n - 1)}`,
          scrub: 1.5,
          onUpdate: (self) => {
            const p = self.progress * (n - 1);
            const active = Math.min(Math.round(p), n - 1);
            dots.forEach((dot, i) => {
              dot.style.opacity = i === active ? "1" : "0.3";
              dot.style.transform = i === active ? "scale(1.4)" : "scale(1)";
            });
          },
        },
      });

      cards.forEach((card, i) => {
        // Exit animation for current card
        if (i < n - 1) {
          tl.to(card, { ...EXIT, duration: 1 }, i);
        }
        
        // Entrance animation for next card
        if (i > 0) {
          tl.set(card, { zIndex: 20 }, i - 1) // Bring to front
            .to(card, { ...REST, duration: 1 }, i - 1); // Animate from WAIT (opacity 0) to REST (opacity 1)
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="a2a" className="bg-bg border-b border-subtle overflow-hidden">
      <div className="w-full min-h-screen flex flex-col justify-center max-w-[1600px] mx-auto px-pad py-16 md:py-24">

        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-20 lg:gap-32">

          {/* Left: Card stack */}
          <div
            className="w-full md:w-[50%] lg:w-[55%] flex-shrink-0"
            style={{ display: "grid", perspective: "1200px", overflow: "visible" }}
          >
            {scenarios.map((card, i) => (
              <div
                key={card.label}
                className="an-card flex flex-col rounded-2xl bg-bg-white overflow-hidden"
                style={{
                  gridArea: "1 / 1",
                  willChange: "transform",
                  border: "1px solid var(--subtle)",
                  boxShadow: "var(--shadow-card)",
                  opacity: i === 0 ? 1 : 0,
                  maxWidth: "100%",
                }}
              >
                {/* Top accent */}
                <div className="h-[3px] w-full bg-green flex-shrink-0" />

                {/* Simulated surface lighting */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)",
                  }}
                />

                <div className="relative flex flex-col gap-5 p-6 md:p-8">
                  <span className="text-2xl md:text-3xl">{card.icon}</span>

                  <span className="text-muted font-mono uppercase tracking-[0.15em] text-[10px]">
                    {card.label}
                  </span>

                  <h3 className="text-fg font-bold leading-[1.3] text-lg md:text-xl lg:text-[22px]">
                    {card.headline}
                  </h3>

                  {/* Before */}
                  <div className="rounded-xl px-4 md:px-5 py-3 md:py-4 bg-[var(--red-bg)] border-l-[3px] border-[var(--red-border)] shadow-sm">
                    <div className="font-bold mb-1.5 uppercase tracking-wider text-[9px] text-[var(--red-text)]">
                      WITHOUT ATHLETE AI
                    </div>
                    <p className="text-muted leading-[1.6] text-sm md:text-[15px]">
                      {card.before}
                    </p>
                  </div>

                  {/* After */}
                  <div className="rounded-xl px-4 md:px-5 py-3 md:py-4 bg-[var(--green-bg)] border-l-[3px] border-[var(--green-border)] shadow-sm">
                    <div className="font-bold mb-1.5 uppercase tracking-wider text-[9px] text-green-text">
                      WITH ATHLETE AI
                    </div>
                    <p className="text-muted leading-[1.6] text-sm md:text-[15px]">
                      {card.after}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Header + progress dots */}
          <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col md:items-start items-center md:text-left text-center">
            <h2 className="text-[32px] md:text-[40px] lg:text-[56px] font-bold tracking-[-1.5px] lg:tracking-[-2.5px] leading-[1.05] mb-6 text-fg">
              What changes when your coaches actually talk.
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-muted leading-[1.6] mb-12 max-w-[480px]">
              The secret to peak performance isn&apos;t just more data — it&apos;s context. See how A2A synchronizes your team.
            </p>

            {/* Progress dots */}
            <div ref={dotsRef} className="flex gap-3" aria-hidden="true">
              {scenarios.map((_, i) => (
                <span
                  key={i}
                  className="an-dot inline-block w-2 h-2 rounded-full bg-green"
                  style={{
                    opacity: i === 0 ? 1 : 0.3,
                    transition: "opacity 0.2s, transform 0.2s",
                    transform: i === 0 ? "scale(1.5)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
