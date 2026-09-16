"use client";

import { motion } from "framer-motion";

/**
 * A soft, slow-moving glow effect made of blurred monochrome blobs —
 * a subtle, light-mode take on the "animated shader background" trend,
 * kept low-opacity so it reads as premium ambience rather than noise.
 * Place inside a `relative overflow-hidden` parent, behind your content.
 */
export default function AnimatedGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute rounded-full bg-ink/[0.05] blur-3xl"
        style={{ width: "50vw", height: "50vw", maxWidth: 700, maxHeight: 700, top: "-12%", left: "-8%" }}
        animate={{ x: [0, 60, -30, 0], y: [0, 40, -20, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full bg-ink/[0.045] blur-3xl"
        style={{ width: "40vw", height: "40vw", maxWidth: 560, maxHeight: 560, top: "18%", right: "-14%" }}
        animate={{ x: [0, -40, 30, 0], y: [0, -30, 20, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute rounded-full bg-ink/[0.035] blur-3xl"
        style={{ width: "36vw", height: "36vw", maxWidth: 480, maxHeight: 480, bottom: "-16%", left: "22%" }}
        animate={{ x: [0, 30, -40, 0], y: [0, -20, 30, 0], scale: [1, 1.08, 0.94, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
    </div>
  );
}
