import React from "react";

const Prestations = () => {
  return (
    <div className="prestations" id="prestations">
      <h2>Prestations</h2>
      <div className="presta-container">
        <article className="arcticle1">
          <div className="images img-article1"></div>
          <h5>Location de sites internet</h5>
          <p>
            Cette prestation vous permet de disposer rapidement d'un site
            internet professionnel sans avoir à investir dès le départ et ainsi
            préserver votre trésorerie. <br />À partir de{" "}
            <strong>49€/mois</strong> pendant 1an.
            <details>
              <summary>Voir les détails de l'offre...</summary>
              Prestations comprises dans l'offre :
              <br />
              <br />
              ○ Création du site avec votre logo et vos couleurs.
              <br />
              ○ Prise en charge de l'hébergement du site.
              <br />
              ○ Création et achat du nom de domaine.
              <br />
              ○ Maintenance du site (ajout ou modification de contenu).
              <br />
              <br />
              Avec l'offre de location, vous pouvez racheter votre site web
              ainsi que le nom de domaine à tout moment avant la fin du contrat.
            </details>
          </p>
        </article>

        <article className="article2">
          <div className="images img-article2"></div>
          <h5>Création de sites internet</h5>
          <p>
            Je vous propose une solution de création de sites internet one page,
            site vitrine et e-commerce sur mesure pour répondre aux besoins de
            votre entreprise. <br />
            Je réalise aussi la refonte d'un site internet.
            <details>
              <summary>Voir les détails de l'offre...</summary>
              3 prestations différentes : <br /> <br />○ Site one page à partir
              de <strong>500€</strong> <br />○ Site vitrine à partir de{" "}
              <strong>900€</strong> <br />○ Site e-commerce à partir de{" "}
              <strong>2100€</strong> <br /> <br />
              Je travaille avec vous pour comprendre vos besoins spécifiques et
              concevoir un site web qui reflète l'identité de votre entreprise
              ou de votre marque.
            </details>
          </p>
        </article>

        <article className="article3">
          <div className="images img-article3"></div>
          <h5>Maintenance de sites internet</h5>
          <p>
            Votre site web est un élément crucial de votre présence en ligne, il
            est important de le maintenir à jour pour assurer son bon
            fonctionnement. <br />
            Je vous propose un service de maintenance pour vous aider à gérer
            les mises à jour, les sauvegardes, les corrections de bugs et les
            améliorations de contenu.
            <details>
              <summary>Voir les détails de l'offre...</summary>
              2 forfaits différents : <br /> <br />
              ○ Forfait 1 = Mises à jour du contenu (ajout ou modification), à partir de <strong>300€</strong><br />
              ○ Forfait 2 = Optimisation SEO (suivi du trafic et des performances du site), à partir de <strong>500€</strong>
            </details>
          </p>
        </article>

        <article className="article4">
          <div className="images img-article4"></div>
          <h5>Création de réseaux sociaux</h5>
          <p>
            Pour promouvoir votre entreprise ou votre marque et pour communiquer
            avec votre audience, votre présence en ligne est indispensable !{" "}
            <br />
            Que vous soyez une entreprise, une organisation ou une association,
            un réseau social est un bon moyen pour vous aider à développer votre
            présence en ligne.
            <details>
              <summary>Voir les détails de l'offre...</summary>
              3 forfaits différents : <br /> <br />
              ○ Forfait 1 = 1 à 3 réseaux à partir de <strong>40€</strong> <br />
              ○ Forfait 2 = 4 à 5 réseaux à partir de <strong>110€</strong> <br />
              ○ Forfait 3 = Plus de 5 réseaux à partir de <strong>150€</strong> <br /> <br />
              Cette prestation comprend la création des réseaux sociaux que vous
              désirez, l'insertion des photos de profils et bannières, votre
              biographie ainsi que la complétion des différentes rubriques du
              réseau.
            </details>
          </p>
        </article>
      </div>
      <p className="newsletter-link">
        {" "}
       <a href="#connect"><button className="presta-button">Contactez-moi</button></a> 
     </p>
    </div>
  );
};

export default Prestations;
