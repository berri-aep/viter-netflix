import React from 'react'
import SliderItem from './SliderItem';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderBanner = () => {
    const sliderBannerArray = [
      {
        img: "sabrina_cover.jpg",
        title: "Sabrina",
        year: "2024",
        duration: "4 seasons",
        category: "Horror",
      },
      {
        img: "wednesday_cover.jpg",
        title: "Wednesday",
        year: "2024",
        duration: "1 season",
        category: "Horror",
      },
      {
        img: "girl-from-nowhere_cover.jpg",
        title: "Girl From Nowhere",
        year: "2024",
        duration: "2 seasons",
        category: "Horror",
      },
      {
        img: "criminalMinds_cover.jpg",
        title: "Criminal Minds",
        year: "2024",
        duration: "17 seasons",
        category: "Action",
      },
      {
        img: "moneyheist_cover.png",
        title: "Money Heist",
        year: "2024",
        duration: "5 seasons",
        category: "Action",
      },
    ];

    const sliderBanner2Array = [
      {
        img: "moneyheist_cover.png",
        title: "Money Heist",
        year: "2024",
        duration: "45mins",
        category: "Action",
      },
    ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <section className="slider-banner py-10 bg-[#0D1017] ">
      <div className="container pb-[5rem]">
        <h2 className="text-white pb-4">Top Shows</h2>
        <Slider {...settings}>
          {sliderBannerArray.map((item, key) => (
            <>
              <SliderItem item={item} key={key} />
            </>
          ))}
        </Slider>
      </div>
      <div className="container">
        <h2 className="text-white pb-4">Top Shows</h2>
        <Slider {...settings}>
          {sliderBannerArray.map((item, key) => (
            <>
              <SliderItem item={item} key={key} />
            </>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SliderBanner