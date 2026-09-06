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
  {
    slug: "glowlab-skincare",
    client: "GlowLab Skincare",
    industry: "Beauty & D2C",
    services: ["Video Content", "Meta Ads"],
    heroImage: "/case-studies/placeholder-hero-04.jpg",
    challenge:
      "GlowLab's polished, studio-style ad creatives were getting impressions but failing to convert on Meta — engagement was low and CPMs kept climbing.",
    strategy:
      "Rebuilt the creative pipeline around short-form, UGC-style video ads paired with a always-on testing cadence across Meta placements.",
    creativeApproach:
      "Real customers filming authentic before/after routines, with fast-paced editing and native, platform-first sound design instead of studio production.",
    campaignSetup: [
      "Weekly UGC video ad production cycle",
      "Meta Advantage+ shopping campaigns",
      "Creative testing framework by hook and angle",
      "Dynamic retargeting for product-page visitors",
    ],
    metrics: [
      { label: "ROAS", value: "3.1x" },
      { label: "Lower CPM", value: "27%" },
      { label: "Video Watch-Through", value: "+64%" },
      { label: "Growth", value: "92%" },
    ],
    gallery: [
      "/case-studies/gallery/placeholder-07.jpg",
      "/case-studies/gallery/placeholder-08.jpg",
    ],
    finalOutcome:
      "GlowLab now runs a always-on UGC video engine that consistently outperforms their previous studio creative, at a lower cost per result.",
  },
  {
    slug: "nourish-organic",
    client: "Nourish Organic Foods",
    industry: "E-Commerce · FMCG",
    services: ["Graphic Creatives", "Social Media"],
    heroImage: "/case-studies/placeholder-hero-05.jpg",
    challenge:
      "Nourish had strong organic reach but an inconsistent visual identity across paid and organic posts, diluting brand recall.",
    strategy:
      "Developed a unified visual creative system spanning static ads, carousels, and organic social content built around one cohesive brand language.",
    creativeApproach:
      "A modular design system of static and carousel templates that could be quickly adapted for new products while staying visually consistent.",
    campaignSetup: [
      "Brand visual system and creative templates",
      "Static + carousel ad rollout across Meta",
      "Organic content calendar aligned to paid creative",
      "Monthly creative refresh based on engagement data",
    ],
    metrics: [
      { label: "Engagement Rate", value: "+58%" },
      { label: "CTR", value: "+34%" },
      { label: "Brand Recall Lift", value: "+21%" },
      { label: "Growth", value: "47%" },
    ],
    gallery: ["/case-studies/gallery/placeholder-09.jpg"],
    finalOutcome:
      "Nourish now has a consistent, recognizable visual identity across every touchpoint, with a creative system their internal team can maintain.",
  },
  {
    slug: "vantage-realty",
    client: "Vantage Realty Group",
    industry: "Real Estate",
    services: ["Lead Generation", "Funnel Strategy"],
    heroImage: "/case-studies/placeholder-hero-06.jpg",
    challenge:
      "Vantage was generating leads through paid ads, but a large share were unqualified, wasting the sales team's time on low-intent inquiries.",
    strategy:
      "Built a pre-qualification funnel that filtered leads by budget and intent before they reached the sales team, paired with automated nurture sequences.",
    creativeApproach:
      "Property walkthrough videos and lifestyle-focused creative aimed at the specific buyer segments each project was built for.",
    campaignSetup: [
      "Meta + Google lead-gen campaigns",
      "Budget and intent pre-qualification flow",
      "Automated WhatsApp and email nurture sequences",
      "CRM integration for sales handoff",
    ],
    metrics: [
      { label: "Pipeline Value", value: "₹1.4Cr" },
      { label: "Qualified Leads", value: "+76%" },
      { label: "Cost per Qualified Lead", value: "-41%" },
      { label: "Growth", value: "58%" },
    ],
    gallery: [
      "/case-studies/gallery/placeholder-10.jpg",
      "/case-studies/gallery/placeholder-11.jpg",
    ],
    finalOutcome:
      "Vantage's sales team now spends its time on genuinely qualified buyers, with a funnel that filters out low-intent leads automatically.",
  },
  {
    slug: "stride-footwear",
    client: "Stride Footwear",
    industry: "E-Commerce · Fashion",
    services: ["Video Content", "Creative Strategy"],
    heroImage: "/case-studies/placeholder-hero-07.jpg",
    challenge:
      "Stride's ad creative had grown stale after months of the same static product shots, leading to rising ad fatigue and declining CTR.",
    strategy:
      "Introduced a structured creative testing system built around short-form video, refreshed on a strict weekly cadence to stay ahead of fatigue.",
    creativeApproach:
      "Fast-cut lifestyle and on-foot video content shot to feel native to social feeds, with hooks built around common footwear pain points.",
    campaignSetup: [
      "Weekly video creative refresh cycle",
      "Meta + TikTok-style short-form ad formats",
      "Hook-based creative testing framework",
      "Fatigue monitoring and rotation triggers",
    ],
    metrics: [
      { label: "CTR", value: "+41%" },
      { label: "Lower CPA", value: "29%" },
      { label: "ROAS", value: "3.8x" },
      { label: "Growth", value: "73%" },
    ],
    gallery: ["/case-studies/gallery/placeholder-12.jpg"],
    finalOutcome:
      "Stride now maintains fresh, high-performing creative on a predictable weekly cycle, keeping ad fatigue consistently in check.",
  },
  {
    slug: "loop-coffee-co",
    client: "Loop Coffee Co.",
    industry: "Food & Beverage",
    services: ["Social Media", "Graphic Creatives"],
    heroImage: "/case-studies/placeholder-hero-08.jpg",
    challenge:
      "Loop Coffee had loyal foot traffic but almost no digital presence, making it hard to reach new customers beyond their immediate neighborhood.",
    strategy:
      "Built an organic-first social media strategy paired with a consistent visual identity across every post, designed to build local brand awareness.",
    creativeApproach:
      "Warm, lifestyle-focused photography and short clips capturing the in-store experience, paired with a simple, recognizable visual template system.",
    campaignSetup: [
      "Content calendar built around store moments and seasonal drops",
      "Consistent static creative templates for feed and stories",
      "Community management and local engagement strategy",
      "Boosted posts targeting nearby audiences",
    ],
    metrics: [
      { label: "Follower Growth", value: "+140%" },
      { label: "Engagement Rate", value: "+65%" },
      { label: "Store Visits from Social", value: "+38%" },
      { label: "Growth", value: "51%" },
    ],
    gallery: ["/case-studies/gallery/placeholder-13.jpg"],
    finalOutcome:
      "Loop Coffee now has a recognizable local brand presence online, driving a measurable share of new in-store visits.",
  },
];
