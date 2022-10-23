// import React from "react";
import React from "react";
import "./style.scss";
import url from "../../pdf/CV-Thiebaut-Jeremy.pdf";
import image from "../../pdf/CV-Thiebaut-Jeremy.png";

const MyDocuments = () => {
  return (
    <div className="myDocuments" id="myDocuments">
      <h2 className="myDocuments-title">Mes documents</h2>
      <div className="myDocuments-all-pdf">
      <a
          className="myDocuments-all-pdf-link"
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          <span className="myDocuments-all-pdf-link-description">
            description du pdf
          </span>
          <hr />
          <div className="myDocuments-all-pdf-link-pictureContainer">
            <img
              className="myDocuments-all-pdf-link-picture"
              src={image}
              alt=""
            />
          </div>
          <hr />
          <span className="myDocuments-all-pdf-link-description">
            titre du pdf (taille)
          </span>
        </a>
      </div>
    </div>
  );
};

export default MyDocuments;
