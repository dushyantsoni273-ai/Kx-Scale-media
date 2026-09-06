"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const budgets = [
  "Under ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000+",
];

const inputClass =
  "w-full bg-transparent border-b border-line focus:border-ink outline-none py-3 text-base placeholder:text-ink/30 transition-colors";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Wire this up to your CRM / email service / API route.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-4 py-12"
      >
        <CheckCircle2 size={40} />
        <h3 className="text-2xl font-bold">Thanks — we&apos;ve got it.</h3>
        <p className="text-ink/60 max-w-md">
          Someone from our team will reach out within 24 hours to schedule
          your free strategy call.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label className="block text-xs uppercase tracking-widest text-ink/40 mb-2">Name</label>
          <input required type="text" placeholder="Your full name" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-ink/40 mb-2">Business Name</label>
          <input required type="text" placeholder="Your company" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-ink/40 mb-2">Email</label>
          <input required type="email" placeholder="you@company.com" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-ink/40 mb-2">Phone Number</label>
          <input required type="tel" placeholder="+91 00000 00000" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-ink/40 mb-2">Website</label>
          <input type="url" placeholder="https://yourbrand.com" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-ink/40 mb-2">
            Monthly Marketing Budget
          </label>
          <select required defaultValue="" className={`${inputClass} appearance-none`}>
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-ink/40 mb-2">Message</label>
        <textarea
          rows={4}
          placeholder="Tell us a little about your business and goals..."
          className={inputClass}
        />
      </div>

      <MagneticButton type="submit">Let&apos;s Scale</MagneticButton>
    </form>
  );
}
