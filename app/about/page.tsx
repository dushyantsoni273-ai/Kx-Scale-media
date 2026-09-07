import type { Metadata } from "next";
import RevealText from "@/components/RevealText";
import FadeUp from "@/components/FadeUp";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "About | KX Scale Media",
  description: "We build growth systems — the KX Scale Media philosophy.",
};

const beliefs = [
  {
    title: "Performance Over Vanity",
    desc: "Impressions and likes mean nothing without measurable business impact.",
  },
  {
    title: "Creative Is Strategy",
    desc: "The best-performing ad is a creative decision as much as a media decision.",
  },
  {
    title: "Transparency Builds Trust",
    desc: "You should always understand exactly what we're doing and why it matters.",
  },
  {
    title: "Systems Scale, Effort Doesn't",
    desc: "We build repeatable growth systems, not one-off campaign wins.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-40 pb-28">
      <section className="container-px max-w-content mx-auto">
        <h1 className="font-display font-extrabold uppercase text-display-1 max-w-4xl">
          <RevealText immediate>We Build</RevealText>
          <RevealText immediate delay={0.12}>Growth Systems.</RevealText>
        </h1>
      </section>

      <section className="container-px max-w-content mx-auto mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <FadeUp className="lg:col-span-4">
          <span className="text-xs uppercase tracking-[0.25em] text-ink/50 font-semibold">
            Who We Are
          </span>
        </FadeUp>
        <FadeUp delay={0.1} className="lg:col-span-8">
          <p className="text-2xl sm:text-3xl font-medium leading-snug text-balance">
            KX Scale Media is a performance-driven digital marketing agency
            built for ambitious brands that want more than vanity metrics —
            we exist to turn attention into measurable, repeatable growth.
          </p>
        </FadeUp>
      </section>

      <section className="container-px max-w-content mx-auto mt-28 border-t border-line pt-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <FadeUp className="lg:col-span-4">
          <span className="text-xs uppercase tracking-[0.25em] text-ink/50 font-semibold">
            What We Believe
          </span>
        </FadeUp>
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-10">
          {beliefs.map((b, i) => (
            <FadeUp key={b.title} delay={i * 0.08}>
              <h3 className="text-xl font-bold mb-2">{b.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{b.desc}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="container-px max-w-content mx-auto mt-28 border-t border-line pt-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <FadeUp className="lg:col-span-4">
          <span className="text-xs uppercase tracking-[0.25em] text-ink/50 font-semibold">
            Our Approach
          </span>
        </FadeUp>
        <FadeUp delay={0.1} className="lg:col-span-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Performance + Creativity + Data.
          </h2>
          <p className="text-ink/60 leading-relaxed max-w-2xl">
            Every campaign we run sits at the intersection of three
            disciplines: creative that earns attention, media buying that
            performs efficiently, and data that tells us exactly what to do
            next. None of these work in isolation — that's the entire premise
            of how we operate.
          </p>
        </FadeUp>
      </section>

      <section className="container-px max-w-content mx-auto mt-28 border-t border-line pt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <FadeUp className="lg:col-span-4">
          <span className="text-xs uppercase tracking-[0.25em] text-ink/50 font-semibold">
            Mission
          </span>
        </FadeUp>
        <FadeUp delay={0.1} className="lg:col-span-8">
          <p className="text-3xl sm:text-4xl font-bold leading-snug text-balance">
            Our goal is simple: help ambitious businesses grow through
            smarter digital marketing.
          </p>
          <div className="mt-10">
            <MagneticButton href="/contact">Let&apos;s Scale Your Business</MagneticButton>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
