import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <NavLink className="footer-mention" to="/mention">
        Mention légales
      </NavLink>
      <span className="footer-text">© Copyright 2022 - JTDev Freelance</span>
      <span className="footer-text">
        SIRET : <strong>820 647 204 00024</strong>
      </span>
    </div>
  );
};

export default Footer;
