"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import clsx from "clsx";

export type InfiniteSliderProps = {
  children: ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

/**
 * A continuously auto-scrolling strip of items (logos, images, tags) that
 * loops seamlessly. Pass `speedOnHover` to slow down (or speed up) while
 * the user's cursor is over it. `speed` is in pixels per second.
 */
export function InfiniteSlider({
  children,
  gap = 16,
  speed = 50,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(0);
  const translation = useMotionValue(0);
  const isHorizontal = direction === "horizontal";

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => setSize(isHorizontal ? el.offsetWidth : el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isHorizontal, children]);

  useEffect(() => {
    if (!size) return;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;
    let controls: ReturnType<typeof animate>;

    if (isTransitioning) {
      const remaining = Math.abs(translation.get() - to);
      const duration = remaining / currentSpeed;
      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((k) => k + 1);
        },
      });
    } else {
      const duration = Math.abs(to - from) / currentSpeed;
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration,
        repeat: Infinity,
        repeatType: "loop",
        onRepeat: () => translation.set(from),
      });
    }

    return () => controls?.stop();
  }, [key, size, gap, currentSpeed, isTransitioning, reverse, translation]);

  const hoverProps = speedOnHover
    ? {
        onMouseEnter: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
        onMouseLeave: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
      }
    : {};

  return (
    <div className={clsx("overflow-hidden", className)} {...hoverProps}>
      <motion.div
        ref={containerRef}
        className="flex w-max"
        style={{
          x: isHorizontal ? translation : undefined,
          y: !isHorizontal ? translation : undefined,
          gap: `${gap}px`,
          flexDirection: isHorizontal ? "row" : "column",
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
