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
    mainImage: './assets/groupebeaudeux/mockup1.png',
    gallery: [
      '/assets/groupebeaudeux/mockup2.png',
      '/assets/groupebeaudeux/2.png',
      '/assets/groupebeaudeux/wahousalon.png',
      '/assets/groupebeaudeux/salonvrai.png',
      '/assets/groupebeaudeux/mockup3.png',
      '/assets/groupebeaudeux/mockup4.png'
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
    mainImage: './assets/plume/19.png',
    gallery: [
      '/assets/plume/18.png',
      '/assets/plume/11.png',
      '/assets/plume/8.png',
      '/assets/plume/9.png',
      '/assets/plume/15.png'
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
    mainImage: '/assets/cygne/stand.png',
    gallery: [
      '/assets/cygne/planss.png',
      '/assets/cygne/fond.png',
      '/assets/cygne/couleurs.png',
      '/assets/cygne/cartes.png',
      '/assets/cygne/logo.png',
      '/assets/cygne/plan.png'
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
    mainImage: './assets/kyria/kyria1.png',
    gallery: [
      '/assets/kyria/style.png',
      '/assets/kyria/1.png',
      '/assets/kyria/3.png',
      '/assets/kyria/cards.png',
      '/assets/kyria/5.png',
      '/assets/kyria/font.png'
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
    mainImage: '/assets/broderie/1.png',
    gallery: [
      '/assets/broderie/2.png',
      '/assets/broderie/3.png',
      '/assets/broderie/4.png',
      '/assets/broderie/5.png',
      '/assets/broderie/6.png'
    ],
    theme: { text: '#FFFFFF', background: '#111111' }
  }
];