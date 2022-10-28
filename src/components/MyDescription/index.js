import React from "react";
import "./style.scss";
import profil from "../../img/profil.jpeg";

const MyDescription = ({ myDescription }) => {
  return (
    <div className="myDescription" id="myDescription">
      <div className="myDescription-container">
        {myDescription.map((description) => (
          <p className="myDescription-text" key={myDescription.id}>{description.text}</p>
        ))}
      </div>
      <img src={profil} alt="présentation du développeur" />
    </div >
  );
};

export default MyDescription;
