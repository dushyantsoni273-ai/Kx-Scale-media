import FadeUp from "../FadeUp";

const steps = [
  { n: "01", title: "Understand", desc: "We understand your business, audience and growth goals." },
  { n: "02", title: "Strategize", desc: "We build a performance-focused marketing strategy." },
  { n: "03", title: "Create", desc: "We develop creatives designed to capture attention." },
  { n: "04", title: "Launch", desc: "We launch campaigns with proper tracking." },
  { n: "05", title: "Optimize", desc: "We continuously test and optimize campaigns." },
  { n: "06", title: "Scale", desc: "We scale what works." },
];

export default function Process() {
  return (
    <section className="container-px py-28 md:py-36 border-t border-line bg-mist/40">
      <div className="max-w-content mx-auto">
        <FadeUp>
          <span className="text-xs uppercase tracking-[0.25em] text-ink/50 font-semibold">
            How We Scale
          </span>
          <h2 className="mt-4 font-display font-extrabold uppercase text-display-2 max-w-2xl">
            A Clear Path From Zero To Scale.
          </h2>
        </FadeUp>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-line" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6">
            {steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 0.08} className="relative">
                <div className="w-3 h-3 rounded-full bg-ink mb-6 relative z-10" />
                <p className="text-xs font-mono text-ink/40 mb-2">{s.n}</p>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{s.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
