import React from "react";
import person from "../../../assets/person.jpg";
import Image from "next/image";

const AuctionPrice = () => {
  return (
    <div className="shadow-box py-6 px-3">
      <div className="flex justify-between bg-grayBoldColor text-white rounded-[5px] py-3 px-2">
        <p className="font-semibold">تاريخ البث</p>
        <p className="font-semibold">22-1-2022</p>
      </div>
      <div className="flex gap-2">
        <div className="w-[50%] text-center relative py-4 px-1 mt-3 text-white bg-moveColor rounded-[5px]">
          <p className="max-sm:text-[13px]">القيمة الحالية للمزاد</p>
          <h2 className="text-[25px] font-semibold">5000 $</h2>
          <div className="translate-y-8 bottom-[-14px] w-[130px] flex  mx-auto items-center rounded-[12px] shadow-box bg-white px-1 py-1 m-auto ">
            <Image src={person} alt="person" className="w-[25px] h-[25px] rounded-[12px]" />
            <p className="text-grayBoldColor mr-1 font-bold">احمد الرائد</p>
          </div>
        </div>
        <div className="w-[50%] text-center py-4 px-1 mt-3 text-moveColor bg-moveColor bg-opacity-20 rounded-[5px]">
          <p className="max-sm:text-[13px]"> القيمة الحالية بعد الضريبة</p>
          <h2 className="text-[25px] font-semibold">5050 $</h2>
        </div>
      </div>
    </div>
  );
};

export default AuctionPrice;
