export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 20, prefix: "₹", suffix: "Cr+", label: "Ad Spend Managed" },
  { value: 100, suffix: "+", label: "Brands Worked With" },
  { value: 80, prefix: "₹", suffix: "Cr+", label: "Revenue Generated" },
  { value: 5, suffix: " Lakh+", label: "Leads Generated" },
];
