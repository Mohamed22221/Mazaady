import React from "react";

const AuctionPrice = () => {
  return (
    <div className="shadow-box py-4 px-3">
      <div className="flex justify-between bg-grayBoldColor text-white rounded-[5px] py-3 px-2">
        <p className="font-semibold">تاريخ البث</p>
        <p className="font-semibold">22-1-2022</p>
      </div>
      <div className="flex gap-2">
        <div className="w-[50%] text-center py-4 px-1 mt-3 text-white bg-moveColor rounded-[5px]">
          <p className="max-sm:text-[13px]">القيمة الحالية للمزاد</p>
          <h2 className="text-[25px] font-semibold">5000 $</h2>
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
