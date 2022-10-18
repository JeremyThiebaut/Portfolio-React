import React from "react";
import "./style.scss";
import Header from "../Header";
import MyDescription from "../MyDescription";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <MyDescription />
    </div>
  );
};

export default Home;
