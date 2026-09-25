"use client";

import FadeUp from "../FadeUp";
import { InfiniteSlider } from "../core/infinite-slider";

/**
 * TO ADD/CHANGE PHOTOS:
 * Add your image file to /public/showcase/, then add its path to this list.
 * Add or remove entries freely — the slider loops seamlessly either way.
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
    <section className="py-28 md:py-36 border-t border-line overflow-hidden">
      <div className="container-px max-w-content mx-auto">
        <FadeUp>
          <span className="text-xs uppercase tracking-[0.25em] text-ink/50 font-semibold">
            Creative Gallery
          </span>
          <h2 className="mt-4 font-display font-extrabold uppercase text-display-2 max-w-2xl">
            Creativity That Stops The Scroll.
          </h2>
        </FadeUp>
      </div>

      <div className="mt-16">
        <InfiniteSlider speedOnHover={20} speed={50} gap={24}>
          {images.map((src) => (
            <img
              key={src}
              src={src}
              alt="KX Scale Media creative work"
              className="aspect-[4/5] w-[220px] sm:w-[260px] object-cover rounded-xl"
            />
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
