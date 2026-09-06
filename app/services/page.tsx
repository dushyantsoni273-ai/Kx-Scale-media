import type { Metadata } from "next";
import RevealText from "@/components/RevealText";
import FadeUp from "@/components/FadeUp";
import MagneticButton from "@/components/MagneticButton";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | KX Scale Media",
  description: "Performance marketing, creative strategy, video, and growth services.",
};

export default function ServicesPage() {
  return (
    <div className="pt-40 pb-28">
      <section className="container-px max-w-content mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] text-ink/50 font-semibold">
          Services
        </span>
        <h1 className="mt-4 font-display font-extrabold uppercase text-display-1 max-w-4xl">
          <RevealText>Everything You Need</RevealText>
          <RevealText delay={0.12}>To Scale.</RevealText>
        </h1>
      </section>

      <section className="container-px max-w-content mx-auto mt-24 divide-y divide-line border-t border-line">
        {services.map((s, i) => (
          <FadeUp key={s.id} delay={Math.min(i * 0.04, 0.3)}>
            <div id={s.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-14 scroll-mt-32">
              <div className="lg:col-span-4">
                <span className="text-sm font-mono text-ink/40">{s.number}</span>
                <h2 className="mt-2 text-3xl font-bold">{s.title}</h2>
                <p className="mt-3 text-ink/60 leading-relaxed">{s.whatItIs}</p>
                <div className="mt-6">
                  <MagneticButton href="/contact" variant="outline" className="!py-3 !px-6 text-xs">
                    Get Started
                  </MagneticButton>
                </div>
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-xs uppercase tracking-widest text-ink/40 mb-4">What We Do</h3>
                <ul className="space-y-3">
                  {s.whatWeDo.map((item) => (
                    <li key={item} className="text-sm text-ink/70 flex gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-ink shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-xs uppercase tracking-widest text-ink/40 mb-4">Who It&apos;s For</h3>
                <p className="text-sm text-ink/70 leading-relaxed mb-6">{s.whoItIsFor}</p>
                <h3 className="text-xs uppercase tracking-widest text-ink/40 mb-4">Expected Outcomes</h3>
                <ul className="space-y-3">
                  {s.expectedOutcomes.map((item) => (
                    <li key={item} className="text-sm text-ink/70 flex gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-ink shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        ))}
      </section>
    </div>
  );
}
