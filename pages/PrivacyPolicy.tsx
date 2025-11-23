import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Reveal } from '../components/Reveal';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-lb-beige pt-32 pb-20 relative">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header & Back Link */}
        <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-lb-blue font-bold uppercase tracking-wider text-sm hover:text-lb-pink transition-colors mb-8">
                <ArrowLeft size={16} />
                Retour à l'accueil
            </Link>
            <Reveal>
                <h1 className="text-4xl md:text-6xl font-black text-lb-blue mb-4">
                    Politique de <span className="text-lb-pink font-script font-normal">Confidentialité</span>
                </h1>
            </Reveal>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-lb-blue/5 text-lb-grey leading-relaxed space-y-12">
            
            <div className="space-y-4 text-gray-600">
                <p>Cette politique de confidentialité a pour objectif de vous expliquer pourquoi je recueille vos données et comment je m'engage à les protéger.</p>
                <p>EI Lucie Boerez s’engage en faveur de la protection de vos données personnelles et de votre vie privée.</p>
                <p>À ce titre, et en application du Règlement Général de Protection des Données (ci-après dénommé « RGPD »), je vous communique ci-après les conditions dans lesquelles vos données personnelles sont appelées à être traitées par mes soins.</p>
            </div>

            {/* Section 1 */}
            <section>
                <h2 className="text-2xl font-black text-lb-blue mb-4">
                    1. Quelles données personnelles je traite ?
                </h2>
                <div className="space-y-4 text-gray-600">
                    <p>Je suis susceptible de recueillir et de conserver vos données à caractère personnel, notamment pour :</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Traiter et répondre à vos messages.</li>
                        <li>Créer et gérer l’accès à vos comptes.</li>
                        <li>Gérer vos inscriptions à nos newsletters.</li>
                        <li>Établir et assurer le suivi de la relation commerciale pouvant découler de vos messages.</li>
                        <li>Rédigez un avis/commentaire publié sur le site.</li>
                        <li>Percevoir votre paiement.</li>
                        <li>Assurer la comptabilité et la gestion.</li>
                        <li>Améliorer notre suivi et service client.</li>
                        <li>Gérer le bon fonctionnement et la personnalisation des services.</li>
                        <li>Vous envoyer des informations commerciales et publicitaires en fonction de vos préférences.</li>
                        <li>Détection d’attaques et recourt contentieux contre la fraude.</li>
                        <li>Mémoriser vos choix quant à l’utilisation des cookies.</li>
                        <li>Traiter et répondre à vos demandes d’exercice de droits.</li>
                        <li>Pour répondre aux exigences réglementaires en vigueur ou en cours d’adoption.</li>
                    </ul>
                    <p className="font-bold mt-4">Catégories des données :</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Des coordonnées (ex : nom, prénom, numéro de téléphone, email...)</li>
                        <li>Des informations techniques et de localisations générées dans le cadre de l’utilisation de nos services</li>
                    </ul>
                </div>
            </section>

            {/* Section 2 */}
            <section>
                <h2 className="text-2xl font-black text-lb-blue mb-4">
                    2. Fondement juridiques des traitements
                </h2>
                <div className="space-y-4 text-gray-600">
                    <p>Les traitements de données à caractère personnel mis en œuvre sont fondés :</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Soit sur le consentement de la personne concernée (Article 6.1.a du RGPD) pour tous les traitements qui nécessitent le recueil préalable du consentement. Dans les formulaires en ligne, les champs obligatoires sont marqués d’un astérisque. A défaut de réponse aux questions obligatoires, je ne serai pas en mesure de vous fournir les services demandés.</li>
                        <li>Soit pour l’exécution d’un contrat ou l’exécution de mesures précontractuelles.</li>
                        <li>Soit pour la poursuite d’un intérêt légitime (Article 6.1.e du RGPD).</li>
                        <li>Soit pour le respect d’une obligation légale ou règlementaire.</li>
                    </ul>
                    <p>Vos données sont conservées pour la durée nécessaire à l’accomplissement des finalités mentionnées ci-dessus.</p>
                    <p>La durée de conservation des données personnelles des Client.e.s dépend de la finalité concernée. Dans ce cadre, les données personnelles des Client.e.s sont conservées le temps nécessaire à l’accomplissement de leur requête. A défaut d’une quelconque réalisation, les données personnelles sont supprimées dans les délais recommandés par la Commission Nationale Informatique et Libertés (CNIL), au terme d’un délai de trois ans à compter de leur collecte, sous réserve :</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Des possibilités et obligations légales en matière d’archivage,</li>
                        <li>Des obligations de conservation de certaines données, à des fins probatoires, et/ou d’anonymisation de celles-ci.</li>
                    </ul>
                    <p>Les données personnelles du/de la Client.e collectées et traitées, pour les besoins d’exécution des offres, sont conservées pour la durée nécessaire à la gestion de la relation contractuelle. Par dérogation, les données personnelles requises pour à l’établissement de la preuve d’un droit ou d’un contrat sont archivées conformément aux dispositions légales (5 ou 10 ans après la fin de la relation commerciale selon le cas).</p>
                </div>
            </section>

            {/* Section 3 */}
            <section>
                <h2 className="text-2xl font-black text-lb-blue mb-4">
                    3. Quels sont les destinataires de vos données ?
                </h2>
                <div className="space-y-4 text-gray-600">
                    <p>Vos données personnelles sont destinées à EI Lucie Boerez et sont traitées par EI Lucie Boerez.</p>
                    <p>Les données personnelles vous concernant peuvent être transférées à nos sous-traitants techniques (au sens de l’article 4.8 du RGPD) de façon encadrée strictement. En cas de transfert, nous nous assurons que les sous-traitants respectent le RGPD et prennent des mesures technique et organisationnelle pour garantir la protection des données (art. 28 du RGPD).</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Analyse de trafic (comme Google Analytics)</li>
                    </ul>
                    <p>Les données personnelles des Client.e.s collectées sont hébergées en France.</p>
                </div>
            </section>

            {/* Section 4 */}
            <section>
                <h2 className="text-2xl font-black text-lb-blue mb-4">
                    4. Comment EI Lucie Boerez préserve la sécurité de vos données ?
                </h2>
                <div className="space-y-4 text-gray-600">
                    <p>Je mets en place toutes les mesures organisationnelles et techniques permettant d’assurer un niveau approprié de sécurité à vos données personnelles, et notamment d’éviter toute perte de confidentialité, d’intégrité ou d’accessibilité.</p>
                </div>
            </section>

            {/* Section 5 */}
            <section>
                <h2 className="text-2xl font-black text-lb-blue mb-4">
                    5. Quels sont vos droits sur vos données personnelles ?
                </h2>
                <div className="space-y-4 text-gray-600">
                    <p>Conformément à la Réglementation Applicable, vous disposez des droits suivants :</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Un droit de rectification :</strong> vous avez le droit d’obtenir la rectification des données inexactes vous concernant. Vous avez également le droit de compléter les données incomplètes vous concernant, en fournissant une déclaration complémentaire. En cas d’exercice de ce droit, je m'engage à communiquer toute rectification à l’ensemble des destinataires de vos données.</li>
                        <li><strong>Un droit d’effacement :</strong> dans certains cas, vous avez le droit d’obtenir l’effacement de vos données. Cependant, ceci n’est pas un droit absolu et je peux pour des raisons légales ou légitimes conserver ces données.</li>
                        <li><strong>Un droit à la limitation du traitement :</strong> dans certains cas, vous avez le droit d’obtenir la limitation du traitement sur vos données.</li>
                        <li><strong>Un droit à la portabilité des données :</strong> vous avez le droit de recevoir vos données que vous nous avez fournies, dans un format structuré, couramment utilisé et lisible par une machine, pour votre usage personnel ou pour les transmettre à un tiers de votre choix. Ce droit ne s’applique que lorsque le traitement de vos données est basé sur votre consentement, sur un contrat ou que ce traitement est effectué par des moyens automatisés.</li>
                        <li><strong>Un droit d’opposition au traitement :</strong> vous avez le droit de vous opposer à tout moment au traitement de vos données pour les traitements basés sur notre intérêt légitime, une mission d’intérêt public et ceux à des fins de prospection commerciale. Ceci n’est pas un droit absolu et nous pouvons pour des raisons légales ou légitimes refuser votre demande d’opposition.</li>
                        <li><strong>Le droit de retirer votre consentement à tout moment :</strong> vous pouvez retirer votre consentement au traitement de vos données lorsque le traitement est basé sur votre consentement. Le retrait du consentement ne compromet pas la licéité du traitement fondé sur le consentement effectué avant ce retrait.</li>
                        <li><strong>Le droit de déposer une plainte auprès d’une autorité de contrôle :</strong> vous avez le droit de contacter votre autorité de protection des données pour vous plaindre de nos pratiques de protection des données personnelles.</li>
                    </ul>
                    <p>En application du RGPD, les conditions d’exercice de ces droits peuvent varier selon la base de licéité du traitement mentionné dans le premier paragraphe.</p>
                    <p>Je donnerais suite à tout exercice de droit dans les meilleurs délais et en tout état de cause dans un délai de 30 jours à compter de la réception de la demande.</p>
                    <p>Je me réserve le droit :</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>De demander une preuve de l’identité du demandeur en cas de doute raisonnable sur cette dernière et ce afin de respecter son obligation de confidentialité,</li>
                        <li>De prolonger le délai de réponse de deux mois, informant alors le demandeur de cette prolongation et des motifs du report dans un délai d’un mois à compter de la réception de la demande,</li>
                        <li>De refuser de répondre à un exercice de droit si celui-ci était considéré comme abusif (au vu de leur nombre, de leur caractère répétitif ou systématique).</li>
                    </ul>
                </div>
            </section>

            {/* Section 6 */}
            <section>
                <h2 className="text-2xl font-black text-lb-blue mb-4">
                    6. Qui contacter pour toutes les demandes liées au RGPD ?
                </h2>
                <div className="space-y-4 text-gray-600">
                    <p>Pour exercer vos droits, vous pouvez me contacter :</p>
                    <p className="font-bold text-lb-blue">
                        Lucie Boerez<br/>
                        EI Lucie Boerez<br/>
                        SIRET : 92848079700028<br/>
                        Adresse : 2 Rue Edmond Delbassée 59830 Bourghelles<br/>
                        Téléphone : 0624141099<br/>
                        Directeur de la publication : Lucie Boerez
                    </p>
                    <p>Si, en dépit de mes efforts et de mes engagements, vous estimiez que vos droits concernant vos données personnelles n’étaient pas respectés, vous pouvez adresser une réclamation auprès de la Commission Nationale Informatique et Libertés : CNIL 3 Place de Fontenoy TSA 80715 75334 Paris Cedex 07</p>
                </div>
            </section>

            {/* Section 7 */}
            <section>
                <h2 className="text-2xl font-black text-lb-blue mb-4">
                    7. Réserve de modification de la Politique de protection des données
                </h2>
                <div className="space-y-4 text-gray-600">
                    <p>La présente Politique de protection des données personnelles peut être amenée à évoluer. Elles ont été élaborées à partir d’un modèle libre qui peut être téléchargé sur le site https://donnees.net. Comme je développe constamment mes services, je me réserve le droit de modifier cette Politique de confidentialité, conformément aux dispositions légales en vigueur. Toute modification est publiée sur ce document en temps opportun. Nous vous conseillons de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications ou mises à jour apportées à ma politique de confidentialité.</p>
                </div>
            </section>

            {/* Cookies */}
            <section className="pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-black text-lb-blue mb-4">
                    Politique de Cookies
                </h2>
                <div className="space-y-4 text-gray-600">
                    <h3 className="text-xl font-bold mt-4">Qu’est-ce qu’un « cookie » ?</h3>
                    <p>Les cookies sont de petits fichiers texte qu’un site web enregistre sur votre ordinateur ou votre appareil mobile lorsque vous visitez le site.</p>
                    <p>Ils facilitent votre expérience en ligne en sauvegardant les informations de navigation. Grâce aux cookies, les sites peuvent vous garder connecté.e, se souvenir de vos préférences de site et vous proposer un contenu personnalisé. Les cookies peuvent également être utilisés pour établir des statistiques sur l’expérience de navigation et pour montrer des publicités ciblées.</p>
                    
                    <h3 className="text-xl font-bold mt-4">En général, les cookies peuvent être classés par :</h3>
                    
                    <h4 className="font-bold">Domaine :</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Les cookies de première partie</strong> sont émis par un site web qu’un utilisateur consulte directement.</li>
                        <li><strong>Les cookies tiers</strong> ne sont pas créés par le site web consulté, mais par un tiers comme Google Analytics, DoubleClick, Facebook, Twitter, LinkedIn, Youtube, Vimеo, etc.</li>
                    </ul>

                    <h4 className="font-bold">Objectif :</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Les cookies strictement nécessaires</strong> sont requis pour que le site web fonctionne correctement.</li>
                        <li><strong>Les cookies de préférences</strong> permettent à un site web de se souvenir des choix que vous avez faits dans le passé.</li>
                        <li><strong>Les cookies de statistiques</strong> aident le propriétaire du site web à collecter des données statistiques et à comprendre comment les visiteurs interagissent avec le site web.</li>
                        <li><strong>Les cookies marketing</strong> suivent l’activité en ligne de l’utilisateur pour aider les annonceurs à diffuser des publicités plus pertinentes.</li>
                    </ul>

                    <h4 className="font-bold">Durée :</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Les cookies de session</strong> qui sont effacés lorsque l’utilisateur ferme le navigateur.</li>
                        <li><strong>Les cookies persistants</strong> qui restent sur le dispositif de l’utilisateur pendant une certaine période de temps.</li>
                    </ul>

                    <h3 className="text-xl font-bold mt-4">Vos préférences concernant les cookies</h3>
                    <p>Quand vous arrivez pour la première fois sur le site, un bandeau cookie vous propose d’accepter ou de refuser les Cookies qui ne sont pas essentiels au fonctionnement du site. Vous pouvez refuser/ désactiver les Cookies à tout moment, à l’exception des Cookies nécessaires au fonctionnement stable du site. Vous avez la possibilité de modifier à tout moment vos préférences relatives à la gestion des cookies.</p>
                </div>
            </section>

        </div>
      </div>
    </div>
  );
};