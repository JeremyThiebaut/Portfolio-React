import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./style.scss";

const Slider = () => {
  const baseUrl = "http://react-responsive-carousel.js.org/assets/";

  const datas = [
    {
      id: 1,
      image: `${baseUrl}1.jpeg`,
      title: "Titre du slider 1",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde, nisi iste corporis esse eum. Aliquid similique cumque voluptas maxime aperiam. Consequuntur, aut modi. Praesentium!`,
    },
    {
      id: 2,
      image: `${baseUrl}2.jpeg`,
      title: "Titre du slider 2",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde, nisi iste corporis esse eum. Aliquid similique cumque voluptas maxime aperiam. Consequuntur, aut modi. Praesentium!`,
    },
    {
      id: 3,
      image: `${baseUrl}3.jpeg`,
      title: "Titre du slider 3",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde, nisi iste corporis esse eum. Aliquid similique cumque voluptas maxime aperiam. Consequuntur, aut modi. Praesentium!`,
    },
  ];

  return (
    <Carousel
      autoPlay
      interval={3000}
      swipeable={true}
      infiniteLoop
      thumbWidth={120}
      showIndicators={false}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      {datas.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt="" />
          <div className="overlay">
            <h2 className="overlay__title">{slide.title}</h2>
            <p className="overlay__text">{slide.text}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
