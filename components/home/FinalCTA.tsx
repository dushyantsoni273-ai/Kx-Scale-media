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
    <section className="relative overflow-hidden bg-ink text-white py-28 md:py-40">
      {/* Soft animated glow behind the content */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute rounded-full bg-white/[0.08] blur-3xl"
          style={{ width: "46vw", height: "46vw", maxWidth: 640, maxHeight: 640, top: "-20%", left: "-8%" }}
          animate={{ x: [0, 60, -20, 0], y: [0, 40, -10, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full bg-white/[0.06] blur-3xl"
          style={{ width: "40vw", height: "40vw", maxWidth: 560, maxHeight: 560, bottom: "-25%", right: "-6%" }}
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
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.28)", color: "transparent" }}
            >
              {w} <span className="mx-6 text-white/30">✦</span>
            </span>
          ))}
        </InfiniteSlider>
      </div>

      <div className="relative container-px max-w-content mx-auto text-center">
        <h2 className="font-display font-extrabold uppercase text-display-1">
          <RevealText>Ready To Scale?</RevealText>
        </h2>

        <FadeUp delay={0.2}>
          <p className="mt-6 max-w-lg mx-auto text-white/60 text-lg">
            Let&apos;s build a growth strategy that actually moves your business forward.
          </p>
        </FadeUp>

        <FadeUp delay={0.35} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="/contact" className="!bg-white !text-ink hover:!bg-white/90">
            Book A Free Strategy Call
          </MagneticButton>
          <MagneticButton
            href="/services"
            variant="outline"
            className="!border-white/40 !text-white hover:!bg-white hover:!text-ink"
          >
            Explore Services
          </MagneticButton>
        </FadeUp>

        <FadeUp delay={0.45} className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/60">
          <a href="mailto:kxscalemedia@gmail.com" data-cursor="hover" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={16} /> kxscalemedia@gmail.com
          </a>
          <a href="tel:+918729048744" data-cursor="hover" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={16} /> +91 87290 48744
          </a>
        </FadeUp>

        {/* What happens next */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 text-left">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={0.1 * i} className="bg-ink p-8 group">
              <span className="text-sm font-mono text-white/40">{s.n}</span>
              <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.desc}</p>
              <div className="mt-6 h-px w-8 bg-white/30 transition-all duration-500 group-hover:w-full" />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
