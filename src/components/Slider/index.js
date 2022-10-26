import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./style.scss";

const Slider = ({ carousel }) => {
  return (
    <Carousel
      id="carousel"
      autoPlay
      interval={5000}
      transitionTime={1000}
      swipeable={true}
      infiniteLoop
      thumbWidth={120}
      showIndicators={false}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      animationHandler={"fade"}
    >
      {carousel.map((slide) => (
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
