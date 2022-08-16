import { useEffect, useState } from 'react';
import { Button, Col, DatePicker, Form, Input, Radio, Row, Select, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';

import { BaseAPI } from '../utils/Api';
import ErrorHandler from '../utils/ErrorHandler';
import Notification from '../components/controls/Notification';
import { Country, MedicalSchools, residencyYear } from '../utils/Constants';
import moment from 'moment';

const { Title } = Typography;
const { Option } = Select;

const Profile = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      BaseAPI.get(`/auth/profile/${localStorage.getItem('i')}`, { headers: { Authorization: `Bearer ${localStorage.getItem('at')}` } })
        .then((res) => {
          console.log(res.data.data);
          form.setFieldsValue({
            f_name: res.data.data.user_info.f_name,
            l_name: res.data.data.user_info.l_name,
            email: res.data.data.email,
            med_school: res.data.data.user_info.med_school,
            gender: res.data.data.user_info.gender,
            // dob: moment(res.data.data.user_info.dob).format('YYYY-MM-DD'),
            // graduation_year: res.data.data.user_info.year_of_graduation,
            residency_year: res.data.data.user_info.residency,
            country: res.data.data.user_info.country,
          });
        })
        .catch((err) => {
          if (err?.response?.data?.message) {
            ErrorHandler(err?.response?.data?.message, history);
          } else {
            Notification('Something went wrong', 'error');
          }
        });
    })();
  }, []);

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <Title level={2} className='center'>
        Profile Information
      </Title>
      <Form className='login-form' form={form} onFinish={onFinish} layout='vertical'>
        <Row gutter={[16, 4]}>
          <Col xs={24}>
            <Form.Item name='f_name' label='First Name' rules={[{ required: true, message: 'First name is required' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24}>
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
              <Input placeholder='Enter your email' readOnly />
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
              <Button type='primary' block disabled={loading} htmlType='submit' className='login-form-button'>
                {loading && <LoadingOutlined />} Update Profile
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Profile;
