export interface Service {
  id: string;
  title: string;
  malayalamTitle?: string;
  description: string;
  features: string[];
  icon: string; // Lucide icon name
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Modular Kitchen' | 'Furniture';
  location: string;
  year: string;
  image: string;
  description: string;
  gallery: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
  initials: string;
  isLocalGuide?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  experience: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}
