"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const WEB3FORMS_ACCESS_KEY = "c05431be-395a-4b21-a9e6-9415317c2f53";

const budgets = [
  "Under ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000+",
];

const inputClass =
  "w-full bg-transparent border-b border-line focus:border-ink outline-none py-3 text-base placeholder:text-ink/30 transition-colors";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Lead — KX Scale Media Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
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
      {/* Honeypot spam-protection field — invisible to real visitors */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label className="block text-xs uppercase tracking-widest text-ink/40 mb-2">Name</label>
          <input required name="name" type="text" placeholder="Your full name" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-ink/40 mb-2">Business Name</label>
          <input required name="business_name" type="text" placeholder="Your company" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-ink/40 mb-2">Email</label>
          <input required name="email" type="email" placeholder="you@company.com" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-ink/40 mb-2">Phone Number</label>
          <input required name="phone" type="tel" placeholder="+91 00000 00000" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-ink/40 mb-2">Website</label>
          <input name="website" type="url" placeholder="https://yourbrand.com" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-ink/40 mb-2">
            Monthly Marketing Budget
          </label>
          <select required name="budget" defaultValue="" className={`${inputClass} appearance-none`}>
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
          name="message"
          rows={4}
          placeholder="Tell us a little about your business and goals..."
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again, or email us directly at kxscalemedia@gmail.com.
        </p>
      )}

      <MagneticButton type="submit">
        {status === "loading" ? "Sending..." : "Let's Scale"}
      </MagneticButton>
    </form>
  );
}
