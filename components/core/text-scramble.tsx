"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export type TextScrambleProps = {
  children: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  duration?: number;
  speed?: number;
  characterSet?: string;
};

const DEFAULT_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

/**
 * Scrambles through random characters before settling on the final text,
 * triggered once the element scrolls into view.
 */
export function TextScramble({
  children,
  className,
  as = "span",
  duration = 0.8,
  speed = 0.04,
  characterSet = DEFAULT_CHARS,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(children);
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const text = children;
    const totalFrames = Math.max(1, Math.round(duration / speed));
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const revealCount = Math.floor(progress * text.length);

      const next = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealCount) return char;
          return characterSet[Math.floor(Math.random() * characterSet.length)];
        })
        .join("");

      setDisplayText(next);

      if (frame >= totalFrames) {
        setDisplayText(text);
        clearInterval(interval);
      }
    }, speed * 1000);

    return () => clearInterval(interval);
  }, [isInView, children, duration, speed, characterSet]);

  const Component = as as any;

  return (
    <Component ref={containerRef} className={className}>
      {displayText}
    </Component>
  );
}
