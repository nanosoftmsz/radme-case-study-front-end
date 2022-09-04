import { useState } from 'react';
import { Form, Input, Button, Layout, Select, DatePicker, Row, Col } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useHistory, Link } from 'react-router-dom';
import moment from 'moment';

import { FellowStatus, MedicalGraduateStatus, MedicalStudentStatus, ResidentStatus, TrainingStatus } from '../utils/Constants';
import Notification from '../components/controls/Notification';
import { BaseAPI } from '../utils/Api';

import '../styles/PageStyles/Login.less';

const { Header, Content } = Layout;
const { Option } = Select;

const Register = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [trainingLevel, setTrainingLevel] = useState(null);

  const handleTrainingStatusChange = (value) => {
    console.log(value);
    if (value === 'Medical Student') {
      setTrainingLevel(MedicalStudentStatus);
    } else if (value === 'Resident') {
      setTrainingLevel(ResidentStatus);
    } else if (value === 'Fellow') {
      setTrainingLevel(FellowStatus);
    } else if (value === 'Medical Graduate') {
      setTrainingLevel(MedicalGraduateStatus);
    } else {
      setTrainingLevel(null);
    }
  };

  const onFinish = (values) => {
    setLoading(true);
    const body = {
      f_name: values.f_name,
      l_name: values.l_name,
      email: values.email,
      med_school: values.med_school,
      gender: values.gender,
      dob: moment(values.dob).format('YYYY-MM-DD'),
      year_of_graduation: moment(values.graduation_year).format('YYYY'),
      password: values.password,
      residency: values.residency_year,
      state: values.country,
      country: values.country,
      user_type: 2,
    };

    BaseAPI.post('/auth/signup', body)
      .then((res) => {
        history.push('/login');
        Notification('Account created successfully. Please login now', 'success');
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          Notification(err?.response?.data?.message, 'error');
        } else {
          Notification('Something went wrong!', 'error');
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout className='login-layout'>
      <Header className='login-header'>
        <div className='systemlogin-text'>Create Account</div>
      </Header>
      <Content>
        <Form className='login-form' form={form} onFinish={onFinish} layout='vertical' style={{ marginTop: '12em' }}>
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
                <Input placeholder='Enter your email' />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name='med_school' label='Medical School' rules={[{ required: true, message: 'Please select a medical school' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name='dob' label='Date Of Birth' rules={[{ required: true, message: 'Please select your birth date' }]}>
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name='graduation_year' label='Medical School Graduation Year' rules={[{ required: true, message: 'Please select graduation year' }]}>
                <DatePicker style={{ width: '100%' }} picker='year' />
              </Form.Item>
            </Col>

            <Col xs={24}>
              <Form.Item name='training_status' label='Training Status' rules={[{ required: true, message: 'Please select training status' }]}>
                <Select allowClear onChange={handleTrainingStatusChange}>
                  {TrainingStatus.map((el) => (
                    <Option key={el} value={el}>
                      {el}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            {trainingLevel && (
              <Col xs={24}>
                <Form.Item name='training_level' label='Training Level' rules={[{ required: true, message: 'Please select training level' }]}>
                  <Select>
                    {trainingLevel?.map((el) => (
                      <Option key={el} value={el}>
                        {el}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            )}
            <Col xs={24}>
              <Form.Item name='specialty' label='Specialty' rules={[{ required: true, message: 'Specialty is required' }]}>
                <Select></Select>
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name='program_name' label='Program Name' rules={[{ required: true, message: 'Program name is required' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name='director_name' label='Director Name' rules={[{ required: true, message: 'Director name is required' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                name='director_email'
                label='Director Email'
                rules={[
                  { required: true, message: 'Director email is required' },
                  { type: 'email', message: 'Email is not valid' },
                ]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name='director_name' label='Director Name' rules={[{ required: true, message: 'Director name is required' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                name='director_email'
                label='Director Email'
                rules={[
                  { required: true, message: 'Director email is required' },
                  { type: 'email', message: 'Email is not valid' },
                ]}>
                <Input />
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
