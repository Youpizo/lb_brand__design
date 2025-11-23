import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'groupe-beaudeux',
    client: 'Groupe BEAUDEUX',
    category: 'BTP & Construction',
    year: '2023',
    description: "Refonte complète de l'identité visuelle pour ce groupe leader dans la construction. L'objectif était de moderniser l'image tout en conservant les codes de solidité et de fiabilité du secteur.",
    services: ['Identité Visuelle', 'Charte Graphique', 'Support Print', 'Signalétique'],
    mainImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    ],
    theme: { text: '#0B1DBB', background: '#FFF3E0' }
  },
  {
    id: '2',
    slug: 'cuisines-morel',
    client: 'CUISINES MOREL',
    category: 'Design Intérieur',
    year: '2024',
    description: "Création d'une campagne de communication 360° pour le lancement de la nouvelle collection. Mise en avant du savoir-faire artisanal et de l'élégance à la française.",
    services: ['Stratégie de Marque', 'Direction Artistique', 'Social Media', 'Catalogue'],
    mainImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a1c002085aac?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2070&auto=format&fit=crop'
    ],
    theme: { text: '#262626', background: '#FFFFFF' }
  },
  {
    id: '3',
    slug: 'plume',
    client: 'PLUME',
    category: 'Lifestyle & Déco',
    year: '2023',
    description: "Branding doux et poétique pour cette marque de décoration et d'accessoires. Une identité qui respire la légèreté et l'authenticité.",
    services: ['Logo', 'Packaging', 'Webdesign', 'Shooting Photo'],
    mainImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1532323544230-ac8d43e29e3d?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2070&auto=format&fit=crop'
    ],
    theme: { text: '#FF0080', background: '#FFFBF5' }
  },
  {
    id: '4',
    slug: 'mobilier-restaure',
    client: 'MOBILIER RESTAURÉ',
    category: 'Artisanat',
    year: '2022',
    description: "Identité brute et authentique pour un atelier de restauration de meubles anciens. Valorisation de la matière, du geste et de l'histoire des objets.",
    services: ['Identité Visuelle', 'Site Vitrine', 'Carte de Visite', 'Flyers'],
    mainImage: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2070&auto=format&fit=crop'
    ],
    theme: { text: '#FFD500', background: '#262626' }
  },
  {
    id: '5',
    slug: 'kyria-coach',
    client: 'KYRIA-COACH',
    category: 'Coaching Professionnel',
    year: '2023',
    description: "Une image dynamique et humaine pour une coach en transition professionnelle. Le branding mêle professionnalisme et proximité pour inspirer confiance.",
    services: ['Personal Branding', 'Site Web', 'Supports Formation', 'Linkedin'],
    mainImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
    ],
    theme: { text: '#0B1DBB', background: '#FFFFFF' }
  },
  {
    id: '6',
    slug: 'sellerie-speed-broderie',
    client: 'SELLERIE SPEED BRODERIE',
    category: 'Automobile & Textile',
    year: '2024',
    description: "Refonte de marque pour un spécialiste de la sellerie automobile. Un univers visuel technique, précis et haut de gamme inspiré des circuits automobiles.",
    services: ['Rebranding', 'Covering', 'Brochure', 'Vêtements'],
    mainImage: 'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1489641493513-ba6c9577461e?q=80&w=2070&auto=format&fit=crop'
    ],
    theme: { text: '#FFFFFF', background: '#111111' }
  }
];