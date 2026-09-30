"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { projects, categoryLabels, ProjectCategory } from "@/data/projects";
import { InfiniteSlider } from "./core/infinite-slider";
import ProjectCard from "./ProjectCard";

// Same images used in the home page Creative Gallery — used for every image here.
const creativeImages = [
  "/showcase/creative-01.jpeg",
  "/showcase/creative-02.jpeg",
  "/showcase/creative-03.jpeg",
  "/showcase/creative-04.jpeg",
  "/showcase/creative-05.jpeg",
  "/showcase/creative-06.jpeg",
];

export default function PortfolioGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("creatives");

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

      {filter === "creatives" ? (
        <InfiniteSlider speedOnHover={20} speed={50} gap={24}>
          {creativeImages.map((src) => (
            <img
              key={src}
              src={src}
              alt="KX Scale Media creative work"
              className="aspect-[4/5] w-[220px] sm:w-[260px] object-cover rounded-xl"
            />
          ))}
        </InfiniteSlider>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
