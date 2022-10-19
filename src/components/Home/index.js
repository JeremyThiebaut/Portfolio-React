import React from "react";
import "./style.scss";
import Header from "../Header";
import MyDescription from "../MyDescription";
import Project from "../Project";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <MyDescription />
      <Project />
    </div>
  );
};

export default Home;
