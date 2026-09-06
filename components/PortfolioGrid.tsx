"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { projects, categoryLabels, ProjectCategory } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function PortfolioGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");

  const filtered = useMemo(() => {
    const list =
      filter === "all" ? projects : projects.filter((p) => p.category.includes(filter));
    return limit ? list.slice(0, limit) : list;
  }, [filter, limit]);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-12">
        {categoryLabels.map((c) => (
          <button
            key={c.value}
            data-cursor="hover"
            onClick={() => setFilter(c.value)}
            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
              filter === c.value ? "text-white" : "text-ink/60 hover:text-ink"
            }`}
          >
            {filter === c.value && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 bg-ink rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{c.label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}
