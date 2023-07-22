import React from "react";
import { Select } from "antd";
import Spinner from "./spinner";

const SelectSearch = ({name , children , formHandler , loading}) => {
    
  return (
    <div>
      
      <Select
        showSearch
        optionFilterProp="children"
        name={name}
        onChange={(value) => formHandler.setFieldValue(name, value)}
        onBlur={() => formHandler.setFieldTouched(name, true)}
        value={formHandler.values[name]}
        style={{ width: 200 }}
        filterOption={(input, option) =>
          (option?.children ?? "").includes(input)
        }
        className="w-[80%]"
      >
        {children}
      </Select>
     {loading && <Spinner />}
    </div>
  );
};

export default SelectSearch;
