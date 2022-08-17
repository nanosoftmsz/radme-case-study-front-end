import { useEffect, useState } from 'react';
import { Button, Card, Col, Divider, Form, Input, Row, Spin, Typography } from 'antd';

import ExamLayout from '../../layouts/ExamLayout';
import { BaseAPI } from '../../utils/Api';
import ErrorHandler from '../../utils/ErrorHandler';
import Notification from '../../components/controls/Notification';
import { useHistory, useParams } from 'react-router-dom';

const { Text, Title } = Typography;
const { TextArea } = Input;

const ExamPage = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [questionInformation, setQuestionInformation] = useState({});

  useEffect(() => {
    BaseAPI.get(`/question/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('at')}` } })
      .then((res) => {
        console.log(res.data.data);
        setQuestionInformation(res.data.data);
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          ErrorHandler(err?.response?.data?.message, history);
        } else {
          Notification('Something went wrong! Please try again later', 'error');
        }
      });
  }, []);

  const submitAnswer = (values) => {
    console.log(values);
  };

  return (
    <ExamLayout>
      <Spin spinning={loading}>
        <Title level={3} align='center'>
          Case Study 1
        </Title>

        <Row gutter={[16]} className='mt-2'>
          <Col xs={12} style={{ display: 'flex', gap: '1em' }}>
            <Text>Total Time Elapsed: 00:00:12</Text>
          </Col>
          <Col xs={12} style={{ display: 'flex', justifyContent: 'end', gap: '1em' }}>
            <Text>Time Spent: 00:00:12</Text>
          </Col>
        </Row>

        <Row className='mt-1'>
          <Col xs={24}>
            <Card>
              <ul>
                <li>
                  <Text strong>HPI</Text>: {questionInformation.hpi}
                </li>
                <li>
                  <Text strong>Vitals</Text>: {questionInformation.vitals}
                </li>
                <li>
                  <Text strong>Labs</Text>: {questionInformation.labs}
                </li>
              </ul>
            </Card>

            {questionInformation.json_url && (
              <Row>
                <Col xs={24} className='mt-1'>
                  <embed src={questionInformation.json_url} style={{ width: '100%', height: '700px' }} />
                </Col>
              </Row>
            )}

            <Card>
              <Divider orientation='left' className='mt-1'>
                Answer Below
              </Divider>
              <Form form={form} onFinish={submitAnswer} layout='vertical'>
                <Row gutter={[16]}>
                  <Col xs={24} md={12}>
                    <Form.Item name='findings' label='Findings' rules={[{ required: true, message: 'Please input findings' }]}>
                      <TextArea />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name='impresion' label='Impression' rules={[{ required: true, message: 'Please input impression' }]}>
                      <TextArea />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>

              <Row justify='center' className='mt-2'>
                <Button type='primary' onClick={submitAnswer}>
                  Submit Answer
                </Button>
              </Row>
            </Card>
            <Row justify='space-between' className='mt-1'>
              <Button type='dashed'>Previous</Button>
              <Button type='primary'>Next</Button>
            </Row>
          </Col>
        </Row>
      </Spin>
    </ExamLayout>
  );
};

export default ExamPage;
