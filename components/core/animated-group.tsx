"use client";

import { motion, Variants } from "framer-motion";
import React, { ReactNode } from "react";

export type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  as?: keyof JSX.IntrinsicElements;
  asChild?: keyof JSX.IntrinsicElements;
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/**
 * Wraps a group of children (images, cards, list items) and staggers them
 * into view as the group scrolls into the viewport, using Framer Motion
 * variants. Pass custom `variants.container` / `variants.item` to control
 * the stagger timing and per-item entrance animation (fade, slide, blur, etc).
 */
export function AnimatedGroup({
  children,
  className,
  variants,
  as = "div",
  asChild = "div",
}: AnimatedGroupProps) {
  const containerVariants = variants?.container ?? defaultContainerVariants;
  const itemVariants = variants?.item ?? defaultItemVariants;

  const MotionComponent = motion[as as "div"];
  const MotionChild = motion[asChild as "div"];

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <MotionChild key={index} variants={itemVariants}>
          {child}
        </MotionChild>
      ))}
    </MotionComponent>
  );
}
