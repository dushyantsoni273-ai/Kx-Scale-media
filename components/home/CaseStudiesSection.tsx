"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "../FadeUp";
import AnimatedCounter from "../AnimatedCounter";
import { caseStudies } from "@/data/caseStudies";

function parseMetric(value: string) {
  const match = value.match(/[\d.]+/);
  const num = match ? parseFloat(match[0]) : 0;
  const prefix = value.split(match?.[0] ?? "")[0] || "";
  const suffix = value.split(match?.[0] ?? "").slice(1).join("") || "";
  return { num, prefix, suffix };
}

export default function CaseStudiesSection() {
  return (
    <section className="container-px py-28 md:py-36 border-t border-line bg-ink text-white">
      <div className="max-w-content mx-auto">
        <FadeUp>
          <span className="text-xs uppercase tracking-[0.25em] text-white/50 font-semibold">
            Case Studies
          </span>
          <h2 className="mt-4 font-display font-extrabold uppercase text-display-2 max-w-3xl">
            Results, Not Just Reports.
          </h2>
        </FadeUp>

        <div className="mt-16 space-y-px bg-white/10">
          {caseStudies.map((cs, i) => (
            <FadeUp key={cs.slug} delay={i * 0.08}>
              <Link
                href={`/case-studies/${cs.slug}`}
                data-cursor="hover"
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 bg-ink hover:bg-white/[0.03] transition-colors duration-500 py-10"
              >
                <div className="lg:col-span-4">
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-2">{cs.industry}</p>
                  <h3 className="text-3xl font-bold flex items-center gap-2">
                    {cs.client}
                    <ArrowUpRight
                      size={22}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </h3>
                  <p className="mt-2 text-sm text-white/50">{cs.services.join(" · ")}</p>
                </div>

                <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {cs.metrics.map((m) => {
                    const { num, prefix, suffix } = parseMetric(m.value);
                    const decimals = num % 1 !== 0 ? 1 : 0;
                    return (
                      <div key={m.label}>
                        <AnimatedCounter
                          value={num}
                          prefix={prefix}
                          suffix={suffix}
                          decimals={decimals}
                          className="text-3xl sm:text-4xl font-extrabold font-display"
                        />
                        <p className="mt-1 text-xs text-white/50 uppercase tracking-wide">{m.label}</p>
                      </div>
                    );
                  })}
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
