import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RevealText from "@/components/RevealText";
import FadeUp from "@/components/FadeUp";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies | KX Scale Media",
  description: "Detailed campaign case studies and performance marketing results.",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-40 pb-28">
      <section className="container-px max-w-content mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-ink/50 font-semibold">
          Case Studies
        </span>
        <h1 className="mt-4 font-display font-extrabold uppercase text-display-1 max-w-4xl">
          <RevealText immediate>Results, Not</RevealText>
          <RevealText immediate delay={0.12}>Just Reports.</RevealText>
        </h1>
      </section>

      <section className="container-px max-w-content mx-auto divide-y divide-line border-t border-line">
        {caseStudies.map((cs, i) => (
          <FadeUp key={cs.slug} delay={Math.min(i * 0.06, 0.3)}>
            <Link
              href={`/case-studies/${cs.slug}`}
              data-cursor="hover"
              className="group grid grid-cols-1 lg:grid-cols-12 gap-6 py-12 items-center"
            >
              <div className="lg:col-span-5">
                <p className="text-xs uppercase tracking-widest text-ink/40 mb-2">{cs.industry}</p>
                <h2 className="text-3xl font-bold flex items-center gap-2">
                  {cs.client}
                  <ArrowUpRight
                    size={22}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </h2>
                <p className="mt-2 text-sm text-ink/50">{cs.services.join(" · ")}</p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-2xl sm:text-3xl font-extrabold font-display">{m.value}</p>
                    <p className="mt-1 text-xs text-ink/50 uppercase tracking-wide">{m.label}</p>
                  </div>
                ))}
              </div>
            </Link>
          </FadeUp>
        ))}
      </section>
    </div>
  );
}
