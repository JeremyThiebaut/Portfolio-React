import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./style.scss";

//

const NavBar = () => {
  return (
    <div className="navBar" id="navBar">
      <p className="navBar-logo">Logo</p>
      <nav className="navBar-nav">
        <ul className="navBar-nav-ul">
          <li className="navBar-nav-list">
            <Link smooth to="/#">
              Accueil
            </Link>
          </li>
          <li className="navBar-nav-list">
            <Link smooth to="/#myDescription">
              Description
            </Link>
          </li>
          <li className="navBar-nav-list">
            <Link smooth to="/#project">
              Mes projets
            </Link>
          </li>
          <li className="navBar-nav-list">
            <Link smooth to="/#myDocuments">
              Mes documents
            </Link>
          </li>
          <li className="navBar-nav-list">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
