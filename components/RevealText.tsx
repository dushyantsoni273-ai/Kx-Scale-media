"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

const variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (delay: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function RevealText({ children, className, delay = 0, as = "div" }: Props) {
  const Comp = motion[as as "div"];
  return (
    <span className={clsx("block overflow-hidden", className)}>
      <Comp
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        custom={delay}
        variants={variants}
      >
        {children}
      </Comp>
    </span>
  );
}
