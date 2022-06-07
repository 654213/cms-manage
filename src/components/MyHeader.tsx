import React from 'react'
import './less/MyHeader.less'
import { Menu, Dropdown, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';

const logo = require('assets/images/logo.jpeg');
const default_avatar = require('assets/images/user.webp');

export default function MyHeader() {
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              修改资料
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              退出登录
            </a>
          ),
        },
      ]}
    />
  );
  return (
    <header>
        <img src={logo} alt="" height={50}></img>
        <Dropdown overlay={menu}>
          <a href="!#" onClick={e => e.preventDefault()}>
            <Space>
              <img src={default_avatar} alt="" height={50} style={{borderRadius: '50%', marginRight: '15px'}}></img>
              <span style={{ marginRight: '10px'}}>匿名用户</span>
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
    </header>
  )
}
