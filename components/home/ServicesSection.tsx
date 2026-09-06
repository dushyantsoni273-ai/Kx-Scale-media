"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "../FadeUp";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="container-px py-28 md:py-36 border-t border-line bg-mist/40">
      <div className="max-w-content mx-auto">
        <FadeUp>
          <span className="text-xs uppercase tracking-[0.25em] text-ink/50 font-semibold">
            What We Do
          </span>
          <h2 className="mt-4 font-display font-extrabold uppercase text-display-2 max-w-2xl">
            Full-Service Growth, Performance First.
          </h2>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {services.slice(0, 6).map((s, i) => (
            <FadeUp key={s.id} delay={i * 0.05}>
              <Link
                href="/services"
                data-cursor="hover"
                className="group relative block h-full bg-white p-8 min-h-[280px] flex flex-col justify-between overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-ink"
                  initial={{ y: "100%" }}
                  whileHover={{ y: "0%" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="relative z-10">
                  <span className="text-sm font-mono text-ink/40 group-hover:text-white/50 transition-colors duration-500">
                    {s.number}
                  </span>
                  <ArrowUpRight
                    className="absolute top-0 right-0 text-ink/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                    size={20}
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-500">
                    {s.title}
                  </h3>
                  <p className="text-sm text-ink/60 group-hover:text-white/70 transition-colors duration-500 leading-relaxed">
                    {s.shortDescription}
                  </p>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
