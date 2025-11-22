export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceOffer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  color: 'blue' | 'yellow' | 'pink';
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  image?: string;
}
