import React from "react";
import "./style.scss";
import Header from "../Header";
import MyDescription from "../MyDescription";
import Project from "../Project";
import MyDocuments from "../MyDocuments";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <MyDescription />
      <Project />
      <MyDocuments />
      <Footer />
    </div>
  );
};

export default Home;
