import AboutPrice from "@/components/home/about-price/aboutPrice";
import AuctionPrice from "@/components/home/auction-price/auction-price";
import Contenders from "@/components/home/contenders/contenders";
import Gallery from "@/components/home/gallery";
import React from "react";

const Home = () => {
  return (
    <div className="container py-[30px] mx-auto grid-style max-md:px-2">
      <div>
        <Gallery />
      </div>
      <div>
        <AuctionPrice />
        <Contenders />
        <AboutPrice />
      </div>
    </div>
  );
};

export default Home;
