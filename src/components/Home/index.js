import React from "react";
import "./style.scss";
import NavBar from "../NavBar";
import MyDescription from "../../container/MyDescription";
import Project from "../../container/Project";
import MyDocuments from "../MyDocuments";
import Footer from "../Footer";
import BackToTopButton from "../BackToTopButton";
import Slider from "../../container/Slider";

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
