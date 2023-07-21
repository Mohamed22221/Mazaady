import React from "react";
import person from "../../../assets/person.jpg";
import Image from "next/image";

const Contenders = () => {
  return (
    <div className="shadow-box my-5 py-4 px-3">
      <h2 className="text-[22px] font-bold">المتنافسون</h2>
      <div className="my-4 flex items-center justify-between">
        <div className="flex items-center ">
          <Image
            src={person}
            alt="person"
            className="w-[44px] h-[44px] rounded-3xl "
          />
          <div className="mx-3">
            <p className="text-grayBoldColor font-bold text-[14px] ">
              اسم المزايد
            </p>
            <p className="text-grayColor  text-[14px] ">13:59:00</p>
          </div>
        </div>
        <h2 className="font-bold text-[24px] rounded-[5px] bg-yellowColor text-yellowColor bg-opacity-10 px-3 py-1">
          +20
        </h2>
      </div>
      <div className="my-4 flex items-center justify-between">
        <div className="flex items-center ">
          <Image
            src={person}
            alt="person"
            className="w-[44px] h-[44px] rounded-3xl "
          />
          <div className="mx-3">
            <p className="text-grayBoldColor font-bold text-[14px] ">
              اسم المزايد
            </p>
            <p className="text-grayColor  text-[14px] ">13:59:00</p>
          </div>
        </div>
        <h2 className="font-bold text-[24px] rounded-[5px] bg-yellowColor text-yellowColor bg-opacity-10 px-3 py-1">
          +20
        </h2>
      </div>
      <div className="my-4 flex items-center justify-between">
        <div className="flex items-center ">
          <Image
            src={person}
            alt="person"
            className="w-[44px] h-[44px] rounded-3xl "
          />
          <div className="mx-3">
            <p className="text-grayBoldColor font-bold text-[14px] ">
              اسم المزايد
            </p>
            <p className="text-grayColor  text-[14px] ">13:59:00</p>
          </div>
        </div>
        <h2 className="font-bold text-[24px] rounded-[5px] bg-yellowColor text-yellowColor bg-opacity-10 px-3 py-1">
          +20
        </h2>
      </div>
      <div className="my-4 flex items-center justify-between">
        <div className="flex items-center ">
          <Image
            src={person}
            alt="person"
            className="w-[44px] h-[44px] rounded-3xl "
          />
          <div className="mx-3">
            <p className="text-grayBoldColor font-bold text-[14px] ">
              اسم المزايد
            </p>
            <p className="text-grayColor  text-[14px] ">13:59:00</p>
          </div>
        </div>
        <h2 className="font-bold text-[24px] rounded-[5px] bg-yellowColor text-yellowColor bg-opacity-10 px-3 py-1">
          +20
        </h2>
      </div>
      <div className="my-4 flex items-center justify-between">
        <div className="flex items-center ">
          <Image
            src={person}
            alt="person"
            className="w-[44px] h-[44px] rounded-3xl "
          />
          <div className="mx-3">
            <p className="text-grayBoldColor font-bold text-[14px] ">
              اسم المزايد
            </p>
            <p className="text-grayColor  text-[14px] ">13:59:00</p>
          </div>
        </div>
        <h2 className="font-bold text-[24px] rounded-[5px] bg-yellowColor text-yellowColor bg-opacity-10 px-3 py-1">
          +20
        </h2>
      </div>
      
      
    </div>
  );
};

export default Contenders;
