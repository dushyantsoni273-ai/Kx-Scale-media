"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

interface Props {
  href?: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function MagneticButton({
  href,
  children,
  variant = "solid",
  className,
  onClick,
  type = "button",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.3, y: y * 0.3 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap";
  const styles =
    variant === "solid"
      ? "bg-ink text-white hover:bg-black"
      : "bg-transparent text-ink border border-ink hover:bg-ink hover:text-white";

  const content = (
    <motion.div
      ref={ref}
      data-cursor="hover"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
      className={clsx(base, styles, className)}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
