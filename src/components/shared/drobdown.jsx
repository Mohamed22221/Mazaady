import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";

const DrobdownButton = ({ items , mainClass }) => {

  const [valueMenu, setValueMenu] = useState(items[0]["label"]);
  const handleMenuClick = (e) => {
    setValueMenu(e.key);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div className={mainClass}>
      <Dropdown menu={menuProps}>
        <Button size="large">
          <Space>
            {valueMenu}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </div>
  );
};

export default DrobdownButton;
