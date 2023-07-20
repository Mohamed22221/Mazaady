import React, { useState } from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space,  } from 'antd';


const SearchInbut = () => {
    const [valueMenu , setValueMenu ] = useState("مزاد مباشر")
    const handleMenuClick = (e) => {
        setValueMenu(e.key)
      };
      const items = [
        {
          label: 'مزاد مباشر',
          key: 'مزاد مباشر',
          icon: <UserOutlined />,
        },
        {
          label: 'مزاد عام',
          key: 'مزاد عام',
          icon: <UserOutlined />,
        },
        {
          label: 'مزاد البائع',
          key: 'مزاد البائع',
          icon: <UserOutlined />,
      
        },
        {
          label: 'مزاد مباشر متعدد',
          key: 'مزاد مباشر متعدد',
          icon: <UserOutlined />,
        },
        {
          label: 'مزاد عام متعدد',
          key: 'مزاد عام متعدد',
          icon: <UserOutlined />,
      
        },
        {
          label: 'رقم المتج',
          key: 'رقم المتج',
          icon: <UserOutlined />,
        },
      ];
      const menuProps = {
        items,
        onClick: handleMenuClick,
      };
    return (
        <Dropdown menu={menuProps}>
        <Button size='large'>
          <Space>
        
            {valueMenu}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    )
}
    

export default SearchInbut;