import React from "react";
import Slider from "react-slick";
import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{ overflow: "hidden", height: `100vh`, background: "lightpink" }}
    >
      <Slider {...settings}>
        <div
          className="carrousel_image"
          style={{ background: `url(${slide_one})`, height: "inherit" }}
        >
          <img src={slide_one} alt="" />
        </div>
        <div
          className="carrousel_image"
          style={{ background: `url(${slide_two})`, height: "inherit" }}
        >
          <img src={slide_two} alt="" />
        </div>
        <div
          className="carrousel_image"
          style={{ background: `url(${slide_three})`, height: "inherit" }}
        >
          <img src={slide_three} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
