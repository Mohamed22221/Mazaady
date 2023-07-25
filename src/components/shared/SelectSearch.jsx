import React from "react";
import { Select } from "antd";
import Spinner from "./spinner";

const SelectSearch = ({
  name,
  children,
  formHandler,
  placeholder,
  loading,
  onChange,
}) => {
  const handelChange = (name, value) => {
    formHandler.setFieldValue(name, value);
  };
  return (
    <div>
      <Select
        showSearch
        optionFilterProp="children"
        name={name}
        onChange={(value) =>
          onChange ? onChange(name, value) : handelChange(name, value)
        }
        onBlur={() => formHandler.setFieldTouched(name, true)}
        value={
          formHandler.values[name]
            ? formHandler.values[name].split("ID:")[0]
            : undefined
        }
        style={{ width: 200 }}
        filterOption={(input, option) =>
          (option?.children ?? "").includes(input)
        }
        className="w-[80%]"
        placeholder={placeholder}
      >
        {children}
      </Select>

      {loading && <Spinner />}
    </div>
  );
};

export default SelectSearch;
