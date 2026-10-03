"use client";

import { motion } from "framer-motion";

const nodes = [
  { cx: 60, cy: 50, r: 26, label: "CREATIVE" },
  { cx: 150, cy: 150, r: 36, label: "DATA" },
  { cx: 220, cy: 250, r: 26, label: "RESULTS" },
];

export default function TrustVisual() {
  return (
    <div className="relative w-full max-w-[320px] aspect-[14/15] mx-auto lg:mx-0">
      {/* Soft ambient glow behind the diagram, for a more premium feel */}
      <div className="absolute inset-0 m-auto w-[80%] h-[80%] rounded-full bg-ink/[0.04] blur-3xl" />

      <svg viewBox="0 0 280 300" className="relative w-full h-full">
        {/* Slow ambient dashed ring */}
        <motion.circle
          cx={140}
          cy={150}
          r={132}
          fill="none"
          className="stroke-line"
          strokeWidth={1}
          strokeDasharray="2 8"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "140px 150px" }}
        />

        {/* Connecting path — draws itself in once scrolled into view */}
        <motion.path
          d="M 60 50 C 146 50, 56 150, 150 150 C 244 150, 134 250, 220 250"
          fill="none"
          className="stroke-line"
          strokeWidth={1.5}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {nodes.map((n, i) => (
          <g key={n.label}>
            {/* Gentle breathing pulse ring, so each node feels alive */}
            <motion.circle
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill="none"
              className="stroke-ink"
              strokeWidth={1}
              initial={{ opacity: 0 }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.35, 0, 0.35] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
              style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
            />
            <motion.circle
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill="#FFFFFF"
              className="stroke-ink"
              strokeWidth={1.5}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
            />
            <text
              x={n.cx}
              y={n.cy + n.r + 18}
              textAnchor="middle"
              fontSize={9}
              letterSpacing={1.5}
              fontWeight={700}
              className="fill-ink/40"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
