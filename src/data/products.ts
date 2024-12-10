import { Product } from '../types/product';

export const featuredProducts: Product[] = [
  {
    id: 'paystack',
    name: 'Paystack',
    description: 'Modern payment infrastructure for Africa',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    category: 'Infrastructure',
    pricing: 'Transaction-based pricing',
    website: 'https://paystack.com',
    benefits: [
      'Local and international payments',
      'Robust API documentation',
      'Excellent developer support',
      'Built for African markets'
    ],
    usedBy: ['Domino\'s Pizza', 'MTN', 'Bolt'],
    nigerianContext: 'Built in Nigeria, for Nigeria. Handles both local and international payment processing with support for Naira transactions.'
  },
  {
    id: 'termii',
    name: 'Termii',
    description: 'Multichannel messaging infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1611532736188-039947f31ed3?auto=format&fit=crop&w=800&q=80',
    category: 'Infrastructure',
    pricing: 'Pay-as-you-go',
    website: 'https://termii.com',
    benefits: [
      'SMS, WhatsApp, and Voice APIs',
      'Local number support',
      'Delivery reports',
      'Number verification'
    ],
    usedBy: ['Piggyvest', 'Patricia', 'Bamboo'],
    nigerianContext: 'Optimized for Nigerian telecoms infrastructure with high delivery rates.'
  },
  {
    id: 'flutterwave',
    name: 'Flutterwave',
    description: 'Payment solutions for endless possibilities',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80',
    category: 'Infrastructure',
    pricing: 'Transaction-based pricing',
    website: 'https://flutterwave.com',
    benefits: [
      'Multiple payment options',
      'Cross-border payments',
      'Virtual cards',
      'Payment links'
    ],
    usedBy: ['Uber', 'Flywire', 'Booking.com'],
    nigerianContext: 'Supports multiple Nigerian payment methods and offers excellent exchange rates.'
  },
  {
    id: 'buycoins',
    name: 'Buycoins',
    description: 'Crypto infrastructure for Africa',
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80',
    category: 'Infrastructure',
    pricing: 'Market-based spreads',
    website: 'https://buycoins.africa',
    benefits: [
      'Crypto payment APIs',
      'OTC trading',
      'Stablecoin support',
      'Developer-first approach'
    ],
    usedBy: ['Patricia', 'Bundle', 'Bitsika'],
    nigerianContext: 'Built with Nigerian regulatory compliance in mind, offering safe crypto transactions.'
  },
  {
    id: 'mono',
    name: 'Mono',
    description: 'Open banking for Africa',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    category: 'Infrastructure',
    pricing: 'API call-based pricing',
    website: 'https://mono.co',
    benefits: [
      'Bank account linking',
      'Transaction history',
      'Statement analysis',
      'Direct debit'
    ],
    usedBy: ['Carbon', 'Autochek', 'Kredito'],
    nigerianContext: 'Connected to all major Nigerian banks with real-time data access.'
  }
];