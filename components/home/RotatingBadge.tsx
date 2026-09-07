"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * A slowly rotating circular text badge, used to fill hero whitespace
 * with a premium "trust seal" feel rather than a static image.
 * Edit the `label` text below to change what circles around the badge.
 */
export default function RotatingBadge({ label = "TRUSTED BY 40+ BRANDS  •  PERFORMANCE MARKETING  •  " }: { label?: string }) {
  return (
    <div className="relative w-[180px] h-[180px] flex items-center justify-center">
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path id="badge-circle-path" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" fill="none" />
        </defs>
        <text fontSize="9.5" letterSpacing="2" fill="#111111" fontWeight={700}>
          <textPath href="#badge-circle-path" startOffset="0%">
            {label}
          </textPath>
        </text>
      </motion.svg>

      {/* Static center icon — doesn't rotate with the text ring */}
      <div className="w-14 h-14 rounded-full bg-ink flex items-center justify-center">
        <ArrowUpRight className="text-white" size={22} />
      </div>
    </div>
  );
}
