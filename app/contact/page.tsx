import type { Metadata } from "next";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import RevealText from "@/components/RevealText";
import FadeUp from "@/components/FadeUp";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | KX Scale Media",
  description: "Get a free strategy call with KX Scale Media.",
};

export default function ContactPage() {
  return (
    <div className="pt-40 pb-28">
      <section className="container-px max-w-content mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] text-ink/50 font-semibold">
          Contact
        </span>
        <h1 className="mt-4 font-display font-extrabold uppercase text-display-1 max-w-4xl">
          <RevealText immediate>Let&apos;s Talk</RevealText>
          <RevealText immediate delay={0.12}>Growth.</RevealText>
        </h1>
      </section>

      <section className="container-px max-w-content mx-auto mt-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <FadeUp className="lg:col-span-5">
          <p className="text-ink/60 leading-relaxed max-w-sm">
            Tell us about your business and goals. We&apos;ll get back to you
            within 24 hours to schedule your free strategy call.
          </p>

          <div className="mt-12 space-y-5">
            <a href="mailto:kxscalemedia@gmail.com" data-cursor="hover" className="flex items-center gap-3 text-sm font-medium hover:text-ink/60 transition-colors">
              <Mail size={18} /> kxscalemedia@gmail.com
            </a>
            <a href="tel:+918729048744" data-cursor="hover" className="flex items-center gap-3 text-sm font-medium hover:text-ink/60 transition-colors">
              <Phone size={18} /> +91 87290 48744
            </a>
            <a
              href="https://www.instagram.com/kxscalemedia/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="flex items-center gap-3 text-sm font-medium hover:text-ink/60 transition-colors"
            >
              <Instagram size={18} /> @kxscalemedia
            </a>
            <a
              href="https://www.facebook.com/kxscalemedia/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="flex items-center gap-3 text-sm font-medium hover:text-ink/60 transition-colors"
            >
              <Facebook size={18} /> KX Scale Media
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="lg:col-span-7">
          <ContactForm />
        </FadeUp>
      </section>
    </div>
  );
}
