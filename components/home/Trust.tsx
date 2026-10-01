import RevealText from "../RevealText";
import FadeUp from "../FadeUp";
import TrustVisual from "./TrustVisual";

export default function Trust() {
  return (
    <section className="container-px py-28 md:py-36 border-t border-line">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <FadeUp className="lg:col-span-4 order-2 lg:order-1">
          <TrustVisual />
        </FadeUp>

        <div className="lg:col-span-8 order-1 lg:order-2">
          <h2 className="font-display font-extrabold uppercase text-display-2 text-balance">
            <RevealText>Creative Thinking.</RevealText>
            <RevealText delay={0.1}>Data-Driven Execution.</RevealText>
            <RevealText delay={0.2}>Real Results.</RevealText>
          </h2>
          <FadeUp delay={0.3} className="mt-8 max-w-md">
            <p className="text-ink/60 leading-relaxed">
              We combine creative strategy, performance marketing, data and
              content into a single growth engine — built to help businesses
              scale with clarity, not guesswork.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
