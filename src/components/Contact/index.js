import React from "react";
import "./style.scss";
import NavBar from "../NavBar";
import BackToTopButton from "../BackToTopButton";

const Contact = () => {
  return (
    <div className="contact">
      <BackToTopButton />
      <NavBar />
      <div className="contact-left">
        <div className="contact-left-container"></div>
      </div>
    </div>
  );
};

export default Contact;
