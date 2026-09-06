"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/case-studies/${project.slug}`} data-cursor="hover" className="group block">
        <div className="relative aspect-[4/5] overflow-hidden bg-mist">
          {/* Placeholder media block — replace bg color / add <Image> or <video> using project.thumbnail */}
          <div className="absolute inset-0 bg-gradient-to-br from-mist to-line transition-transform duration-700 ease-premium group-hover:scale-105" />
          <div className="absolute inset-0 flex items-center justify-center text-ink/20 text-xs uppercase tracking-widest">
            Replace media: {project.thumbnail}
          </div>
          {project.isVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                <Play size={20} className="ml-0.5" />
              </div>
            </div>
          )}
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <ArrowUpRight size={16} />
          </div>
          {project.result && (
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-bold uppercase tracking-wide">
              {project.result}
            </div>
          )}
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg group-hover:text-ink/70 transition-colors">{project.clientName}</h3>
            <p className="text-sm text-ink/50">{project.industry}</p>
          </div>
        </div>
        <p className="mt-1 text-xs uppercase tracking-wide text-ink/40">{project.services.join(" + ")}</p>
      </Link>
    </motion.div>
  );
}
