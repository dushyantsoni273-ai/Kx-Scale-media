"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import FadeUp from "../FadeUp";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d: number) => {
    setDir(d);
    setIndex((i) => (i + d + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <section className="container-px py-28 md:py-36 border-t border-line">
      <div className="max-w-content mx-auto">
        <FadeUp className="mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-ink/50 font-semibold">
            Testimonials
          </span>
          <h2 className="mt-4 font-display font-extrabold uppercase text-display-2">
            What Our Clients Say.
          </h2>
        </FadeUp>

        <div className="relative max-w-3xl mx-auto text-center">
          <Quote className="mx-auto mb-8 text-ink/15" size={48} />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -dir * 40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-2xl sm:text-3xl font-medium leading-snug text-balance">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="w-11 h-11 rounded-full bg-mist flex items-center justify-center text-xs text-ink/40 uppercase">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              data-cursor="hover"
              onClick={() => go(-1)}
              className="w-11 h-11 rounded-full border border-line flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === index ? "bg-ink" : "bg-line"
                  }`}
                />
              ))}
            </div>
            <button
              data-cursor="hover"
              onClick={() => go(1)}
              className="w-11 h-11 rounded-full border border-line flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
