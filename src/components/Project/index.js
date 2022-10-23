import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import imgProject from "../../img/work1.jpg";

const Project = () => {
  return (
    <div className="project" id="project">
      <p className="project-title-group">Galeries de mes projets</p>
      <div className="project-all-articles">
        <NavLink
          className="project-link"
          to="nomduprojet"
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
        </NavLink>
      </div>
    </div>
  );
};

export default Project;
