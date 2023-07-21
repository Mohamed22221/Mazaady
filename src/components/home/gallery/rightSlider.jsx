import React, { useEffect, useRef, useState } from "react";
import { SliderData } from "./sliderData";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { Space } from "antd";

const RightSlider = ({ setCurrent }) => {
  const handelCurrent = (item) => {
    setCurrent(item);
  };
  return (
    <div className="flex flex-col items-center">
      <Space>
        <UpOutlined className=" cursor-pointer shadow-box p-1" />
      </Space>

      <div className="h-[400px]  overflow-y-scroll relative no-scrollbar">
        {SliderData.map((item, index) => {
          return (
            <div key={index}>
              <img
                onClick={() => handelCurrent(item)}
                src={item.image}
                className="w-[90px] h-[78px] rounded-[5px] my-2 "
                id="view"
              />
            </div>
          );
        })}
      </div>
      <Space>
        {" "}
        <DownOutlined className="cursor-pointer shadow-box p-1" />
      </Space>
    </div>
  );
};

export default RightSlider;
