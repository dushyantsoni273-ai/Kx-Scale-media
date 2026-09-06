export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 25, prefix: "₹", suffix: "Cr+", label: "Ad Spend Managed" },
  { value: 40, suffix: "+", label: "Brands Worked With" },
  { value: 90, prefix: "₹", suffix: "Cr+", label: "Revenue Generated" },
  { value: 120, suffix: "K+", label: "Leads Generated" },
];
