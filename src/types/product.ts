export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: 'Productivity' | 'Development' | 'Business' | 'Infrastructure' | 'Security';
  pricing: string;
  website: string;
  benefits: string[];
  usedBy: string[];
  nigerianContext: string;
  votes: number;
  rank?: number;
}