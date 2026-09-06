"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ring = { x: 0, y: 0 };
    const dot = { x: 0, y: 0 };
    let raf: number;

    const move = (e: MouseEvent) => {
      dot.x = e.clientX;
      dot.y = e.clientY;
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor='hover']")) setHovered(true);
    };
    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor='hover']")) setHovered(false);
    };

    const tick = () => {
      ring.x += (dot.x - ring.x) * 0.18;
      ring.y += (dot.y - ring.y) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate(${dot.x}px, ${dot.y}px) translate(-50%,-50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, [visible]);

  return (
    <div className="hidden md:block" style={{ opacity: visible ? 1 : 0 }}>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${hovered ? "hovered" : ""}`} />
    </div>
  );
}
