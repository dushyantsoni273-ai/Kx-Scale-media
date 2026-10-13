"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import FadeUp from "../FadeUp";
import RevealText from "../RevealText";
import MagneticButton from "../MagneticButton";
import { InfiniteSlider } from "../core/infinite-slider";

const steps = [
  { n: "01", title: "Free Strategy Call", desc: "We understand your business, audience and growth goals." },
  { n: "02", title: "Custom Growth Plan", desc: "A performance-focused plan built around your numbers." },
  { n: "03", title: "Launch & Scale", desc: "We launch with proper tracking and scale what works." },
];

const marqueeWords = ["Let's Scale", "Performance", "Creative", "Growth", "Results"];

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-28 md:py-40">
      {/* Soft grey animated glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F5F5F5,_transparent_65%)]" />
        <motion.div
          className="absolute rounded-full bg-ink/[0.07] blur-3xl"
          style={{ width: "44vw", height: "44vw", maxWidth: 620, maxHeight: 620, top: "-18%", left: "-8%" }}
          animate={{ x: [0, 60, -20, 0], y: [0, 40, -10, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full bg-ink/[0.06] blur-3xl"
          style={{ width: "38vw", height: "38vw", maxWidth: 540, maxHeight: 540, bottom: "-22%", right: "-6%" }}
          animate={{ x: [0, -50, 20, 0], y: [0, -30, 15, 0], scale: [1, 0.92, 1.1, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Big scrolling outline text */}
      <div className="relative mb-16 md:mb-24 select-none">
        <InfiniteSlider speed={40} speedOnHover={15} gap={48}>
          {marqueeWords.map((w) => (
            <span
              key={w}
              className="whitespace-nowrap font-display font-extrabold uppercase leading-none text-[clamp(3rem,9vw,8rem)]"
              style={{ WebkitTextStroke: "1px rgba(17,17,17,0.22)", color: "transparent" }}
            >
              {w} <span className="mx-6 text-ink/25">✦</span>
            </span>
          ))}
        </InfiniteSlider>
      </div>

      <div className="relative container-px max-w-content mx-auto text-center">
        <h2 className="font-display font-extrabold uppercase text-display-1">
          <RevealText>Ready To Scale?</RevealText>
        </h2>

        <FadeUp delay={0.2}>
          <p className="mt-6 max-w-lg mx-auto text-ink/60 text-lg">
            Let&apos;s build a growth strategy that actually moves your business forward.
          </p>
        </FadeUp>

        <FadeUp delay={0.35} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="/contact">Book A Free Strategy Call</MagneticButton>
          <MagneticButton href="/services" variant="outline">
            Explore Services
          </MagneticButton>
        </FadeUp>

        <FadeUp delay={0.45} className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink/60">
          <a href="mailto:kxscalemedia@gmail.com" data-cursor="hover" className="flex items-center gap-2 hover:text-ink transition-colors">
            <Mail size={16} /> kxscalemedia@gmail.com
          </a>
          <a href="tel:+918729048744" data-cursor="hover" className="flex items-center gap-2 hover:text-ink transition-colors">
            <Phone size={16} /> +91 87290 48744
          </a>
        </FadeUp>

        {/* What happens next — cards invert to black on hover */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line text-left">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={0.1 * i}>
              <div data-cursor="hover" className="group relative h-full bg-white p-8 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-ink"
                  initial={{ y: "100%" }}
                  whileHover={{ y: "0%" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="relative z-10">
                  <span className="text-sm font-mono text-ink/40 group-hover:text-white/50 transition-colors duration-500">
                    {s.n}
                  </span>
                  <h3 className="mt-6 text-xl font-bold group-hover:text-white transition-colors duration-500">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/60 group-hover:text-white/70 leading-relaxed transition-colors duration-500">
                    {s.desc}
                  </p>
                  <div className="mt-6 h-px w-8 bg-ink/30 group-hover:bg-white/40 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
