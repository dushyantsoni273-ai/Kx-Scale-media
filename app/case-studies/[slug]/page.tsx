import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RevealText from "@/components/RevealText";
import FadeUp from "@/components/FadeUp";
import AnimatedCounter from "@/components/AnimatedCounter";
import MagneticButton from "@/components/MagneticButton";
import { caseStudies } from "@/data/caseStudies";

function parseMetric(value: string) {
  const match = value.match(/[\d.]+/);
  const num = match ? parseFloat(match[0]) : 0;
  const prefix = value.split(match?.[0] ?? "")[0] || "";
  const suffix = value.split(match?.[0] ?? "").slice(1).join("") || "";
  return { num, prefix, suffix, decimals: num % 1 !== 0 ? 1 : 0 };
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) return { title: "Case Study | KX Scale Media" };
  return {
    title: `${cs.client} | KX Scale Media Case Study`,
    description: cs.challenge,
  };
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) return notFound();

  return (
    <div className="pt-40 pb-28">
      {/* Hero */}
      <section className="container-px max-w-content mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-ink/50 font-semibold mb-4">
          Case Study — {cs.industry}
        </p>
        <h1 className="font-display font-extrabold uppercase text-display-1 max-w-4xl">
          <RevealText>{cs.client}</RevealText>
        </h1>
        <FadeUp delay={0.2} className="mt-8 flex flex-wrap gap-3">
          {cs.services.map((s) => (
            <span key={s} className="text-xs uppercase tracking-wide border border-line rounded-full px-4 py-2">
              {s}
            </span>
          ))}
        </FadeUp>
      </section>

      <FadeUp className="container-px max-w-content mx-auto mt-16">
        <div className="aspect-[16/7] bg-mist flex items-center justify-center text-ink/20 text-xs uppercase tracking-widest">
          Replace hero media: {cs.heroImage}
        </div>
      </FadeUp>

      {/* Overview grid */}
      <section className="container-px max-w-content mx-auto mt-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <FadeUp>
          <h3 className="text-xs uppercase tracking-widest text-ink/40 mb-4">The Challenge</h3>
          <p className="text-ink/70 leading-relaxed">{cs.challenge}</p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h3 className="text-xs uppercase tracking-widest text-ink/40 mb-4">Our Strategy</h3>
          <p className="text-ink/70 leading-relaxed">{cs.strategy}</p>
        </FadeUp>
        <FadeUp delay={0.16}>
          <h3 className="text-xs uppercase tracking-widest text-ink/40 mb-4">Creative Approach</h3>
          <p className="text-ink/70 leading-relaxed">{cs.creativeApproach}</p>
        </FadeUp>
      </section>

      {/* Campaign setup */}
      <section className="container-px max-w-content mx-auto mt-24 border-t border-line pt-16">
        <FadeUp>
          <h3 className="text-xs uppercase tracking-widest text-ink/40 mb-6">Campaign Setup</h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {cs.campaignSetup.map((item) => (
              <li key={item} className="flex gap-3 text-ink/70">
                <span className="mt-2 w-1 h-1 rounded-full bg-ink shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </FadeUp>
      </section>

      {/* Metrics */}
      <section className="container-px max-w-content mx-auto mt-24 border-t border-line pt-16">
        <FadeUp>
          <h3 className="text-xs uppercase tracking-widest text-ink/40 mb-8">Results</h3>
        </FadeUp>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          {cs.metrics.map((m, i) => {
            const { num, prefix, suffix, decimals } = parseMetric(m.value);
            return (
              <FadeUp key={m.label} delay={i * 0.08}>
                <AnimatedCounter
                  value={num}
                  prefix={prefix}
                  suffix={suffix}
                  decimals={decimals}
                  className="font-display font-extrabold text-4xl sm:text-5xl block"
                />
                <p className="mt-2 text-xs uppercase tracking-wide text-ink/50">{m.label}</p>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* Gallery */}
      <section className="container-px max-w-content mx-auto mt-24 border-t border-line pt-16">
        <FadeUp>
          <h3 className="text-xs uppercase tracking-widest text-ink/40 mb-8">Gallery</h3>
        </FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cs.gallery.map((g, i) => (
            <FadeUp key={g} delay={i * 0.08}>
              <div className="aspect-square bg-mist flex items-center justify-center text-ink/20 text-[10px] uppercase tracking-widest px-4 text-center">
                Replace: {g}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Outcome + CTA */}
      <section className="container-px max-w-content mx-auto mt-24 border-t border-line pt-16">
        <FadeUp className="max-w-2xl">
          <h3 className="text-xs uppercase tracking-widest text-ink/40 mb-6">Final Outcome</h3>
          <p className="text-2xl font-medium leading-snug text-balance">{cs.finalOutcome}</p>
          <div className="mt-10">
            <MagneticButton href="/contact">Get A Free Strategy Call</MagneticButton>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
