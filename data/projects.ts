export type ProjectCategory = "video" | "creatives" | "performance" | "case-studies" | "social";

export interface Project {
  id: string;
  slug: string;
  clientName: string;
  industry: string;
  services: string[];
  category: ProjectCategory[];
  // Replace with real thumbnail path e.g. "/work/client-01.jpg" or a video URL
  thumbnail: string;
  isVideo?: boolean;
  result?: string;
}

/**
 * TO ADD A NEW PROJECT:
 * Copy an object below, change the fields, and add your media file to /public/work/.
 */
export const projects: Project[] = [
  {
    id: "proj-01",
    slug: "urban-thread-ecommerce",
    clientName: "Urban Thread Co.",
    industry: "E-Commerce · Fashion",
    services: ["Meta Ads", "Creative Strategy"],
    category: ["performance", "case-studies"],
    thumbnail: "/work/placeholder-01.jpg",
    result: "4.2x ROAS",
  },
  {
    id: "proj-02",
    slug: "glowlab-skincare",
    clientName: "GlowLab Skincare",
    industry: "Beauty & D2C",
    services: ["Video Content", "Meta Ads"],
    category: ["video", "performance"],
    thumbnail: "/work/placeholder-02.jpg",
    isVideo: true,
    result: "3.1x ROAS",
  },
  {
    id: "proj-03",
    slug: "peak-fitness-studio",
    clientName: "Peak Fitness Studio",
    industry: "Health & Fitness",
    services: ["Lead Generation", "Google Ads"],
    category: ["performance", "case-studies"],
    thumbnail: "/work/placeholder-03.jpg",
    result: "612 Leads",
  },
  {
    id: "proj-04",
    slug: "vantage-realty",
    clientName: "Vantage Realty Group",
    industry: "Real Estate",
    services: ["Lead Generation", "Funnel Strategy"],
    category: ["performance"],
    thumbnail: "/work/placeholder-04.jpg",
    result: "₹1.4Cr Pipeline",
  },
  {
    id: "proj-05",
    slug: "nourish-organic",
    clientName: "Nourish Organic Foods",
    industry: "E-Commerce · FMCG",
    services: ["Graphic Creatives", "Social Media"],
    category: ["creatives", "social"],
    thumbnail: "/work/placeholder-05.jpg",
  },
  {
    id: "proj-06",
    slug: "stride-footwear",
    clientName: "Stride Footwear",
    industry: "E-Commerce · Fashion",
    services: ["Video Content", "Creative Strategy"],
    category: ["video", "creatives"],
    thumbnail: "/work/placeholder-06.jpg",
    isVideo: true,
  },
  {
    id: "proj-07",
    slug: "brightpath-edu",
    clientName: "BrightPath Education",
    industry: "EdTech",
    services: ["Performance Marketing", "Lead Generation"],
    category: ["performance", "case-studies"],
    thumbnail: "/work/placeholder-07.jpg",
    result: "38% Lower CPL",
  },
  {
    id: "proj-08",
    slug: "loop-coffee-co",
    clientName: "Loop Coffee Co.",
    industry: "Food & Beverage",
    services: ["Social Media", "Graphic Creatives"],
    category: ["social", "creatives"],
    thumbnail: "/work/placeholder-08.jpg",
  },
];

export const categoryLabels: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Video", value: "video" },
  { label: "Creatives", value: "creatives" },
  { label: "Performance", value: "performance" },
  { label: "Case Studies", value: "case-studies" },
];
