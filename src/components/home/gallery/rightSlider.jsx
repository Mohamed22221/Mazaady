import React, { useEffect, useRef, useState } from "react";
import { SliderData } from "./sliderData";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { Space } from "antd";

const RightSlider = ({ setCurrent }) => {
  const handelCurrent = (item) => {
    setCurrent(item);
  };
  const scrollButtom = () => {
    document.getElementById("scroll").scrollTop += 100;
  };
  const scrollTop = () => {
    document.getElementById("scroll").scrollTop -= 100;
  };

  return (
    <div className="flex flex-col items-center">
      <Space>
        <UpOutlined
          className=" cursor-pointer shadow-box p-1 my-2"
          onClick={scrollTop}
        />
      </Space>

      <div
        className=" max-sm:h-[300px] h-[400px]  overflow-y-scroll relative no-scrollbar"
        id="scroll"
      >
        {SliderData.map((item, index) => {
          return (
            <div key={index}>
              <img
                onClick={() => handelCurrent(item)}
                src={item.image}
                alt="slider"
                className="scroll max-sm:h-[50px] max-sm:w-[70px] w-[90px] h-[78px] rounded-[5px] my-2 cursor-pointer "
              />
            </div>
          );
        })}
      </div>
      <Space>
        {" "}
        <DownOutlined
          className="cursor-pointer shadow-box p-1 my-2"
          onClick={scrollButtom}
        />
      </Space>
    </div>
  );
};

export default RightSlider;
