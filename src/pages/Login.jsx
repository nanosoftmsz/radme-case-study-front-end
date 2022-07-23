import React, { useState } from 'react';
import { Form, Input, Button, Layout, Divider } from 'antd';
import { KeyOutlined, LoadingOutlined } from '@ant-design/icons';
import { useHistory, Link } from 'react-router-dom';

import '../styles/PageStyles/Login.less';

const { Header, Content } = Layout;

function Login() {
  const [form] = Form.useForm();
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    localStorage.setItem('accessToken', 'lsdkfjlsdkf');
    history.push('/');
  };

  return (
    <Layout className='login-layout'>
      <Header className='login-header'>
        <div>dslkfj</div>
        <div className='systemlogin-text'>System Login</div>
      </Header>
      <div className='head-divider'>
        <Divider />
      </div>
      <Content>
        <Form form={form} name='normal_login' className='login-form' onFinish={onFinish}>
          <div className='systemlogin-mbl'>System Login</div>
          <Form.Item
            name='email'
            label='Email'
            labelCol={{ span: 24 }}
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}>
            <Input placeholder='Enter your email' />
          </Form.Item>
          <Form.Item
            name='password'
            label='Password'
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}>
            <Input.Password placeholder='Enter your password' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' disabled={loading} htmlType='submit' className='login-form-button'>
              {loading && <LoadingOutlined />} Log In
            </Button>
          </Form.Item>
          <Form.Item>
            <div style={{ textAlign: 'center' }}>
              <Link className='login-form-forgot' to='/forgot-password'>
                <span>
                  <KeyOutlined />
                </span>
                Forgot password?
              </Link>
            </div>
            <div className='fp-divider'>
              <Divider />
            </div>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
}

export default Login;
