import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { HashLink as Link } from "react-router-hash-link";
import { Carousel } from "react-responsive-carousel";
import "./style.scss";
import 'animate.css';

const Slider = ({ carousel }) => {
  return (
    <div className="slider">
      {carousel.length > 0 && (
        <Carousel
          id="carousel"
          interval={5000}
          transitionTime={1000}
          swipeable={true}
          infiniteLoop={true}
          thumbWidth={120}
          showIndicators={false}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          animationHandler={"fade"}
          autoPlay={true}
          autoFocus={true}
        >
          {carousel.map((slide) => (
            <div key={slide.id}>
              <img src={slide.image} alt="" />
              {/* <div className="overlay">
                <h2 className="overlay__title">{slide.title}</h2>
                <p className="overlay__text">{slide.text}</p>
              </div> */}
            </div>
          ))}
        </Carousel>
      )}
      <div className="slider-zone">
        <h1 className="slider-zone-top animate__animated animate__fadeInUp">Jérémy THIEBAUT</h1>
        <hr className="slider-zone-middle animate__animated animate__fadeInLeft" />
        <h2 className="slider-zone-bottom animate__animated animate__fadeInDown">Développeur Web</h2>
      </div>
      <div className='slider-button_down'>
        <Link smooth to="/#navBar">
          <i className='fa fa-angle-down' aria-hidden='true'></i>
        </Link>
      </div>
    </div >
  );
};

export default Slider;
