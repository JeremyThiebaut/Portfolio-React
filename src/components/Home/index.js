import React from "react";
import "./style.scss";
import Header from "../Header";
import MyDescription from "../MyDescription";
import Project from "../Project";
import MyDocuments from "../MyDocuments";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <MyDescription />
      <Project />
      <MyDocuments />
    </div>
  );
};

export default Home;
