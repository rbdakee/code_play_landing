export interface CourseCard {
  id: "scratch" | "roblox" | "python";
  ageRange: string;
  heading: string;
  description: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface BenefitCard {
  id: string;
  heading: string;
  description: string;
  icon?: string;
}

export interface TrialStep {
  number: number;
  title: string;
  description: string;
}

export interface Case {
  id: string;
  title: string;
  story: string;
  result: string;
}

export interface Review {
  id: string;
  quote: string;
  author?: string;
  country?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
