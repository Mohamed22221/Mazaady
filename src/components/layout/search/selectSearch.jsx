import Image from "next/image";
import React from "react";
import logoSearch from "../../../assets/icon-search.png";
import { useRouter } from 'next/router'

const SelectSearch = () => {
  const router = useRouter()
  return (
    <div className="flex items-center ">
      <input
        placeholder="ابحث هنا"
        className=" bg-mainColor  placeholder-grayColor text-grayColor max-md:w-[90px] 
        	h-10 py-1 border-0 bg-opacity-10 mr-1 px-3 w-[550px] max-xl:w-[300px]  md:text-xl"
      />
      <button onClick={() => router.push('/search')} className=" bg-mainColor border-0 cursor-pointer rounded-lg h-10 max-md:w-[50px] w-16 ml-4  ">
        <Image src={logoSearch} alt="search" className=" m-auto" />
      </button>
    </div>
  );
};

export default SelectSearch;
