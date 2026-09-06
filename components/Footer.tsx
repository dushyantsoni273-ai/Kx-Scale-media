import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Logo from "./Logo";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Performance Marketing",
  "Meta Ads",
  "Google Ads",
  "Lead Generation",
  "Creative Strategy",
  "Video Content",
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-px max-w-content mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Logo light />
            <p className="mt-6 text-white/60 max-w-sm text-sm leading-relaxed">
              KX Scale Media is a performance-driven digital marketing agency
              helping ambitious brands turn attention into measurable growth.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-sm text-white/80 hover:text-white transition-colors" data-cursor="hover">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="text-sm text-white/80">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-6 text-sm text-white/70">
            <a href="mailto:hello@kxscalemedia.com" data-cursor="hover" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={16} /> hello@kxscalemedia.com
            </a>
            <a href="tel:+910000000000" data-cursor="hover" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={16} /> +91 00000 00000
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" data-cursor="hover" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-ink transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" data-cursor="hover" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-ink transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <p className="mt-10 text-xs text-white/40">
          © 2026 KX Scale Media. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
