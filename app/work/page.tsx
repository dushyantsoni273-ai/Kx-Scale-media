import type { Metadata } from "next";
import RevealText from "@/components/RevealText";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Our Work | KX Scale Media",
  description: "Client work, ad creatives, and campaign results from KX Scale Media.",
};

export default function WorkPage() {
  return (
    <div className="pt-40 pb-28">
      <section className="container-px max-w-content mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-ink/50 font-semibold">
          Our Work
        </span>
        <h1 className="mt-4 font-display font-extrabold uppercase text-display-1 max-w-4xl">
          <RevealText>Work That Drives</RevealText>
          <RevealText delay={0.12}>Results.</RevealText>
        </h1>
      </section>

      <section className="container-px max-w-content mx-auto">
        <PortfolioGrid />
      </section>
    </div>
  );
}
