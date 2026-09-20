'use client';
 
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
 
/**
 * Scroll-driven interstitial between the Hero and Services sections.
 *
 * How it works:
 * - The <section> is tall (300vh) and gives the user scroll room.
 * - Inside it, a sticky 100vh "stage" stays pinned while you scroll through.
 * - The Figma gradient is painted on a layer 4x the viewport height, then
 *   translated upward as you scroll. The screen travels light -> dark.
 * - Two lines of copy fade in and out at set points in the scroll.
 * - Thin light lines fall continuously in the background (pure CSS).
 *
 * Deps: `npm i motion` (Framer Motion's current package name).
 */
 
// Pulled from the Figma frame, top to bottom. Tweak to match exact swatches.
const GRADIENT = `linear-gradient(
  to bottom,
  #F7F6F1 0%,
  #D9E2D2 15%,
  #B3CEAC 30%,
  #86B078 48%,
  #6A9470 60%,
  #4A7562 74%,
  #3A5A4A 86%,
  #2D4239 100%
)`;
 
// Static values, not Math.random(), so server and client render the same markup.
const LINES = [
  { left: '16%', height: '26vh', duration: 7.5, delay: -1.2, opacity: 0.35 },
  { left: '31%', height: '34vh', duration: 9, delay: -4.5, opacity: 0.25 },
  { left: '40%', height: '22vh', duration: 6.5, delay: -2.8, opacity: 0.3 },
  { left: '52%', height: '30vh', duration: 8, delay: -6, opacity: 0.4 },
  { left: '63%', height: '38vh', duration: 10, delay: -0.5, opacity: 0.3 },
  { left: '74%', height: '24vh', duration: 7, delay: -3.6, opacity: 0.35 },
  { left: '88%', height: '32vh', duration: 8.5, delay: -5.2, opacity: 0.25 },
];

const HeroToExpertise = () => {
  const ref = useRef<HTMLElement>(null);
 
  // 0 when the section's top hits the viewport top, 1 when its bottom hits the viewport bottom.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
 
  // Move the tall gradient up so the visible slice goes from light to dark.
  const gradientY = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);
 
  // Line 1: fade in, hold, fade out.
  const firstOpacity = useTransform(scrollYProgress, [0.05, 0.18, 0.38, 0.48], [0, 1, 1, 0]);
  const firstY = useTransform(scrollYProgress, [0.05, 0.18, 0.38, 0.48], [24, 0, 0, -24]);
 
  // Line 2: fade in and stay, handing off to Services.
  const secondOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);
  const secondY = useTransform(scrollYProgress, [0.55, 0.7], [24, 0]);
 
  return (
    <section ref={ref} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background gradient, 4x viewport height, scrolled via transform */}
        <motion.div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[400%]"
          style={{ backgroundImage: GRADIENT, y: gradientY }}
        />
 
        {/* Falling lines */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {LINES.map((line, i) => (
            <span
              key={i}
              className="falling-line absolute top-0 w-px"
              style={{
                left: line.left,
                height: line.height,
                opacity: line.opacity,
                animationDuration: `${line.duration}s`,
                animationDelay: `${line.delay}s`,
              }}
            />
          ))}
        </div>
 
        {/* Copy */}
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-between px-6 py-[18vh] md:px-16">
          <motion.p
            style={{ opacity: firstOpacity, y: firstY }}
            className="max-w-[22ch] text-[clamp(1.5rem,3.2vw,2.5rem)] font-semibold leading-snug tracking-tight text-[#2B1A12]"
          >
            To make a digital product that can actually help people, it needs more than spectacle
            and aesthetic.
          </motion.p>
 
          <motion.p
            style={{ opacity: secondOpacity, y: secondY }}
            className="max-w-[24ch] self-end text-[clamp(1.5rem,3.2vw,2.5rem)] font-semibold leading-snug tracking-tight text-white md:mr-[8%]"
          >
            It requires a foundation made specifically for the people you serve.
          </motion.p>
        </div>
      </div>
 
      <style>{`
        .falling-line {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.9));
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        @keyframes fall {
          from { transform: translateY(-100%); }
          to   { transform: translateY(100vh); }
        }
        @media (prefers-reduced-motion: reduce) {
          .falling-line { animation: none; transform: translateY(30vh); }
        }
      `}</style>
    </section>
  );
}

export default HeroToExpertise