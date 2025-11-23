import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'groupe-beaudeux',
    client: 'Groupe BEAUDEUX',
    category: 'BTP & Construction',
    year: '2023',
    description: "Modernisation de l’image du Groupe Beaudeux : direction artistique repensée, book de présentation restructuré et création de visuels pour un stand professionnel. Une communication print et événementielle plus claire et résolument moderne.",
    services: ['Direction Artistique', 'Design de Stand', 'Support Print'],
    mainImage: './img/groupebeaudeux/mockup1.webp',
    gallery: [
      '/img/groupebeaudeux/mockup2.webp',
      '/img/groupebeaudeux/wahousalon.webp',
      '/img/groupebeaudeux/salonvrai.webp',
      '/img/groupebeaudeux/mockup3.webp',
      '/img/groupebeaudeux/mockup4.webp'
    ],
    theme: { text: '#0B1DBB', background: '#FFF3E0' }
  },
  {
    id: '2',
    slug: 'cuisines-morel',
    client: 'CUISINES MOREL',
    category: "Cuisines & Aménagement d'intérieurs",
    year: '2024',
    description: "Transition du magasin de Marquette-lez-Lille vers l’enseigne Cuisines Morel : nouvelle image digitale, ligne éditoriale structurée et gestion des réseaux sociaux. Un accompagnement visant à renforcer une identité haut de gamme et fidèle aux valeurs de la Maison Morel.",
    services: ['Community Management', 'Direction Éditoriale', 'Social Media'],
    mainImage: './img/morel/21.webp',
    gallery: [
      '/img/morel/iPhone_Mockup_5.webp',
      '/img/morel/24.webp',
      '/img/morel/27.webp',
      '/img/morel/ordi_notion.webp',
      '/img/morel/ORDI_WSH.webp'
    ],
    theme: { text: '#262626', background: '#FFFFFF' }
  },
  {
    id: '3',
    slug: 'plume',
    client: 'PLUME',
    category: 'Start-up Industrielle',
    year: '2023',
    description: "Déploiement global de la marque Plume, acteur français de mobilité électrique certifié OFG : stratégie, contenus, design et communication événementielle. Assistance de projets majeurs comme le salon Made in France et la collaboration avec Renault pour le lancement de la R5.",
    services: ['Communication 360°', 'Social Media', 'Community Management'],
    mainImage: './img/plume/19.webp',
    gallery: [
      '/img/plume/18.webp',
      '/img/plume/11.webp',
      '/img/plume/8.webp',
      '/img/plume/9.webp',
      '/img/plume/15.webp'
    ],
    theme: { text: '#FF0080', background: '#FFFBF5' }
  },
  {
    id: '4',
    slug: 'mobilier-restaure',
    client: 'MOBILIER RESTAURÉ',
    category: 'Artisanat',
    year: '2022',
    description: "Identité poétique et intemporelle pour Fais-moi un cygne : un univers naturel et élégant pour révéler le savoir-faire artisanal. Teintes douces, textures subtiles et direction artistique pensée pour incarner la beauté du geste et des pièces restaurées.",
    services: ['Identité Visuelle', 'Branding', 'Stratégie de Communication'],
    mainImage: '/img/cygne/stand.webp',
    gallery: [
      '/img/cygne/planss.webp',
      '/img/cygne/fond.webp',
      '/img/cygne/couleurs.webp',
      '/img/cygne/cartes.webp',
      '/img/cygne/logo.webp',
      '/img/cygne/plan.webp'
    ],
    theme: { text: '#FFD500', background: '#262626' }
  },
  {
    id: '5',
    slug: 'kyria-coach',
    client: 'KYRIA-COACH',
    category: 'Coaching Professionnel',
    year: '2023',
    description: "Identité lumineuse et méditerranéenne pour Kyria-Coach : univers doux, charte graphique cohérente, site web fluide et supports clairs. Une image professionnelle et bienveillante qui reflète la clarté et la transformation positive portées par Valérie Kyriakos.",
    services: ['Social Media', 'Communication 360°', 'Création de Marque', 'WebSite'],
    mainImage: './img/kyria/kyriaphoto1.webp',
    gallery: [
      '/img/kyria/style.webp',
      '/img/kyria/1.webp',
      '/img/kyria/3.webp',
      '/img/kyria/cards.webp',
      '/img/kyria/5.webp',
      '/img/kyria/font.webp'
    ],
    theme: { text: '#0B1DBB', background: '#FFFFFF' }
  },
  {
    id: '6',
    slug: 'sellerie-speed-broderie',
    client: 'SELLERIE SPEED BRODERIE',
    category: 'Broderie & Sellerie',
    year: '2024',
    description: "Identité énergique et maîtrisée pour Speed Broderie : un blason moderne mêlant univers textile, précision du sur-mesure et double expertise broderie/sellerie. Un symbole fort, lisible et fiable, incarnant technicité, rigueur et savoir-faire exigeant.",
    services: ['Identité Visuelle', 'Branding', 'Logo'],
    mainImage: '/img/broderie/1.webp',
    gallery: [
      '/img/broderie/2.webp',
      '/img/broderie/3.webp',
      '/img/broderie/4.webp',
      '/img/broderie/5.webp',
      '/img/broderie/6.webp'
    ],
    theme: { text: '#FFFFFF', background: '#111111' }
  }
];