import React from "react";
import SelectSearch from "./selectSearch";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import DrobdownButton from "@/components/shared/drobdown";
const TopSearch = () => {
  const items = [
    {
      label: "مزاد مباشر",
      key: "مزاد مباشر",
    },
    {
      label: "مزاد عام",
      key: "مزاد عام",
    },
    {
      label: "مزاد البائع",
      key: "مزاد البائع",
    },
    {
      label: "مزاد مباشر متعدد",
      key: "مزاد مباشر متعدد",
    },
    {
      label: "مزاد عام متعدد",
      key: "مزاد عام متعدد",
    },
    {
      label: "رقم المتج",
      key: "رقم المتج",
    },
  ];
  return (
    <div className="container mx-auto flex justify-between items-center py-5">
      <div className="flex items-center h-3">
        <DrobdownButton items={items} mainClass="main-select-search" />
        <SelectSearch />
      </div>
      <div>
        <Image src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default TopSearch;
