import Image from "next/image";
import React from "react";
import logoSearch from "../../../assets/icon-search.png"
const SelectSearch = () => {
  return (
    <div className="flex items-center">
      <input
        placeholder="ابحث هنا"
        className=" bg-mainColor  placeholder-grayColor text-grayColor h-8 py-1 border-0 bg-opacity-10 mr-1 px-3 w-96 text-xl"
      />
      <button className=" bg-mainColor border-0 cursor-pointer rounded-lg h-10 w-16 ml-4  ">
        <Image src={logoSearch} alt="search" />
      </button>
    </div>
  );
};

export default SelectSearch;
