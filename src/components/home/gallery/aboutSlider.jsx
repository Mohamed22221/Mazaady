import React from "react";
import person from "../../../assets/person.jpg";
import heart from "../../../assets/icon-heart.svg";
import starLight from "../../../assets/star-light.svg";
import starGold from "../../../assets/star-gold.svg";

import Image from "next/image";
const AboutSlider = () => {
  return (
    <div className="p-2">
      {/*details person */}
      <div className="flex items-center relative">
        <Image src={person} className="w-[44px] h-[44px] rounded-3xl " />
        <Image src={heart} className="absolute right-4 top-5" />
        <div className="mx-3">
          <p className="text-moveColor font-bold text-[14px] ">اسم البائع</p>
          <p className="text-moveColor font-bold text-[14px] ">01116798122</p>
        </div>
        <div className="flex items-center ">
          <Image src={starLight} alt="starLight" />
          <Image src={starGold} alt="starGold" />
          <Image src={starGold} alt="starGold" />
          <Image src={starGold} alt="starGold" />
          <Image src={starGold} alt="starGold" />
        </div>
      </div>
      {/*details person */}
      <div>
        <h3 className="pt-3 font-bold text-grayBoldColor">
          شراء مجموعة من السيارات من موديلات1990
        </h3>
        <p className="text-grayColor">code 1234</p>
      </div>
      <div className="lg:flex items-center justify-between py-2 ">
        <div className="flex items-center py-1">
          <p className="p-1 max-sm:px-1 max-sm:text-sm px-3 mx-1 bg-mainColor text-mainColor bg-opacity-10 rounded-[5px]">
            +10000
          </p>
          <p className="p-1 max-sm:px-1 max-sm:text-sm px-3 mx-1 bg-mainColor text-mainColor bg-opacity-10 rounded-[5px]">
            +10000
          </p>
          <p className="p-1 max-sm:px-1 max-sm:text-sm px-3 mx-1 bg-mainColor text-mainColor bg-opacity-10 rounded-[5px]">
            +10000
          </p>
        </div>
        <div className="flex py-1">
          <input
            placeholder="اكتب المبلغ"
            className="max-md:w-[130px] max-lg:w-[140px] border-2 px-2 py-1 mx-1 text-grayColor"
          />
          <button className="max-md:px-3 py-1 px-4 backy text-white">
            تأكيد
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSlider;
