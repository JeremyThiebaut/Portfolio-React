import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Project = ({ project }) => {
  return (
    <div className="project" id="project">
      <p className="project-title-group">Galeries de mes projets</p>
      <div className="project-all-articles">
        {project.map((prod) => (
          <NavLink
            key={prod.id}
            className="project-link"
            to={prod.link}
            target="_blank"
            aria-label="Voir la page de nomduprojet"
          >
            <div className="project-article">
              <div className="project-container-logo">
                <img
                  className="project-logo"
                  src={prod.picture}
                  alt="logo du projet"
                />
              </div>
              <span className="project-title">{prod.title}</span>
              <span className="project-description">{prod.description}</span>
              <span className="project-title-right">{prod.title}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Project;
