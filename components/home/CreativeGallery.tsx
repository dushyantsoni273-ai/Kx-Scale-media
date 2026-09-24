"use client";

import FadeUp from "../FadeUp";
import { AnimatedGroup } from "../core/animated-group";

/**
 * TO ADD YOUR OWN PHOTOS:
 * Replace the URLs below with your own image paths (e.g. "/showcase/photo-1.jpg"
 * after adding files to /public/showcase/). Add or remove entries freely —
 * the grid re-flows automatically (2 cols on mobile, 3 on tablet, 4 on desktop).
 */
const images = [
  "https://images.beta.cosmos.so/fc6fdd93-552c-47e6-98aa-b8fb3ba070a2?format=jpeg",
  "https://images.beta.cosmos.so/cb674d14-ebd1-4408-bab1-79df895017b6?format=jpeg",
  "https://images.beta.cosmos.so/e5a6c3ed-82ad-4084-9a11-1eccd7bc91aa?format=jpeg",
  "https://images.beta.cosmos.so/4d02a1e7-d1f2-4575-86a9-bed243e59132?format=jpeg",
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
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
                className="w-full h-auto aspect-[4/5] object-cover rounded-[4px]"
              />
            ))}
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
