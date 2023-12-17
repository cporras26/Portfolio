"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImage from "./SliderImage";

var settings = {
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  speed: 2000,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  loop: true,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1760,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1460,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1290,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
};

function HomeSkillsSlider() {
  return (
    <div className="w-full absolute bottom-[-45px]">
      <div
        className="w-[80%] mx-auto bg-white rounded-2xl z-20 px-5 lg:px-14"
        style={{
          boxShadow: "#48AFDE 0px 15px 30px 5px"
        }}
      >
        <div className="md:py-6 sm:py-6 py-3 cursor-all-scroll">
          <Slider {...settings}>
            <SliderImage src="/reactjs.png" />
            <SliderImage src="/nextjs.png" />
            <SliderImage src="/netcore.webp" />
            <SliderImage src="/rabbitmq.png" />
            <SliderImage src="/kafka.png" />
            <SliderImage src="/postgresql.png" />
            <SliderImage src="/mongodb.png" />
            <SliderImage src="/docker.png" />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HomeSkillsSlider;
