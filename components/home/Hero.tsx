"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "../MagneticButton";
import RevealText from "../RevealText";

const words = ["SCALE", "GROW", "CONVERT", "PERFORM"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden container-px pt-32 pb-20">
      {/* Abstract motion graphic - minimal geometric lines, no stock images */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute top-[15%] right-[8%] w-[38vw] h-[38vw] max-w-[560px] max-h-[560px] rounded-full border border-line"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-[22%] right-[13%] w-[26vw] h-[26vw] max-w-[380px] max-h-[380px] rounded-full border border-line"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#F5F5F5,_transparent_60%)]" />
      </div>

      <div className="max-w-content mx-auto w-full">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-ink animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-ink/60 font-semibold">
            Performance Marketing Agency
          </span>
        </div>

        <h1 className="font-display font-extrabold uppercase text-display-1 text-balance max-w-5xl">
          <RevealText delay={0.05}>We don&apos;t just run ads.</RevealText>
          <RevealText delay={0.18}>
            We{" "}
            <span className="relative inline-block h-[1em] align-bottom overflow-hidden min-w-[3.2ch] sm:min-w-[5ch]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            Businesses.
          </RevealText>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-lg text-ink/60 leading-relaxed"
        >
          KX Scale Media is a performance-driven digital marketing agency
          helping ambitious brands turn attention into measurable growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="/contact">Let&apos;s Scale Your Business</MagneticButton>
          <MagneticButton href="/work" variant="outline">
            View Our Work
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
