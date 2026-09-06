import FadeUp from "../FadeUp";
import AnimatedCounter from "../AnimatedCounter";
import { stats } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="container-px py-28 md:py-36 border-t border-line bg-ink text-white">
      <div className="max-w-content mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
        {stats.map((s, i) => (
          <FadeUp key={s.label} delay={i * 0.08}>
            <AnimatedCounter
              value={s.value}
              prefix={s.prefix}
              suffix={s.suffix}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl block"
            />
            <p className="mt-3 text-xs sm:text-sm uppercase tracking-wide text-white/50">{s.label}</p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
