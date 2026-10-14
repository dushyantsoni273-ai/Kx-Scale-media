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

// Second row starts from a different image so both rows don't look identical
const secondRow = [...creatives.slice(4), ...creatives.slice(0, 4)];

function Card({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt="KX Scale Media creative work"
      className="aspect-[4/5] w-[220px] sm:w-[260px] object-cover rounded-xl"
    />
  );
}

export default function WorkGallery() {
  return (
    <div className="space-y-6">
      <InfiniteSlider speed={50} speedOnHover={20} gap={24}>
        {creatives.map((src) => (
          <Card key={src} src={src} />
        ))}
      </InfiniteSlider>

      {/* Second row moves in the opposite direction. Remove this block for a single row. */}
      <InfiniteSlider speed={50} speedOnHover={20} gap={24} reverse>
        {secondRow.map((src) => (
          <Card key={src} src={src} />
        ))}
      </InfiniteSlider>
    </div>
  );
}
