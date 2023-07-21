import React, { useState } from "react";
import RightSlider from "./rightSlider";
//import images
import { SliderData } from "./sliderData";
import Image from "next/image";
import show from "../../../assets/icon-show.svg";
import flag from "../../../assets/icon-flag.svg";
import love from "../../../assets/icon-love.svg";
import shair from "../../../assets/icon-shair.svg";
import AboutSlider from "./aboutSlider";

const Gallery = () => {
  const [current, setCurrent] = useState(SliderData[0]);

  return (
    <div className="main-images grid max-sm:grid-cols-4 max-lg:grid-cols-4 max-xl:grid-cols-6 grid-cols-8">
      <div>
        <RightSlider setCurrent={setCurrent} />
      </div>
      <div className="max-sm:grid-cols-7  max-lg:col-span-3 max-xl:col-span-5 col-span-7 shadow-box relative">
        <img
          src={current.image}
          className="max-sm:h-[170px] max-sm:w-[100%] lg:w-[100%] lg:h-[400px] rounded-[5px]  "
        />
        <div className="about-img absolute top-3 right-2 z-10 px-2 py-1 text-white rounded-[px] bg-Filter flex">
          <span className="max-sm:text-sm px-2 border-l-2 border-l-slate-100">
            02:00
          </span>
          <span className="max-sm:text-sm flex mx-2  	">
            <Image src={show} alt="show" className="ml-2 " /> 3000{" "}
          </span>
        </div>
        <div className="about-img absolute top-2 left-1 z-10 px-2 py-1 text-white rounded-[px]  flex">
          <Image
            src={flag}
            alt="show"
            className="max-sm:ml-1 ml-2 bg-Filter max-sm:h-[30px] max-sm:w-[30px] h-[45px] w-[45px] p-1 rounded-[30px] md:p-3 cursor-pointer"
          />
          <Image
            src={love}
            alt="show"
            className="max-sm:ml-1 ml-2 bg-Filter max-sm:h-[30px] max-sm:w-[30px] h-[45px] w-[45px] p-1 rounded-[30px] md:p-3 cursor-pointer"
          />
          <Image
            src={shair}
            alt="show"
            className="max-sm:ml-1 ml-2 bg-Filter max-sm:h-[30px] max-sm:w-[30px] h-[45px] w-[45px] p-1 rounded-[30px] md:p-3 cursor-pointer"
          />
        </div>
        <AboutSlider />
      </div>
    </div>
  );
};

export default Gallery;
