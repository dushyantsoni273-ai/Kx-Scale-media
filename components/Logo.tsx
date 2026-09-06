import Image from "next/image";

/**
 * Brand mark: /public/logo/kx-logo.png (black "K" on transparent/white).
 * `light` renders it inverted (white) for use on dark backgrounds like the footer.
 */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <Image
        src="/logo/kx-logo.png"
        alt="KX Scale Media"
        width={32}
        height={32}
        priority
        className={`w-8 h-8 object-contain ${light ? "brightness-0 invert" : ""}`}
      />
      <span
        className={`text-sm font-extrabold tracking-[0.15em] uppercase ${
          light ? "text-white" : "text-ink"
        }`}
      >
        Scale Media
      </span>
    </div>
  );
}
