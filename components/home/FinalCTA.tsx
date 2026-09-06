import RevealText from "../RevealText";
import FadeUp from "../FadeUp";
import MagneticButton from "../MagneticButton";

export default function FinalCTA() {
  return (
    <section className="container-px py-32 md:py-44 border-t border-line relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_#F5F5F5,_transparent_65%)]" />
      <div className="max-w-content mx-auto text-center">
        <h2 className="font-display font-extrabold uppercase text-display-1">
          <RevealText>Ready To Scale?</RevealText>
        </h2>
        <FadeUp delay={0.2}>
          <p className="mt-6 max-w-lg mx-auto text-ink/60 text-lg">
            Let&apos;s build a growth strategy that actually moves your business forward.
          </p>
        </FadeUp>
        <FadeUp delay={0.35} className="mt-10 flex justify-center">
          <MagneticButton href="/contact">Book A Free Strategy Call</MagneticButton>
        </FadeUp>
      </div>
    </section>
  );
}
