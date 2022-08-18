import { useEffect, useState } from 'react';
import { Button, Card, Col, Divider, Form, Input, Row, Spin, Typography } from 'antd';

import ExamLayout from '../../layouts/ExamLayout';
import { BaseAPI } from '../../utils/Api';
import ErrorHandler from '../../utils/ErrorHandler';
import Notification from '../../components/controls/Notification';
import { useHistory, useParams } from 'react-router-dom';
import { getItem, setItem } from '../../utils/Helper';

const { Text } = Typography;
const { TextArea } = Input;

const ExamPage = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [questionInformation, setQuestionInformation] = useState({});
  const [answerArray, setAnswerArray] = useState(JSON.parse(getItem(localStorage, 'aa')));

  /**
   * //TODO:
   * 1. Check if the user has already submitted the answer. If submitted, then set impression and findings value in the fields
   * 2. If the user update the answer then replace the impression and findings value in the fields
   * 3. After submitting the answer go to the next question of the list which will be triggered by the "Next" button
   * 4. Same rules applied if the user click "Previous" button. User should go back to previous question of the list
   * 5. Calculate 3 hours countdown time.
   * 6. If 3 hours passed then user will get a prompt about sumitting answer as his time is up. User can't close the prompt unless submitting the answer
   * 7. User can close the exam any time he wants. Then a prompt will show if the user surely close the answer. Upon clicking "YES" button answers will be submitted
   * and user will be redirected to home page
   */

  useEffect(() => {
    // get use case information
    setLoading(true);
    BaseAPI.get(`/question/${id}`, { headers: { Authorization: `Bearer ${getItem(localStorage, 'at')}` } })
      .then((res) => {
        setQuestionInformation(res.data.data);
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          ErrorHandler(err?.response?.data?.message, history);
        } else {
          Notification('Something went wrong! Please try again later', 'error');
        }
      })
      .finally(() => setLoading(false));

    // check if the user has already submitted answer
    console.log(answerArray);
    const submittedAnswerObject = answerArray.find((el) => el.q_id === id);

    console.log(submittedAnswerObject);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const submitAnswer = (values) => {
    const { id, hpi, json_url, labs, vitals } = questionInformation;

    const answerObject = {
      q_id: id,
      hpi,
      json_url,
      labs,
      vitals,
      findings: values.findings,
      impression: values.impression,
      skill_test_id: +getItem(localStorage, 'qi'),
    };

    // setAnswerArray([...answerArray, answerObject]);
    // setItem(localStorage, 'aa', answerArray);
  };

  return (
    <ExamLayout>
      <Spin spinning={loading}>
        <Row gutter={[16]} className='mt-2'>
          <Col xs={12} style={{ display: 'flex', gap: '1em' }}>
            <Text>Total Time Remaining: 03:00:00</Text>
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
                    <Form.Item name='impression' label='Impression' rules={[{ required: true, message: 'Please input impression' }]}>
                      <TextArea />
                    </Form.Item>
                  </Col>
                </Row>
                {/* <Row justify='center' className='mt-2'>
                  <Button type='primary' htmlType='submit'>
                    Submit Answer
                  </Button>
                </Row> */}
                <Row justify='space-between' className='mt-1'>
                  <Button type='dashed'>Previous</Button>
                  <Button type='primary' htmlType='submit'>
                    Next
                  </Button>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Spin>
    </ExamLayout>
  );
};

export default ExamPage;
