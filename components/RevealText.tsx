"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  /**
   * Set true for content that's already visible on page load (e.g. hero
   * headlines above the fold). Scroll-triggered "whileInView" animations
   * only fire on an actual intersection *change*, which is unreliable for
   * elements that are already in view the moment the page mounts — so
   * above-the-fold text should animate immediately instead of waiting on
   * a scroll trigger that may never come.
   */
  immediate?: boolean;
}

const variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (delay: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function RevealText({ children, className, delay = 0, immediate = false }: Props) {
  return (
    <span className={clsx("block overflow-hidden", className)}>
      <motion.span
        className="block"
        initial="hidden"
        custom={delay}
        variants={variants}
        {...(immediate
          ? { animate: "visible" }
          : { whileInView: "visible", viewport: { once: true, amount: 0.4 } })}
      >
        {children}
      </motion.span>
    </span>
  );
}
