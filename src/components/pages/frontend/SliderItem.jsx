import React from "react";
import { imgPath } from "../../helpers/function-general";

const SliderItem = ({ item, key }) => {
  return (
    <div className="sliderItem relative flex justify-center" key={key}>
      <div className="slider_cover ">
        <img
          src={`${imgPath}/${item.img}`}
          alt=""
          className="h-[400px] w-[300px] object-cover "
        />
      </div>
      <div className="slider-content absolute top-0 left-[2.2rem] bg-[#0D1017] h-full w-[81%] opacity-0 hover:opacity-80 duration-500 cursor-pointer">
        <span className='content-[""] text-white top-[10rem] left-10 absolute '>
          <div className="slider__content--small flex gap-5 items-center opacity-70">
            <small>{item.year}</small>
            <small>{item.category}</small>
            <small>{item.duration}</small>
            <small className="border p-[4px] text-[8px]">HD</small>
          </div>
          <h2 className="text-[2rem] ">{item.title}</h2>
          <p>asdsadas</p>
          <p className="pb-5">asdsadsad</p>
        </span>
      </div>
    </div>
  );
};

export default SliderItem;
