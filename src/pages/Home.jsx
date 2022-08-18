import { Button, Card, Col, Form, Input, Row, Spin, Typography } from 'antd';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import Notification from '../components/controls/Notification';
import { BaseAPI } from '../utils/Api';
import ErrorHandler from '../utils/ErrorHandler';
import { getItem, setItem, removeItem } from '../utils/Helper';

const { Title } = Typography;

const Home = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setItem(localStorage, 'aa', JSON.stringify([]));
    removeItem(localStorage, 'ql');
    removeItem(localStorage, 'ql');
    removeItem(localStorage, 'qi');
    removeItem(localStorage, 'st');
    removeItem(localStorage, 'et');
  }, [])

  const onFinish = (values) => {
    setLoading(true);

    const body = {
      program_name: values.program_name,
      director_name: values.director_name,
      director_email: values.director_email,
    };

    BaseAPI.post('/skill-test/create', body, { headers: { Authorization: `Bearer ${getItem(localStorage, 'at')}` } })
      .then((res) => {
        setItem(localStorage, 'qi', res.data.data.id.toString());
        setItem(localStorage, 'st', res.data.data.start_time);
        setItem(localStorage, 'et', `${ moment(res.data.data.start_time).add(10, 'minutes').format('YYYY-MM-DD HH:mm:ss')}`);

        getQuestionList();
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          ErrorHandler(err?.response?.data?.message, history);
        } else {
          Notification('Something went wrong! Please try again later', 'error');
        }
      })
      .finally(() => setLoading(false));
  };

  const getQuestionList = () => {
    BaseAPI.get('/question', { headers: { Authorization: `Bearer ${getItem(localStorage, 'at')}` } })
      .then((res) => {
        setItem(localStorage, 'ql', JSON.stringify(res.data.data));
        history.push(`/exam-interface/${res.data.data[0].id}`);
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          ErrorHandler(err?.response?.data?.message, history);
        } else {
          Notification('Something went wrong! Please try again later', 'error');
        }
      });
  };

  return (
    <Spin spinning={loading}>
      <Card>
        <Title level={3} className='center'>
          Radiology Skill Test
        </Title>
        <Form form={form} onFinish={onFinish} layout='vertical'>
          <Row gutter={[16, 16]} className='mt-2'>
            <Col xs={24} sm={12} md={8}>
              <Form.Item name='program_name' label='Program Name' rules={[{ required: true, message: 'Please enter program name' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item name='director_name' label='Director Name' rules={[{ required: true, message: 'Please enter director name' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item
                name='director_email'
                label='Email'
                rules={[
                  { required: true, message: 'Please enter director email' },
                  { type: 'email', message: 'Please enter valid email' },
                ]}>
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row justify='center'>
            <Button type='primary' htmlType='submit'>
              Start My Exam
            </Button>
          </Row>
        </Form>
      </Card>
      <Card className='mt-2'>
        <Title level={4} type='warning'>
          Instructions
        </Title>

        <ul>
          <li>This exam is 3 hours and consists of 18 cases.</li>
          <li>For each case, a case history will be presented to you followed by imaging.</li>
          <li>On average, you will have 10 minutes per case to type your findings & diagnosis.</li>
          <li>You may revisit cases.</li>
          <li>The exam will automatically end after 3 hours.</li>
        </ul>
      </Card>
    </Spin>
  );
};

export default Home;
