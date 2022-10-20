import React from "react";
import "./style.scss";
import Header from "../Header";
import MyDescription from "../MyDescription";
import Project from "../Project";
import MyDocuments from "../MyDocuments";
import Footer from "../Footer";
import BackToTopButton from "../BackToTopButton";
import Slider from "../Slider";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Header />
      <MyDescription />
      <Project />
      <MyDocuments />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Home;
