import React from "react";
import { Select } from "antd";

const SelectSearch = ({name , children , formHandler}) => {
    
  return (
    <div>
      <Select
        showSearch
        name={name}
        onChange={(value) => formHandler.setFieldValue(name, value)}
        onBlur={() => formHandler.setFieldTouched(name, true)}
        value={formHandler.values[name]}
        style={{ width: 200 }}
        filterOption={(input, option) =>
          (option?.children ?? "").includes(input)
        }
      >
        {children}
      </Select>
    </div>
  );
};

export default SelectSearch;
