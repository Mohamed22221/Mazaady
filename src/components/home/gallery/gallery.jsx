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
    <div className="main-images grid grid-cols-8">
      <div >
        <RightSlider setCurrent={setCurrent} />
      </div>
      <div className="col-span-7 shadow-box relative">
        <img
          src={current.image}
          className="w-[100%] h-[400px] rounded-[5px]  "
        />
        <div className="about-img absolute top-3 right-2 z-10 px-2 py-1 text-white rounded-[px] bg-Filter flex">
          <span className=" px-2 border-l-2 border-l-slate-100">02:00</span>
          <span className="flex mx-2  	">
            <Image src={show} alt="show" className="ml-2 " /> 3000{" "}
          </span>
        </div>
        <div className="about-img absolute top-2 left-2 z-10 px-2 py-1 text-white rounded-[px]  flex">
          <Image
            src={flag}
            alt="show"
            className="ml-2 bg-Filter h-[45px] w-[45px] rounded-[30px] p-3 cursor-pointer"
          />
          <Image
            src={love}
            alt="show"
            className="ml-2 bg-Filter h-[45px] w-[45px] rounded-[30px] p-3 cursor-pointer"
          />
          <Image
            src={shair}
            alt="show"
            className="ml-2 bg-Filter h-[45px] w-[45px] rounded-[30px] p-3 cursor-pointer"
          />
        </div>
        <AboutSlider />
      </div>
    </div>
  );
};

export default Gallery;
