"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "../FadeUp";
import MagneticButton from "../MagneticButton";
import { InfiniteSlider } from "../core/infinite-slider";

/**
 * Headline line reveal. Watches the OUTER (clipping) wrapper instead of the
 * moving text, so it reliably triggers when the section scrolls into view.
 */
function Line({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <span ref={ref} className="block overflow-hidden pb-[0.1em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: inView ? "0%" : "110%" }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const marqueeWords = ["Let's Scale", "Performance", "Creative", "Growth", "Results", "Revenue"];
const points = ["Performance First", "Creative + Data", "Transparent Strategy"];

export default function FinalCTA() {
  return (
    <section className="container-px py-20 md:py-28">
      <div className="max-w-content mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-b from-white to-mist">
          {/* Subtle dot texture, faded toward the edges */}
          <div
            className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(rgba(17,17,17,0.13)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          />

          {/* Slow floating grey glows */}
          <motion.div
            className="pointer-events-none absolute rounded-full bg-ink/[0.08] blur-3xl"
            style={{ width: 460, height: 460, top: "-30%", left: "-8%" }}
            animate={{ x: [0, 60, -20, 0], y: [0, 30, -10, 0], scale: [1, 1.12, 0.96, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute rounded-full bg-ink/[0.07] blur-3xl"
            style={{ width: 420, height: 420, bottom: "-30%", right: "-6%" }}
            animate={{ x: [0, -50, 20, 0], y: [0, -30, 10, 0], scale: [1, 0.94, 1.1, 1] }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Brand mark watermark */}
          <img
            src="/logo/kx-logo.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute -right-16 -bottom-24 w-[420px] max-w-none opacity-[0.06] hidden md:block"
          />

          <div className="relative px-6 py-20 md:py-28 text-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-ink/60 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-ink animate-pulse" />
                Free Strategy Call
              </div>
            </FadeUp>

            <h2 className="mt-8 font-display font-extrabold uppercase text-display-1">
              <Line>Ready To</Line>
              <Line delay={0.12}>Scale?</Line>
            </h2>

            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-lg mx-auto text-ink/60 text-lg">
                Let&apos;s build a growth strategy that actually moves your business forward.
              </p>
            </FadeUp>

            <FadeUp delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href="/contact">Book A Free Strategy Call</MagneticButton>
              <MagneticButton href="tel:+918729048744" variant="outline">
                Call +91 87290 48744
              </MagneticButton>
            </FadeUp>

            <FadeUp delay={0.4} className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink/60">
              {points.map((p, i) => (
                <span key={p} className="flex items-center gap-6">
                  {p}
                  {i < points.length - 1 && <span className="hidden sm:block h-1 w-1 rounded-full bg-ink/30" />}
                </span>
              ))}
            </FadeUp>
          </div>

          {/* Scrolling words along the bottom edge: solid dark / soft grey alternating */}
          <div className="relative border-t border-line py-7 select-none [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <InfiniteSlider speed={40} speedOnHover={15} gap={40}>
              {marqueeWords.map((w, i) => (
                <div key={w} className="flex items-center gap-10">
                  <span
                    className={`whitespace-nowrap font-display font-extrabold uppercase leading-none tracking-tight text-[clamp(2.5rem,6vw,5rem)] ${
                      i % 2 === 0 ? "text-ink" : "text-ink/15"
                    }`}
                  >
                    {w}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink/50">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
