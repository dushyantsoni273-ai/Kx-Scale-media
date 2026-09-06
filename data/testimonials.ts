export interface Testimonial {
  name: string;
  company: string;
  quote: string;
  image?: string; // "/testimonials/name.jpg"
}

export const testimonials: Testimonial[] = [
  {
    name: "Aarav Mehta",
    company: "Founder, Urban Thread Co.",
    quote:
      "KX Scale Media rebuilt our entire paid acquisition strategy from scratch. Within two months our ROAS more than doubled and, for the first time, we actually understood why campaigns were working.",
    image: "/testimonials/placeholder-01.jpg",
  },
  {
    name: "Priya Nair",
    company: "Owner, Peak Fitness Studio",
    quote:
      "We went from relying purely on walk-ins to having a real, predictable lead pipeline. The team is transparent, fast, and genuinely invested in our numbers.",
    image: "/testimonials/placeholder-02.jpg",
  },
  {
    name: "Rohan Kapoor",
    company: "CMO, BrightPath Education",
    quote:
      "What stood out was how much they combine creative thinking with data. Every recommendation came backed by a clear reason and a measurable result.",
    image: "/testimonials/placeholder-03.jpg",
  },
  {
    name: "Simran Kaur",
    company: "Founder, GlowLab Skincare",
    quote:
      "Our creatives finally feel like they belong on someone's feed instead of an ad. The performance jump followed almost immediately.",
    image: "/testimonials/placeholder-04.jpg",
  },
];
