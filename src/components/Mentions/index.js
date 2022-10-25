import React from "react";
import "./style.scss";
import NavBar from "../NavBar";
import BackToTopButton from "../BackToTopButton";
import BackgroundImage from "../../img/work1.jpg";
import Footer from "../Footer";
import { NavLink } from "react-router-dom";

const Mention = () => {
  return (
    <div className="mention">
      <BackToTopButton />
      <NavBar />
      <img className="mention_picture" src={BackgroundImage} alt="" />
      <div className="mention_container">
        <h2>Mentions légales</h2>
        <ol>
          <li>Présentation du site :</li>
          <p>
            Conformément aux dispositions des articles 6-III et 19 de la Loi n°
            2004-575 du 21 juin 2004 pour la Confiance dans l’économie
            numérique, dite L.C.E.N., nous portons à la connaissance des
            utilisateurs et visiteurs du site :{" "}
            <NavLink to="/">jtdev.fr</NavLink> les informations suivantes :
          </p>
          <p>Informations légales :</p>
          <p>Statut du propriétaire : société</p>
          <p>Préfixe : Micro entreprise</p>
          <p>Adresse : Contacter admin</p>
          <p>
            Tél :{" "}
            <a className="" href="tel:+33 6 58 92 66 48">
              +33 6 58 92 66 48
            </a>
          </p>
          <p>SIRET : 820 647 204 00024</p>
          <p>
            Adresse de courier éléctronique :{" "}
            <a href="mailto:contact@jtdev.fr">contact@jtdev.fr</a>
          </p>
          <p>Le créateur du site est : THIEBAUT Jérémy</p>
          <p>Le Résponsable de la publication est : THIEBAUT Jérémy</p>
          <p>
            Contactez le responsable de la publication :{" "}
            <a href="mailto:contact@jtdev.fr">contact@jtdev.fr</a>
          </p>
          <p>Le responsable de la publication est une personne physique</p>
          <p>Le Webmaster est : Jérémy THIEBAUT</p>
          <p>
            Contactez le Webmaster :{" "}
            <a href="mailto:contact@jtdev.fr">contact@jtdev.fr</a>
          </p>
          <p>Rédaction : THIEBAUT Jérémy</p>
          <p>L’hebergeur du site est :</p>
          <p>SARL o2switch</p>
          <p>222-224 Boulevard Gustave Flaubert</p>
          <p>63000 Clermont-Ferrand</p>
          <li>Description des services fournis</li>
          <p>
            Le site <NavLink to="/">jtdev.fr</NavLink> a pour objet de fournir
            une information concernant l’ensemble des activités de la société.
          </p>
          <p>
            Le proprietaire du site s’efforce de fournir sur le site{" "}
            <NavLink to="/">jtdev.fr</NavLink> des informations aussi précises
            que possible. Toutefois, il ne pourra être tenue responsable des
            omissions, des inexactitudes et des carences dans la mise à jour,
            qu’elles soient de son fait ou du fait des tiers partenaires qui lui
            fournissent ces informations.
          </p>
          <p>
            Tous les informations proposées sur le site{" "}
            <NavLink to="/">jtdev.fr</NavLink> sont données à titre indicatif,
            sont non exhaustives, et sont susceptibles d’évoluer. Elles sont
            données sous réserve de modifications ayant été apportées depuis
            leur mise en ligne.
          </p>
          <li>Propriété intellectuelle et contrefaçons :</li>
          <p>
            Le proprietaire du site est propriétaire des droits de propriété
            intellectuelle ou détient les droits d’usage sur tous les éléments
            accessibles sur le site, notamment les textes, images, graphismes,
            logo, icônes, sons, logiciels…
          </p>
          <p>
            Toute reproduction, représentation, modification, publication,
            adaptation totale ou partielle des éléments du site, quel que soit
            le moyen ou le procédé utilisé, est interdite, sauf autorisation
            écrite préalable à l’email :{" "}
            <a href="mailto:contact@jtdev.fr">contact@jtdev.fr</a>
          </p>
          <p>
            Toute exploitation non autorisée du site ou de l’un quelconque de
            ces éléments qu’il contient sera considérée comme constitutive d’une
            contrefaçon et poursuivie conformément aux dispositions des articles
            L.335-2 et suivants du Code de Propriété Intellectuelle.
          </p>
          <li>Liens hypertextes :</li>
          <p>
            Le site <NavLink to="/">jtdev.fr</NavLink> contient un certain
            nombre de liens hypertextes vers d’autres sites (partenaires,
            informations …) mis en place avec l’autorisation du proprietaire du
            site . Cependant, le proprietaire du site n’a pas la possibilité de
            vérifier le contenu des sites ainsi visités et décline donc toute
            responsabilité de ce fait quand aux risques éventuels de contenus
            illicites.
          </p>
          <li>
            Protection des biens et des personnes – gestion des données
            personnelles :
          </li>
          <p>
            Utilisateur : Internaute se connectant, utilisant le site susnommé :{" "}
            <NavLink to="/">jtdev.fr</NavLink>
          </p>
          <p>
            En France, les données personnelles sont notamment protégées par la
            loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004,
            l’article L. 226-13 du Code pénal et la Directive Européenne du 24
            octobre 1995.
          </p>
          <p>
            Sur le site <NavLink to="/">jtdev.fr</NavLink>, le proprietaire du
            site ne collecte des informations personnelles relatives à
            l’utilisateur que pour le besoin de certains services proposés par
            le site <NavLink to="/">jtdev.fr</NavLink>. L’utilisateur fournit
            ces informations en toute connaissance de cause, notamment lorsqu’il
            procède par lui-même à leur saisie. Il est alors précisé à
            l’utilisateur du site <NavLink to="/">jtdev.fr</NavLink>{" "}
            l’obligation ou non de fournir ces informations.
          </p>
          <p>
            Conformément aux dispositions des articles 38 et suivants de la loi
            78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et
            aux libertés, tout utilisateur dispose d’un droit d’accès, de
            rectification, de suppression et d’opposition aux données
            personnelles le concernant. Pour l’exercer, adressez votre demande à{" "}
            <NavLink to="/">jtdev.fr</NavLink> par email : email du webmaster ou
            en effectuant sa demande écrite et signée, accompagnée d’une copie
            du titre d’identité avec signature du titulaire de la pièce, en
            précisant l’adresse à laquelle la réponse doit être envoyée.
          </p>
          <p>
            Aucune information personnelle de l’utilisateur du site{" "}
            <NavLink to="/">jtdev.fr</NavLink> n’est publiée à l’insu de
            l’utilisateur, échangée, transférée, cédée ou vendue sur un support
            quelconque à des tiers. Seule l’hypothèse du rachat du site{" "}
            <NavLink to="/">jtdev.fr</NavLink> à le proprietaire du site et de
            ses droits permettrait la transmission des dites informations à
            l’éventuel acquéreur qui serait à son tour tenu de la même
            obligation de conservation et de modification des données vis à vis
            de l’utilisateur du site <NavLink to="/">jtdev.fr</NavLink>.
          </p>
          <p>
            Les bases de données sont protégées par les dispositions de la loi
            du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996
            relative à la protection juridique des bases de données.
          </p>
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default Mention;
