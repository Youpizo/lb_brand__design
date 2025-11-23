import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Reveal } from '../components/Reveal';

export const MentionsLegales: React.FC = () => {
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
                    Mentions <span className="text-lb-pink font-script font-normal">Légales</span>
                </h1>
            </Reveal>
        </div>

        {/* Legal Content */}
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-lb-blue/5 text-lb-grey leading-relaxed space-y-12">
            
            {/* Section 1 */}
            <section>
                <h2 className="text-2xl font-black text-lb-blue mb-4 flex items-center gap-3">
                    <span className="bg-lb-yellow text-lb-blue w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                    Édition du site
                </h2>
                <div className="space-y-4 text-gray-600">
                    <p>
                        En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <a href="https://lucieboerez-branddesign.fr/" className="text-lb-pink font-bold hover:underline">https://lucieboerez-branddesign.fr/</a> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:
                    </p>
                    <p>
                        <strong>Propriétaire du site :</strong><br/>
                        Entrepreneur individuel : Boerez Lucie - EI Lucie Boerez : LB Brand Design<br/>
                        Contact : <a href="mailto:luboerez@hotmail.com" className="hover:text-lb-blue transition-colors">luboerez@hotmail.com</a><br/>
                        Adresse : 2 Rue Edmond Delbassée 59830 Bourghelles France.
                    </p>
                    <p>
                        <strong>Propriétaire, créateur, webmaster et responsable de publication :</strong><br/>
                        Lucie Boërez, demeurant au 2 Rue Edmond Delbassée 59830 Bourghelles, France.
                    </p>
                    <p>
                        <strong>Identification de l'entreprise :</strong><br/>
                        EI au capital social de € - SIREN : 928480797<br/>
                        Adresse postale : 2 Rue Edmond Delbassée 59830 Bourghelles France.
                    </p>
                    <p>
                        <strong>Hébergeur :</strong><br/>
                        Hostinger 61 Lordou Vironos Street, 6023 Larnaca, Chypre.
                    </p>
                    <p>
                        <strong>Délégué à la protection des données :</strong><br/>
                        Lucie Boerez - <a href="mailto:luboerez@hotmail.com" className="hover:text-lb-blue transition-colors">luboerez@hotmail.com</a>
                    </p>
                </div>
            </section>

            {/* Section 2 */}
            <section>
                <h2 className="text-2xl font-black text-lb-blue mb-4 flex items-center gap-3">
                    <span className="bg-lb-yellow text-lb-blue w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                    Propriété intellectuelle et contrefaçons
                </h2>
                <div className="space-y-4 text-gray-600">
                    <p>
                        EI Lucie Boerez est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
                    </p>
                    <p>
                        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de EI Lucie Boerez.
                    </p>
                    <p>
                        Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                    </p>
                </div>
            </section>

            {/* Section 3 */}
            <section>
                <h2 className="text-2xl font-black text-lb-blue mb-4 flex items-center gap-3">
                    <span className="bg-lb-yellow text-lb-blue w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                    Limitations de responsabilité
                </h2>
                <div className="space-y-4 text-gray-600">
                    <p>
                        EI Lucie Boerez ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site <a href="https://lucieboerez-branddesign.fr/" className="text-lb-pink font-bold hover:underline">https://lucieboerez-branddesign.fr/</a>.
                    </p>
                    <p>
                        EI Lucie Boerez décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur <a href="https://lucieboerez-branddesign.fr/" className="text-lb-pink font-bold hover:underline">https://lucieboerez-branddesign.fr/</a>.
                    </p>
                    <p>
                        EI Lucie Boerez s’engage à sécuriser au mieux le site, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.
                    </p>
                    <p>
                        Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. EI Lucie Boerez se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.
                    </p>
                    <p>
                        Le cas échéant, EI Lucie Boerez se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).
                    </p>
                </div>
            </section>

            {/* Section 4 */}
            <section>
                <h2 className="text-2xl font-black text-lb-blue mb-4 flex items-center gap-3">
                    <span className="bg-lb-yellow text-lb-blue w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                    CNIL et gestion des données personnelles
                </h2>
                <div className="space-y-4 text-gray-600">
                    <p>
                        Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site <a href="https://lucieboerez-branddesign.fr/" className="text-lb-pink font-bold hover:underline">https://lucieboerez-branddesign.fr/</a> dispose d’un droit d’accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message au délégué à la protection des données : Lucie Boerez - <a href="mailto:luboerez@hotmail.com" className="hover:text-lb-blue transition-colors">luboerez@hotmail.com</a>.
                    </p>
                    <p>
                        Pour plus d'informations sur la façon dont je traite vos données (type de données, finalité, destinataire...), lisez notre <Link to="/mentions-legales" className="text-lb-pink font-bold hover:underline">politique de confidentialité</Link>.
                    </p>
                </div>
            </section>

             {/* Section 5 */}
             <section>
                <h2 className="text-2xl font-black text-lb-blue mb-4 flex items-center gap-3">
                    <span className="bg-lb-yellow text-lb-blue w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
                    Liens hypertextes et cookies
                </h2>
                <div className="space-y-4 text-gray-600">
                    <p>
                        Le site <a href="https://lucieboerez-branddesign.fr/" className="text-lb-pink font-bold hover:underline">https://lucieboerez-branddesign.fr/</a> contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d’autres sites vers <a href="https://lucieboerez-branddesign.fr/" className="text-lb-pink font-bold hover:underline">https://lucieboerez-branddesign.fr/</a>.
                    </p>
                    <p>
                        La navigation sur le site est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur.
                    </p>
                    <p>
                        Un "cookie" est un fichier de petite taille qui enregistre des informations relatives à la navigation d’un utilisateur sur un site. Les données ainsi obtenues permettent d'obtenir des mesures de fréquentation, par exemple. Vous avez la possibilité d’accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement.
                    </p>
                    <p>
                        Les cookies sont enregistrés pour une durée maximale de 3 mois.
                    </p>
                    <p>
                         Pour plus d'informations sur la façon dont nous faisons usage des cookies, lisez notre <Link to="/mentions-legales" className="text-lb-pink font-bold hover:underline">politique de confidentialité</Link>.
                    </p>
                </div>
            </section>

             {/* Section 6 */}
             <section>
                <h2 className="text-2xl font-black text-lb-blue mb-4 flex items-center gap-3">
                    <span className="bg-lb-yellow text-lb-blue w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>
                    Droit applicable et attribution de juridiction
                </h2>
                <div className="space-y-4 text-gray-600">
                    <p>
                        Tout litige en relation avec l’utilisation du site <a href="https://lucieboerez-branddesign.fr/" className="text-lb-pink font-bold hover:underline">https://lucieboerez-branddesign.fr/</a> est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Lille.
                    </p>
                </div>
            </section>

        </div>
      </div>
    </div>
  );
};