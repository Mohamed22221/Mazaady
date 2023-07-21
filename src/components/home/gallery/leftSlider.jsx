import React from "react";
import Image from "next/image";
import AboutSlider from "./aboutSlider";
//import images
import show from "../../../assets/icon-show.svg";
import flag from "../../../assets/icon-flag.svg";
import love from "../../../assets/icon-love.svg";
import shair from "../../../assets/icon-shair.svg";

const LeftSlider = ({ current }) => {
  return (
    <div className="shadow-box relative">
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
          alt="flag"
          className="max-sm:ml-1 ml-2 bg-Filter max-sm:h-[30px] max-sm:w-[30px] h-[45px] w-[45px] p-1 rounded-[30px] md:p-3 cursor-pointer"
        />
        <Image
          src={love}
          alt="love"
          className="max-sm:ml-1 ml-2 bg-Filter max-sm:h-[30px] max-sm:w-[30px] h-[45px] w-[45px] p-1 rounded-[30px] md:p-3 cursor-pointer"
        />
        <Image
          src={shair}
          alt="shair"
          className="max-sm:ml-1 ml-2 bg-Filter max-sm:h-[30px] max-sm:w-[30px] h-[45px] w-[45px] p-1 rounded-[30px] md:p-3 cursor-pointer"
        />
      </div>
      <AboutSlider />
    </div>
  );
};

export default LeftSlider;
