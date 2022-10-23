import React from "react";
import "./style.scss";
import profil from "../../img/profil.jpeg";

const MyDescription = () => {
  return (
    <div className="myDescription" id="myDescription">
      <div className="myDescription-text">
        <p>
          Passionné de la technologie web depuis mon adolescence. Cette passion
          s'est développée grâce aux jeux vidéo et à l'informatique. J'ai donc
          décidé de me lancer dans l'aventure en mai 2022 en tant que
          Développeur web indépendant.
          <br />
          <br />
          Ayant un Bac Professionnel "Système Électronique Numérique". J'ai
          voulu acquérir de nouvelles compétences en réalisant deux formations
          chez O'Clock en 2020 et la SJT en 2021/2022.
          <br />
          <br />
          Développeur Full-stack spécialisé en HTML5, CSS3, PHP, Javascript,
          React, NodeJS, PostgreSQL, MySQL, Bootstrap 5 et SPIP. Je vous propose
          mes services, pour travailler ensemble sur vos projets numériques.
          <br />
          <br />
          J'aime découvrir, apprendre, expérimenter de nouvelles techniques au
          fur et à mesure de mes projets.
        </p>
      </div>
      <img src={profil} alt="présentation du développeur" />
    </div>
  );
};

export default MyDescription;
