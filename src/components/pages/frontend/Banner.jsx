import React from "react";
import { imgPath } from "../../helpers/function-general";
import { Play } from "lucide-react";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__wrapper relative">
        <img
          src={`${imgPath}/arcane.jpg`}
          alt=""
          className="w-full  max-h-[calc(100vh-80px)] object-cover"
        />
        <div className="banner__content absolute top-[25rem] left-[175px] text-white">
          <div className="banner__content--small flex gap-5 items-center opacity-70">
            <small>2024</small>
            <small>Action</small>
            <small>2 seasons</small>
            <small className="border p-[4px] text-[8px]">HD</small>
          </div>
          <h2 className="text-[8rem]">Arcane</h2>
          <p>asdsadas</p>
          <p className="pb-5">asdsadsad</p>

          <div className="banner__btn flex gap-5">
            <button className="flex gap-4 p-2 px-8 rounded-lg bg-[#E30A13] text-lg items-center">
              <Play fill="white" />
              Play
            </button>
            <button className="bg-gray-400 bg-opacity-10 p-2 px-8 rounded-lg text-lg">
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
