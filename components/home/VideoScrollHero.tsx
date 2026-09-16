"use client";

import { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import RevealText from "../RevealText";

/**
 * A tall (300vh) section with a video pinned to the screen. As the user
 * scrolls through the section, the video's playback position is tied
 * directly to scroll progress — scrolling down "scrubs" the video forward,
 * scrolling up scrubs it backward, instead of the video just autoplaying.
 *
 * TO USE YOUR OWN VIDEO:
 * Replace the `src` on the <video> tag below with your own file path
 * (e.g. "/showcase/brand-reel.mp4" after adding it to /public/showcase/).
 * For best results use an MP4, ideally under ~15-20MB, muted (no audio is
 * played during scroll-scrubbing).
 */
export default function VideoScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const video = videoRef.current;
      if (video && !Number.isNaN(video.duration) && video.duration > 0) {
        video.currentTime = latest * video.duration;
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ink">
        {/* PLACEHOLDER VIDEO — replace src with your own brand footage */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center container-px">
          <span className="text-xs uppercase tracking-[0.25em] text-white/60 font-semibold mb-6">
            Scroll To Explore
          </span>
          <h2 className="font-display font-extrabold uppercase text-display-1 text-white max-w-4xl text-balance">
            <RevealText immediate>Every Scroll,</RevealText>
            <RevealText immediate delay={0.12}>A New Frame.</RevealText>
          </h2>
        </div>
      </div>
    </section>
  );
}
