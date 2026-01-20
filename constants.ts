
import { BottleSize, BottleColor, Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'calmare-one',
    name: 'CALMARE One',
    description: 'Our flagship smart wellness bottle with HR and GSR integrated sensors.',
    price: 149.00,
    sizes: [BottleSize.SMALL, BottleSize.LARGE],
    colors: [BottleColor.PEARL, BottleColor.OBSIDIAN, BottleColor.SAGE, BottleColor.DUSK],
    image: 'https://picsum.photos/id/20/800/1200',
    features: [
      'Heart Rate (HR) Sensing',
      'Galvanic Skin Response (GSR)',
      '12-hour Cold/Hot Insulation',
      'Medical Grade Stainless Steel',
      'BPA Free'
    ],
    specs: {
      'Material': 'Double-walled 304 Stainless Steel',
      'Battery': '7 days on single charge',
      'Sensors': 'Precision Optical HR, Biopotential GSR',
      'Connectivity': 'Bluetooth 5.0 Low Energy',
      'Charging': 'Wireless Qi Compatible'
    }
  },
  {
    id: 'calmare-lite',
    name: 'CALMARE Lite',
    description: 'Essential bio-feedback tracking in a lightweight design.',
    price: 99.00,
    sizes: [BottleSize.SMALL],
    colors: [BottleColor.PEARL, BottleColor.SAGE],
    image: 'https://picsum.photos/id/30/800/1200',
    features: [
      'GSR Bio-feedback',
      'Hydration Tracking',
      'BPA Free',
      'Dishwasher Safe Lid'
    ],
    specs: {
      'Material': 'Single-walled Recycled Steel',
      'Battery': '14 days battery life',
      'Sensors': 'Conductive GSR sensor',
      'Connectivity': 'Bluetooth 5.0 Low Energy'
    }
  }
];

export const REVIEWS = [
  { id: 1, author: 'Sarah J.', rating: 5, text: 'The visual reminder to breathe when I see the bottle turn red is a game changer for my anxiety at work.', date: '2024-03-12' },
  { id: 2, author: 'Mark T.', rating: 4, text: 'Sleek design. The app integration is seamless. I love the sage green color.', date: '2024-04-05' },
  { id: 3, author: 'Elena R.', rating: 5, text: 'Its not just a water bottle, its a bio-feedback tool. Truly premium feel.', date: '2024-05-20' }
];

export const FAQS = [
  { question: 'Is this a medical device?', answer: 'No. CALMARE is a wellness-tech product designed for general health awareness and stress management. It is not intended to diagnose, treat, or cure any medical condition.' },
  { question: 'How do the sensors work?', answer: 'The bottle features integrated sensors in the grip area that measure your heart rate (HR) and galvanic skin response (GSR) when you hold it. These indicators reflect your autonomic nervous system activity.' },
  { question: 'Is the bottle dishwasher safe?', answer: 'The lid contains sensitive electronics and should be hand-washed only. The stainless steel body (excluding sensors) is top-rack dishwasher safe, but hand-washing is recommended to preserve the finish.' }
];
