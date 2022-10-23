import React from "react";
import "./style.scss";
import NavBar from "../NavBar";
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
      <NavBar />
      <MyDescription />
      <Project />
      <MyDocuments />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Home;
