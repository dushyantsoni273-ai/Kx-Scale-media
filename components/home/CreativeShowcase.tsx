"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import FadeUp from "../FadeUp";

interface ShowcaseItem {
  id: string;
  label: string;
  type: "video" | "static" | "social" | "carousel";
  // Replace with real media path in /public/showcase/
  placeholder: string;
  tall?: boolean;
}

const items: ShowcaseItem[] = [
  { id: "s1", label: "Video Creative — GlowLab", type: "video", placeholder: "/showcase/placeholder-01.jpg", tall: true },
  { id: "s2", label: "Static Ad — Urban Thread", type: "static", placeholder: "/showcase/placeholder-02.jpg" },
  { id: "s3", label: "Social Creative — Loop Coffee", type: "social", placeholder: "/showcase/placeholder-03.jpg" },
  { id: "s4", label: "Carousel Ad — Nourish", type: "carousel", placeholder: "/showcase/placeholder-04.jpg", tall: true },
  { id: "s5", label: "Static Ad — Stride", type: "static", placeholder: "/showcase/placeholder-05.jpg" },
  { id: "s6", label: "Video Creative — BrightPath", type: "video", placeholder: "/showcase/placeholder-06.jpg" },
];

export default function CreativeShowcase() {
  const [active, setActive] = useState<ShowcaseItem | null>(null);

  return (
    <section className="container-px py-28 md:py-36 border-t border-line">
      <div className="max-w-content mx-auto">
        <FadeUp>
          <span className="text-xs uppercase tracking-[0.25em] text-ink/50 font-semibold">
            Creative Showcase
          </span>
          <h2 className="mt-4 font-display font-extrabold uppercase text-display-2 max-w-3xl">
            Creativity That Stops The Scroll.
          </h2>
        </FadeUp>

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {items.map((item, i) => (
            <FadeUp key={item.id} delay={i * 0.06} className="mb-6 break-inside-avoid">
              <button
                data-cursor="hover"
                onClick={() => setActive(item)}
                className={`group relative w-full overflow-hidden bg-mist block ${
                  item.tall ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-mist to-line transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center text-ink/20 text-[10px] uppercase tracking-widest px-4 text-center">
                  Replace: {item.placeholder}
                </div>
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <Play size={18} className="ml-0.5" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-semibold text-left">{item.label}</p>
                </div>
              </button>
            </FadeUp>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/90 flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full aspect-video bg-mist flex items-center justify-center"
            >
              <p className="text-ink/40 text-sm uppercase tracking-widest px-6 text-center">
                {active.label} — replace with real media at {active.placeholder}
              </p>
              <button
                data-cursor="hover"
                onClick={() => setActive(null)}
                className="absolute -top-12 right-0 text-white flex items-center gap-2 text-sm"
              >
                Close <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
