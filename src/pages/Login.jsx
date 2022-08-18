import React, { useState } from 'react';
import { Form, Input, Button, Layout, Divider, Row, Col } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useHistory, Link } from 'react-router-dom';

import { BaseAPI } from '../utils/Api';
import Notification from '../components/controls/Notification';

import '../styles/PageStyles/Login.less';
import { setItem } from '../utils/Helper';

const { Header, Content } = Layout;

function Login() {
  const [form] = Form.useForm();
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);

    const body = {
      email: values.email,
      password: values.password,
    };

    BaseAPI.post('/auth/login', body)
      .then((res) => {
        setItem(localStorage, 'ri', res.data.data.role_id.toString());
        setItem(localStorage, 'at', res.data.data.token);
        setItem(localStorage, 'i', res.data.data.id.toString());

        history.push('/');
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          Notification(err?.response?.data?.message, 'error');
        } else {
          Notification('Something went wrong', 'error');
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout className='login-layout'>
      <Header className='login-header'>
        <div className='systemlogin-text'>Welcome</div>
      </Header>
      <div className='head-divider'>
        <Divider />
      </div>
      <Content>
        <Form form={form} name='normal_login' className='login-form' onFinish={onFinish}>
          <Row gutter={[16, 4]}>
            <Col xs={24}>
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
            </Col>
            <Col xs={24}>
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
            </Col>
            <Col xs={24}>
              <Form.Item>
                <Button type='primary' disabled={loading} htmlType='submit' className='login-form-button'>
                  {loading && <LoadingOutlined />} Log In
                </Button>
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item>
                <Link to='/register'>New here? Please register.</Link>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Content>
    </Layout>
  );
}

export default Login;
