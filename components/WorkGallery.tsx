"use client";

import { AnimatedGroup } from "./core/animated-group";

/**
 * All creatives shown on the Our Work page.
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
    <AnimatedGroup
      className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
      variants={{
        container: {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
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
      {creatives.map((src) => (
        <div key={src} className="group overflow-hidden rounded-xl bg-mist aspect-[4/5]">
          <img
            src={src}
            alt="KX Scale Media creative work"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      ))}
    </AnimatedGroup>
  );
}
