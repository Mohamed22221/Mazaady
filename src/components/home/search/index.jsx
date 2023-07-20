import React from "react";
import SelectSearch from "./selectSearch";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import SearchInbut from "./searchInbut";
const TopSearch = () => {
  return (
    <div className="flex justify-between items-center py-3">
      <div className="flex items-center h-3">
        <SearchInbut />
        <SelectSearch />
      </div>
      <div>
        <Image src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default TopSearch;
