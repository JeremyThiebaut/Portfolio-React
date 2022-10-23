import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./style.scss";

//

const Header = () => {
  return (
    <div className="header">
      <p className="header-logo">Logo</p>
      <nav className="header-nav">
        <ul className="header-nav-ul">
          <li className="header-nav-list">
            <Link smooth to="/#">
              Accueil
            </Link>
          </li>
          <li className="header-nav-list">
            <Link smooth to="/#myDescription">
              Description
            </Link>
          </li>
          <li className="header-nav-list">
            <Link smooth to="/#myDocuments">
              Mes documents
            </Link>
          </li>
          <li className="header-nav-list">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
