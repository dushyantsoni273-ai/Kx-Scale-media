export interface Metric {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  services: string[];
  heroImage: string; // "/case-studies/urban-thread-hero.jpg"
  challenge: string;
  strategy: string;
  creativeApproach: string;
  campaignSetup: string[];
  metrics: Metric[];
  gallery: string[]; // array of image/video paths
  finalOutcome: string;
}

/**
 * TO ADD A NEW CASE STUDY:
 * Copy an object below and update every field. Slug must match a project slug
 * in data/projects.ts if you want it linked from the portfolio grid.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "urban-thread-ecommerce",
    client: "Urban Thread Co.",
    industry: "E-Commerce · Fashion",
    services: ["Meta Ads", "Creative Strategy"],
    heroImage: "/case-studies/placeholder-hero-01.jpg",
    challenge:
      "Urban Thread had strong products but inconsistent ad performance — high spend with unpredictable returns and no clear creative testing process.",
    strategy:
      "We rebuilt their Meta Ads account structure around a testing framework: broad audiences, tightly controlled creative variables, and a clear conversion event hierarchy.",
    creativeApproach:
      "Shifted from polished studio shots to UGC-style creatives with strong hooks in the first 2 seconds, paired with carousel ads highlighting best-sellers.",
    campaignSetup: [
      "Full-funnel Meta Ads structure (TOF, MOF, BOF)",
      "Weekly creative testing cadence",
      "Dynamic retargeting for cart abandoners",
      "Server-side tracking via Conversions API",
    ],
    metrics: [
      { label: "Revenue Generated", value: "₹58L" },
      { label: "ROAS", value: "4.2x" },
      { label: "Lower CPA", value: "32%" },
      { label: "Growth", value: "180%" },
    ],
    gallery: [
      "/case-studies/gallery/placeholder-01.jpg",
      "/case-studies/gallery/placeholder-02.jpg",
      "/case-studies/gallery/placeholder-03.jpg",
    ],
    finalOutcome:
      "Urban Thread now runs a predictable, always-on acquisition engine with a documented creative testing process the internal team can maintain long-term.",
  },
  {
    slug: "peak-fitness-studio",
    client: "Peak Fitness Studio",
    industry: "Health & Fitness",
    services: ["Lead Generation", "Google Ads"],
    heroImage: "/case-studies/placeholder-hero-02.jpg",
    challenge:
      "Peak Fitness relied entirely on walk-ins and referrals with no digital acquisition channel, and membership growth had plateaued.",
    strategy:
      "Built a lead-generation funnel combining Google Search Ads for high-intent local searches with Meta Ads for a free trial offer.",
    creativeApproach:
      "Local, authentic video content shot inside the studio featuring real trainers and members rather than stock fitness imagery.",
    campaignSetup: [
      "Google Local Service & Search campaigns",
      "Meta lead-gen forms with instant follow-up",
      "CRM automation for lead nurturing",
      "Call tracking for offline conversion attribution",
    ],
    metrics: [
      { label: "Leads Generated", value: "612" },
      { label: "Cost per Lead", value: "₹340" },
      { label: "New Memberships", value: "148" },
      { label: "Growth", value: "64%" },
    ],
    gallery: [
      "/case-studies/gallery/placeholder-04.jpg",
      "/case-studies/gallery/placeholder-05.jpg",
    ],
    finalOutcome:
      "Peak Fitness now has a repeatable local lead-generation system responsible for the majority of new sign-ups each month.",
  },
  {
    slug: "brightpath-edu",
    client: "BrightPath Education",
    industry: "EdTech",
    services: ["Performance Marketing", "Lead Generation"],
    heroImage: "/case-studies/placeholder-hero-03.jpg",
    challenge:
      "BrightPath's cost per lead was rising quarter over quarter with declining lead quality across their paid channels.",
    strategy:
      "Restructured audience targeting around lookalikes of enrolled students and introduced a qualification step before the lead form.",
    creativeApproach:
      "Testimonial-driven video ads from real students paired with clear outcome-based messaging on course value.",
    campaignSetup: [
      "Meta + Google full-funnel campaigns",
      "Pre-qualification quiz funnel",
      "Lead scoring integrated with sales CRM",
      "Monthly creative refresh based on top performers",
    ],
    metrics: [
      { label: "Lower CPL", value: "38%" },
      { label: "Qualified Leads", value: "+92%" },
      { label: "Enrollment Rate", value: "+27%" },
      { label: "ROAS", value: "3.6x" },
    ],
    gallery: ["/case-studies/gallery/placeholder-06.jpg"],
    finalOutcome:
      "BrightPath now acquires higher-intent students at a lower cost, with a sales team spending less time on unqualified leads.",
  },
];
