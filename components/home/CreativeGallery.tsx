"use client";

import FadeUp from "../FadeUp";
import { AnimatedGroup } from "../core/animated-group";

/**
 * TO ADD/CHANGE PHOTOS:
 * Add your image file to /public/showcase/, then add its path to this list.
 * Add or remove entries freely — the grid re-flows automatically
 * (2 cols on mobile, 3 on tablet, 4 on desktop).
 */
const images = [
  "/showcase/creative-01.jpeg",
  "/showcase/creative-02.jpeg",
  "/showcase/creative-03.jpeg",
  "/showcase/creative-04.jpeg",
  "/showcase/creative-05.jpeg",
  "/showcase/creative-06.jpeg",
];

export default function CreativeGallery() {
  return (
    <section className="container-px py-28 md:py-36 border-t border-line">
      <div className="max-w-content mx-auto">
        <FadeUp>
          <span className="text-xs uppercase tracking-[0.25em] text-ink/50 font-semibold">
            Creative Gallery
          </span>
          <h2 className="mt-4 font-display font-extrabold uppercase text-display-2 max-w-2xl">
            Creativity That Stops The Scroll.
          </h2>
        </FadeUp>

        <div className="mt-16">
          <AnimatedGroup
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            variants={{
              container: {
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08 },
                },
              },
              item: {
                hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 1, type: "spring", bounce: 0.3 },
                },
              },
            }}
          >
            {images.map((src) => (
              <img
                key={src}
                src={src}
                alt="KX Scale Media creative work"
                className="w-full h-auto aspect-[4/5] object-cover rounded-xl"
              />
            ))}
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
