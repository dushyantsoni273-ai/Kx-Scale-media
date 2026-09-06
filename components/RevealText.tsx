"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (delay: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

/**
 * Text reveal-on-scroll wrapper. Uses <span> for both the outer mask and the
 * animated inner element (rather than <div>) so this stays valid when nested
 * inside heading tags like <h1>/<h2> — nesting a block-level <div> inside a
 * <span> inside a heading is invalid HTML and can cause the browser to
 * silently reparent the DOM during parsing, which breaks React hydration
 * for that subtree (the animation never runs, with no visible console error).
 */
export default function RevealText({ children, className, delay = 0 }: Props) {
  return (
    <span className={clsx("block overflow-hidden", className)}>
      <motion.span
        className="block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        custom={delay}
        variants={variants}
      >
        {children}
      </motion.span>
    </span>
  );
}
