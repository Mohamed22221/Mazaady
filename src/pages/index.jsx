import AuctionPrice from "@/components/auction-price/auction-price";
import Gallery from "@/components/home/gallery";
import React from "react";

const Home = () => {
  return (
    <div className="container py-[30px] mx-auto grid-style max-md:px-2">
      <div className="">
        <Gallery />
      </div>
      <div className="">
        <AuctionPrice />
      </div>
    </div>
  );
};

export default Home;
