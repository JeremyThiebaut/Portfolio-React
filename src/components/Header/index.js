import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Header = () => {
  return (
    <div className="header">
      <p className="header-logo">Logo</p>
      <nav className="header-nav">
        <ul className="header-nav-ul">
          <li className="header-nav-list">
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li className="header-nav-list">
            <NavLink to="#">Description</NavLink>
          </li>
          <li className="header-nav-list">
            <NavLink to="/qdbnqdub">Mes documents</NavLink>
          </li>
          <li className="header-nav-list">
            <NavLink to="#">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;