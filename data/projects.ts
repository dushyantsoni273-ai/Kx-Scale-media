export type ProjectCategory = "video" | "creatives" | "performance" | "case-studies" | "social";

export interface Project {
  id: string;
  slug: string;
  clientName: string;
  industry: string;
  services: string[];
  category: ProjectCategory[];
  // Image shown on the card. Files live in /public/showcase/
  thumbnail: string;
  isVideo?: boolean;
  result?: string;
}

/**
 * TO ADD A NEW PROJECT:
 * Copy an object below, change the fields, and add your image to /public/showcase/.
 * NOTE: client names below are still placeholders — replace with real clients.
 */
export const projects: Project[] = [
  {
    id: "proj-01",
    slug: "urban-thread-ecommerce",
    clientName: "Urban Thread Co.",
    industry: "E-Commerce · Fashion",
    services: ["Meta Ads", "Creative Strategy"],
    category: ["performance", "creatives"],
    thumbnail: "/showcase/creative-01.jpeg",
    result: "4.2x ROAS",
  },
  {
    id: "proj-02",
    slug: "glowlab-skincare",
    clientName: "GlowLab Skincare",
    industry: "Beauty & D2C",
    services: ["Video Content", "Meta Ads"],
    category: ["video", "performance", "creatives"],
    thumbnail: "/showcase/creative-02.jpeg",
    isVideo: true,
    result: "3.1x ROAS",
  },
  {
    id: "proj-03",
    slug: "peak-fitness-studio",
    clientName: "Peak Fitness Studio",
    industry: "Health & Fitness",
    services: ["Lead Generation", "Google Ads"],
    category: ["performance", "creatives"],
    thumbnail: "/showcase/creative-03.jpeg",
    result: "612 Leads",
  },
  {
    id: "proj-04",
    slug: "vantage-realty",
    clientName: "Vantage Realty Group",
    industry: "Real Estate",
    services: ["Lead Generation", "Funnel Strategy"],
    category: ["performance", "creatives"],
    thumbnail: "/showcase/creative-04.jpeg",
    result: "₹1.4Cr Pipeline",
  },
  {
    id: "proj-05",
    slug: "nourish-organic",
    clientName: "Nourish Organic Foods",
    industry: "E-Commerce · FMCG",
    services: ["Graphic Creatives", "Social Media"],
    category: ["creatives", "social"],
    thumbnail: "/showcase/creative-05.jpeg",
  },
  {
    id: "proj-06",
    slug: "stride-footwear",
    clientName: "Stride Footwear",
    industry: "E-Commerce · Fashion",
    services: ["Video Content", "Creative Strategy"],
    category: ["video", "creatives"],
    thumbnail: "/showcase/creative-06.jpeg",
    isVideo: true,
  },
  {
    id: "proj-07",
    slug: "brightpath-edu",
    clientName: "BrightPath Education",
    industry: "EdTech",
    services: ["Performance Marketing", "Lead Generation"],
    category: ["performance", "creatives"],
    thumbnail: "/showcase/creative-07.jpeg",
    result: "38% Lower CPL",
  },
  {
    id: "proj-08",
    slug: "loop-coffee-co",
    clientName: "Loop Coffee Co.",
    industry: "Food & Beverage",
    services: ["Social Media", "Graphic Creatives"],
    category: ["social", "creatives"],
    thumbnail: "/showcase/creative-08.jpeg",
  },
  {
    id: "proj-09",
    slug: "aura-interiors",
    clientName: "Aura Interiors",
    industry: "Home & Living",
    services: ["Meta Ads", "Graphic Creatives"],
    category: ["performance", "creatives"],
    thumbnail: "/showcase/creative-09.jpeg",
    result: "3.8x ROAS",
  },
];

export const categoryLabels: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Video", value: "video" },
  { label: "Creatives", value: "creatives" },
  { label: "Performance", value: "performance" },
];
