import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './Login.less'

export default function Login() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='login_box'>
        <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size='large'
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input placeholder='请输入用户名' prefix={<UserOutlined className="site-form-item-icon" />} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input.Password placeholder='请输入密码' prefix={<LockOutlined className="site-form-item-icon" />} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: '请再次确认密码!' }]}
      >
        <Input.Password placeholder='请再次确认密码' prefix={<LockOutlined className="site-form-item-icon" />} />
      </Form.Item>

      <Form.Item>
        <Link to="/login">已有账号？返回登录</Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block size='large'>
          注册
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}
