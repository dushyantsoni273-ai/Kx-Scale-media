import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "../FadeUp";
import PortfolioGrid from "../PortfolioGrid";

export default function WorkSection() {
  return (
    <section className="container-px py-28 md:py-36 border-t border-line">
      <div className="max-w-content mx-auto">
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-ink/50 font-semibold">
              Portfolio
            </span>
            <h2 className="mt-4 font-display font-extrabold uppercase text-display-2">
              Work That Drives Results.
            </h2>
          </div>
          <Link
            href="/work"
            data-cursor="hover"
            className="flex items-center gap-2 text-sm font-semibold underline underline-offset-4 whitespace-nowrap"
          >
            View Full Portfolio <ArrowRight size={16} />
          </Link>
        </FadeUp>

        <PortfolioGrid limit={6} />
      </div>
    </section>
  );
}
