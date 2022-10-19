import React from "react";
import "./style.scss";
import imgProject from "../../img/work1.jpg";

const Project = () => {
  return (
    <div className="project">
      <p className="project-title-group">Galeries de mes projets</p>
      <div className="project-all-articles">
        <a
          className="project-link"
          href="nomduprojet"
          target="_blank"
          aria-label="Voir la page de nomduprojet"
        >
          <div className="project-article">
            <div className="project-container-logo">
              <img
                className="project-logo"
                src={imgProject}
                alt="logo du projet"
              />
            </div>
            <span className="project-title">Nom du projet</span>
            <span className="project-description">Description du projet</span>
            <span className="project-title-right">Nom du projet</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
