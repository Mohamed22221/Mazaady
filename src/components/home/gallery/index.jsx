import React, { useState } from "react";
import RightSlider from "./rightSlider";
import { SliderData } from "./sliderData";
import Contact from "./contact";
import LeftSlider from "./leftSlider";

const Gallery = () => {
  const [current, setCurrent] = useState(SliderData[0]);

  return (
    <div className="grid max-sm:grid-cols-4 max-lg:grid-cols-4 max-xl:grid-cols-6 grid-cols-8">
      <div>
        <RightSlider setCurrent={setCurrent} />
      </div>
      <div className="max-sm:grid-cols-7  max-lg:col-span-3 max-xl:col-span-5 col-span-7 ">
        <LeftSlider current={current} />
        <Contact />
      </div>
    </div>
  );
};

export default Gallery;
