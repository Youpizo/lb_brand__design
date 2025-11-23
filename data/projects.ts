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
    mainImage: './assets/groupebeaudeux/mockup1.png',
    gallery: [
      '/assets/groupebeaudeux/mockup2.png',
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
    category: "Cuisines & Aménagement d'intérieurs",
    year: '2024',
    description: "Transition du magasin de Marquette-lez-Lille vers l’enseigne Cuisines Morel : nouvelle image digitale, ligne éditoriale structurée et gestion des réseaux sociaux. Un accompagnement visant à renforcer une identité haut de gamme et fidèle aux valeurs de la Maison Morel.",
    services: ['Community Management', 'Direction Éditoriale', 'Social Media'],
    mainImage: './assets/morel/21.png',
    gallery: [
      '/assets/morel/iPhone_Mockup_5.png',
      '/assets/morel/24.png',
      '/assets/morel/27.png',
      '/assets/morel/ordi_notion.png',
      '/assets/morel/ORDI_WSH.png'
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
    description: "Identité poétique et intemporelle pour Fais-moi un cygne : un univers naturel et élégant pour révéler le savoir-faire artisanal. Teintes douces, textures subtiles et direction artistique pensée pour incarner la beauté du geste et des pièces restaurées.",
    services: ['Identité Visuelle', 'Branding', 'Stratégie de Communication'],
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
    description: "Identité lumineuse et méditerranéenne pour Kyria-Coach : univers doux, charte graphique cohérente, site web fluide et supports clairs. Une image professionnelle et bienveillante qui reflète la clarté et la transformation positive portées par Valérie Kyriakos.",
    services: ['Social Media', 'Communication 360°', 'Création de Marque', 'WebSite'],
    mainImage: './assets/kyria/kyriaphoto1.png',
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
    category: 'Broderie & Sellerie',
    year: '2024',
    description: "Identité énergique et maîtrisée pour Speed Broderie : un blason moderne mêlant univers textile, précision du sur-mesure et double expertise broderie/sellerie. Un symbole fort, lisible et fiable, incarnant technicité, rigueur et savoir-faire exigeant.",
    services: ['Identité Visuelle', 'Branding', 'Logo'],
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