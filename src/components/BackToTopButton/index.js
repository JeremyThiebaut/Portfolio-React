import React from "react";
import { useEffect, useState } from "react";
import "./style.scss";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="backToTopButton">
      {backToTopButton && (
        <i className="fa fa-angle-up backToTopButton-logo" aria-hidden="true" onClick={scrollUp}></i>
      )}
    </div>
  );
};

export default BackToTopButton;
