"use client";

import { motion, Variants } from "framer-motion";

export type TextEffectPreset = "fade" | "blur" | "fade-in-blur" | "scale" | "slide";

export type TextEffectProps = {
  children: string;
  per?: "word" | "char" | "line";
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  preset?: TextEffectPreset;
  delay?: number;
  /** Higher = faster overall reveal (shorter gap between segments). */
  speedReveal?: number;
  /** Higher = faster per-segment animation (shorter duration each). */
  speedSegment?: number;
  once?: boolean;
  /**
   * Set true for content already visible on page load (e.g. hero labels
   * above the fold). Scroll-triggered "whileInView" only fires reliably on
   * an actual intersection *change*, which can be unreliable for elements
   * already in view the moment the page mounts.
   */
  immediate?: boolean;
};

const presetVariants: Record<TextEffectPreset, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(12px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  "fade-in-blur": {
    hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  },
  slide: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
};

/**
 * Splits text into words/characters/lines and reveals each segment in a
 * staggered sequence as it scrolls into view. `speedReveal` controls the
 * gap between segments; `speedSegment` controls each segment's own duration.
 */
export function TextEffect({
  children,
  per = "word",
  as = "p",
  className,
  preset = "fade",
  delay = 0,
  speedReveal = 1,
  speedSegment = 1,
  once = true,
  immediate = false,
}: TextEffectProps) {
  const segments =
    per === "line"
      ? children.split("\n")
      : per === "word"
      ? children.split(/(\s+)/)
      : children.split("");

  const itemVariants = presetVariants[preset];
  const itemDuration = 0.4 / speedSegment;
  const stagger = 0.06 / speedReveal;

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const Container = motion[as as "p"];

  return (
    <Container
      initial="hidden"
      variants={containerVariants}
      className={className}
      {...(immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once, amount: 0.5 } })}
    >
      {segments.map((seg, i) => (
        <motion.span
          key={i}
          variants={itemVariants}
          transition={{ duration: itemDuration, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "inline-block" }}
        >
          {seg === " " ? "\u00A0" : seg}
        </motion.span>
      ))}
    </Container>
  );
}
