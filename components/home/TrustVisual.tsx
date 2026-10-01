"use client";

import { motion } from "framer-motion";

// Three nodes represent the three phrases in the heading next to this visual
// (Creative Thinking -> Data-Driven Execution -> Real Results).
const nodes = [
  { cx: 64, cy: 46, r: 28 },
  { cx: 146, cy: 148, r: 36 },
  { cx: 224, cy: 244, r: 28 },
];

export default function TrustVisual() {
  return (
    <div className="relative w-full max-w-[300px] aspect-square mx-auto lg:mx-0">
      <svg viewBox="0 0 280 280" className="w-full h-full overflow-visible">
        {/* Slow ambient dashed ring */}
        <motion.circle
          cx="140"
          cy="140"
          r="132"
          fill="none"
          stroke="#EAEAEA"
          strokeWidth={1}
          strokeDasharray="2 7"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "140px 140px" }}
        />

        {/* Connecting path that draws itself in once the section scrolls into view */}
        <motion.path
          d="M 64 46 C 150 46, 60 148, 146 148 C 232 148, 138 244, 224 244"
          fill="none"
          stroke="#EAEAEA"
          strokeWidth={2}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />

        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="none"
            stroke="#111111"
            strokeWidth={1.5}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
          />
        ))}

        {/* A small dot continuously drifting between the three nodes, so the
            visual keeps a bit of life after the initial reveal finishes */}
        <motion.circle
          r={4}
          fill="#111111"
          animate={{ cx: [64, 146, 224, 64], cy: [46, 148, 244, 46] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
