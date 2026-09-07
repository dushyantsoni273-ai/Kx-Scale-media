"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealText from "../RevealText";

/**
 * Full-bleed image that zooms out smoothly as the user scrolls past it.
 * Replace the placeholder background with a real photo by swapping the
 * <img> src at the bottom for your own image path in /public.
 */
export default function ScrollZoomShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.55, 0.25, 0.55]);

  return (
    <section ref={ref} className="relative h-[90vh] overflow-hidden border-t border-line">
      <motion.div style={{ scale }} className="absolute inset-0">
        {/* Replace with: <Image src="/showcase/hero-zoom.jpg" fill className="object-cover" alt="" /> */}
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1920&auto=format&fit=crop"
          alt="Behind the scenes at KX Scale Media"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-ink" />

      <div className="relative z-10 h-full flex items-center container-px">
        <div className="max-w-content mx-auto w-full">
          <h2 className="font-display font-extrabold uppercase text-display-2 text-white max-w-2xl text-balance">
            <RevealText>Where Strategy Meets</RevealText>
            <RevealText delay={0.1}>Craft.</RevealText>
          </h2>
        </div>
      </div>
    </section>
  );
}
