import FadeUp from "../FadeUp";
import { TrendingUp, Layers, Eye, RefreshCw } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Performance First",
    desc: "We focus on measurable business outcomes.",
  },
  {
    icon: Layers,
    title: "Creative + Data",
    desc: "We combine strong creative thinking with performance data.",
  },
  {
    icon: Eye,
    title: "Transparent Strategy",
    desc: "You understand what we are doing and why.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Optimization",
    desc: "Campaigns are constantly tested and improved.",
  },
];

export default function WhyUs() {
  return (
    <section className="container-px py-28 md:py-36 border-t border-line">
      <div className="max-w-content mx-auto">
        <FadeUp>
          <h2 className="font-display font-extrabold uppercase text-display-2 max-w-3xl text-balance">
            Built For Businesses That Want To Grow.
          </h2>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f, i) => (
            <FadeUp key={f.title} delay={i * 0.08}>
              <f.icon size={28} strokeWidth={1.5} />
              <h3 className="mt-6 text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">{f.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
