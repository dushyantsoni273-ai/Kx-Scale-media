"use client";

import { motion } from "framer-motion";
import FadeUp from "../FadeUp";

/**
 * A full-width, edge-to-edge strip of photos with a zoom-in reveal on scroll
 * and a subtle hover zoom. Replace the `src` values below with real team /
 * client / behind-the-scenes photos — keep the same 5-image layout, or add
 * / remove entries in the array (the row auto-divides evenly).
 */
const photos = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop",
];

export default function TeamStrip() {
  return (
    <section className="border-t border-line py-20">
      <FadeUp className="container-px max-w-content mx-auto mb-10">
        <span className="text-xs uppercase tracking-[0.25em] text-ink/50 font-semibold">
          Our Team
        </span>
        <h2 className="mt-4 font-display font-extrabold uppercase text-display-2 max-w-2xl">
          The People Behind The Work.
        </h2>
      </FadeUp>

      <div className="flex w-full h-[280px] sm:h-[360px] lg:h-[440px] overflow-hidden">
        {photos.map((src, i) => (
          <motion.div
            key={src}
            className="relative flex-1 overflow-hidden"
            initial={{ scale: 1.35, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img
              src={src}
              alt="KX Scale Media team"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
