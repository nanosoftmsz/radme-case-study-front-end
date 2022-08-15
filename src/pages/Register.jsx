import { useState } from 'react';
import { Form, Input, Button, Layout, Select, DatePicker, Row, Col, Radio } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useHistory, Link } from 'react-router-dom';

import { Country, MedicalSchools, residencyYear } from '../utils/Constants';

import '../styles/PageStyles/Login.less';
import Notification from '../components/controls/Notification';

const { Header, Content } = Layout;
const { Option } = Select;

const Register = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log(values);
    Notification('hello there', 'success');
    const body = {
      f_name: values.f_name,
      l_name: values.l_name,
      email: values.email,
      med_school: values.med_school,
      gender: 'Male',
      dob: '1997-03-01',
      year_of_graduation: '2020',
      password: '1234',
      residency: 'ABC',
      state: 'Texas',
      country: 'USA',
      user_type: 2,
    };

    // BaseAPI.post('/auth/signup')
  };

  return (
    <Layout className='login-layout'>
      <Header className='login-header'>
        <div className='systemlogin-text'>Create Account</div>
      </Header>
      <Content className='login-form'>
        <Form form={form} onFinish={onFinish} layout='vertical'>
          <Row gutter={[16, 4]}>
            <Col xs={24} sm={12}>
              <Form.Item name='f_name' label='First Name' rules={[{ required: true, message: 'First name is required' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item name='l_name' label='Last Name' rules={[{ required: true, message: 'Last name is required' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                name='email'
                label='Email'
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'abc@medschool.com',
                  },
                ]}>
                <Input placeholder='Enter your email' />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name='med_school' label='Medical School' rules={[{ required: true, message: 'Please select a medical school' }]}>
                <Select>
                  {MedicalSchools.map((el, i) => (
                    <Option key={i} value={el}>
                      {el}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name='gender' label='Select Gender' rules={[{ required: true, message: 'Please select your gender' }]}>
                <Radio.Group>
                  <Radio value='male'>Male</Radio>
                  <Radio value='female'>Female</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name='dob' label='Date Of Birth' rules={[{ required: true, message: 'Please select your birth date' }]}>
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name='graduation_year' label='Graduation Year' rules={[{ required: true, message: 'Please select graduation year' }]}>
                <DatePicker style={{ width: '100%' }} picker='year' />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name='residency_year' label='Residency Year' rules={[{ required: true, message: 'Please select residency year' }]}>
                <Select>
                  {residencyYear.map((el) => (
                    <Option key={el.id} value={el.id}>
                      {el.value}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name='country' label='Country' rules={[{ required: true, message: 'Please select country' }]}>
                <Select optionFilterProp='children' showSearch allowClear>
                  {Country.map((el) => (
                    <Option key={el.code} value={el.name}>
                      {el.name}
                    </Option>
                  ))}
                </Select>
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
                <Input.Password />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item>
                <Button type='primary' disabled={loading} htmlType='submit' className='login-form-button'>
                  {loading && <LoadingOutlined />} Register
                </Button>
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item>
                <Link to='/login'>I already have an account.</Link>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Content>
    </Layout>
  );
};

export default Register;
