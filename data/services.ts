export interface Service {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  whatItIs: string;
  whatWeDo: string[];
  whoItIsFor: string;
  expectedOutcomes: string[];
}

export const services: Service[] = [
  {
    id: "performance-marketing",
    number: "01",
    title: "Performance Marketing",
    shortDescription:
      "Meta Ads, Google Ads, Conversion Campaigns and Growth Strategy.",
    whatItIs:
      "A data-first approach to paid media where every rupee spent is tied to a measurable business outcome.",
    whatWeDo: [
      "Full-funnel Meta & Google Ads management",
      "Conversion tracking & attribution setup",
      "Audience research and segmentation",
      "Continuous A/B testing of offers and creatives",
    ],
    whoItIsFor:
      "Businesses ready to scale beyond guesswork with a structured, ROI-driven ad engine.",
    expectedOutcomes: [
      "Lower cost per acquisition",
      "Higher return on ad spend",
      "Predictable lead / sales pipeline",
    ],
  },
  {
    id: "lead-generation",
    number: "02",
    title: "Lead Generation",
    shortDescription: "Generate qualified leads that actually matter to your business.",
    whatItIs:
      "Targeted campaigns designed to fill your pipeline with leads that convert, not just clicks.",
    whatWeDo: [
      "Lead magnet & offer design",
      "Landing page conversion optimization",
      "CRM integration and lead scoring",
      "Retargeting sequences for warm leads",
    ],
    whoItIsFor: "Service businesses, coaches, real estate, B2B and high-ticket brands.",
    expectedOutcomes: ["Consistent qualified lead flow", "Lower cost per lead", "Higher lead-to-sale conversion"],
  },
  {
    id: "creative-strategy",
    number: "03",
    title: "Creative Strategy",
    shortDescription:
      "High-performing ad creatives designed to capture attention and convert.",
    whatItIs:
      "The bridge between your brand and your performance data — creative built to stop the scroll and drive action.",
    whatWeDo: [
      "Hook and angle research",
      "Creative concept development",
      "Scripting for video ads",
      "Iterative creative testing frameworks",
    ],
    whoItIsFor: "Brands whose ads are getting impressions but not engagement or sales.",
    expectedOutcomes: ["Higher click-through & hook rates", "Reduced ad fatigue", "Stronger brand recall"],
  },
  {
    id: "video-content",
    number: "04",
    title: "Video Content",
    shortDescription:
      "Scroll-stopping videos designed for social media and paid advertising.",
    whatItIs:
      "Short-form and ad-ready video content built specifically for performance, not just aesthetics.",
    whatWeDo: [
      "UGC-style ad production",
      "Reels & short-form content",
      "Editing, captions and sound design",
      "Platform-specific formatting",
    ],
    whoItIsFor: "E-commerce and D2C brands that need constant creative volume.",
    expectedOutcomes: ["More engaging ad creative", "Higher watch-through rate", "Fresh testing assets weekly"],
  },
  {
    id: "graphic-design",
    number: "05",
    title: "Graphic Creatives",
    shortDescription: "Premium static creatives for advertising and branding.",
    whatItIs: "High-impact static design for paid social, carousels, and brand assets.",
    whatWeDo: [
      "Static ad creative design",
      "Carousel ad design",
      "Brand visual systems",
      "Landing page visual assets",
    ],
    whoItIsFor: "Brands that need a consistent, premium visual identity across every touchpoint.",
    expectedOutcomes: ["Cohesive brand presentation", "Higher-converting static ads", "Faster creative turnaround"],
  },
  {
    id: "social-media-marketing",
    number: "06",
    title: "Social Media Marketing",
    shortDescription: "Organic content strategy that builds authority and trust.",
    whatItIs: "A content engine that builds brand equity alongside your paid campaigns.",
    whatWeDo: [
      "Content calendars & strategy",
      "Community management",
      "Organic-to-paid content repurposing",
      "Platform growth strategy",
    ],
    whoItIsFor: "Brands building long-term audience trust, not just short-term conversions.",
    expectedOutcomes: ["Stronger brand authority", "Higher engagement rates", "Content library for paid ads"],
  },
  {
    id: "funnel-strategy",
    number: "07",
    title: "Funnel Strategy",
    shortDescription: "Funnels, retargeting, audience strategy and campaign optimization.",
    whatItIs: "The end-to-end customer journey — from first ad view to repeat purchase.",
    whatWeDo: [
      "Funnel mapping & offer sequencing",
      "Landing page & checkout optimization",
      "Email & retargeting flows",
      "Customer journey analytics",
    ],
    whoItIsFor: "Businesses losing revenue between the ad click and the final sale.",
    expectedOutcomes: ["Higher conversion rate", "Lower cart/lead drop-off", "Increased customer lifetime value"],
  },
  {
    id: "retargeting",
    number: "08",
    title: "Retargeting",
    shortDescription: "Re-engage warm audiences to recover lost conversions.",
    whatItIs: "Strategic re-engagement of people who almost converted.",
    whatWeDo: [
      "Custom audience segmentation",
      "Dynamic retargeting creatives",
      "Cross-platform retargeting sequences",
      "Cart & lead abandonment recovery",
    ],
    whoItIsFor: "Brands with meaningful site traffic but leaking conversions.",
    expectedOutcomes: ["Recovered abandoned leads/carts", "Lower blended CAC", "Higher overall ROAS"],
  },
  {
    id: "campaign-optimization",
    number: "09",
    title: "Campaign Optimization",
    shortDescription: "Continuous testing and optimization of live campaigns.",
    whatItIs: "The ongoing discipline of testing, measuring and improving what's already live.",
    whatWeDo: [
      "Weekly performance audits",
      "Budget & bid optimization",
      "Creative refresh cycles",
      "Reporting & insight delivery",
    ],
    whoItIsFor: "Brands already running ads who want more from the same spend.",
    expectedOutcomes: ["Improved ROAS over time", "Reduced wasted ad spend", "Clear, transparent reporting"],
  },
];
