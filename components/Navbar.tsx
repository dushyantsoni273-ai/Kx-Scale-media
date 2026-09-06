"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "./MagneticButton";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/70 backdrop-blur-xl border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="container-px max-w-content mx-auto flex items-center justify-between h-20">
        <Link href="/" data-cursor="hover" className="flex items-center gap-2">
          <Logo />
        </Link>

        <ul className="hidden lg:flex items-center gap-9 text-sm font-medium tracking-wide">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                data-cursor="hover"
                className="relative group py-2"
              >
                {l.label}
                <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-ink transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <MagneticButton href="/contact" className="!py-3 !px-6 text-xs">
            Let&apos;s Talk
          </MagneticButton>
        </div>

        <button
          data-cursor="hover"
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-b border-line overflow-hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg font-semibold border-b border-line last:border-none"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <MagneticButton href="/contact" onClick={() => setOpen(false)} className="w-full">
                  Let&apos;s Talk
                </MagneticButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
