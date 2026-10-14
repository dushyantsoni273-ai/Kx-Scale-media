"use client";

import { InfiniteSlider } from "./core/infinite-slider";

/**
 * All creatives shown on the Our Work page (same moving slider as the homepage).
 * To add one: put the image in /public/showcase/ and add its path here.
 */
const creatives = [
  "/showcase/creative-01.jpeg",
  "/showcase/creative-02.jpeg",
  "/showcase/creative-03.jpeg",
  "/showcase/creative-04.jpeg",
  "/showcase/creative-05.jpeg",
  "/showcase/creative-06.jpeg",
  "/showcase/creative-07.jpeg",
  "/showcase/creative-08.jpeg",
  "/showcase/creative-09.jpeg",
];

export default function WorkGallery() {
  return (
    <InfiniteSlider speed={50} speedOnHover={20} gap={24}>
      {creatives.map((src) => (
        <img
          key={src}
          src={src}
          alt="KX Scale Media creative work"
          className="aspect-[4/5] w-[220px] sm:w-[260px] object-cover rounded-xl"
        />
      ))}
    </InfiniteSlider>
  );
}
