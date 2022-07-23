import { useState } from "react";
import { Button, Card, Col, Divider, Form, Input, Row, Typography } from "antd";

import ExamLayout from "../../layouts/ExamLayout";

const { Text, Title } = Typography;
const { TextArea } = Input;

const ExamPage = () => {
  const [form] = Form.useForm();

  const submitAnswer = (values) => {
    console.log(values);
  };

  return (
    <ExamLayout>
      <Title level={3} align='center'>
        Case Study 1
      </Title>

      <Row gutter={[16]} className='mt-2'>
        <Col xs={12} style={{ display: "flex", gap: "1em" }}>
          <Text>Total Time Elapsed: 00:00:12</Text>
        </Col>
        <Col xs={12} style={{ display: "flex", justifyContent: "end", gap: "1em" }}>
          <Text>Time Spent: 00:00:12</Text>
        </Col>
      </Row>

      <Row className='mt-1'>
        <Col xs={24}>
          <Card>
            <Row gutter={[16]}>
              <Col xs={24}>
                <ul>
                  <li>HPI: 10 year old boy with testicular pain</li>
                  <li>Vitals: Tachycardia to 120</li>
                  <li>Labs: UA with 5 WBCs/HPF</li>
                </ul>
              </Col>
              <Col xs={24} className='mt-1'>
                <embed src='https://nano-dicom.netlify.app/viewer?StudyInstanceUIDs=1.3.6.1.4.1.25403.345050719074.3824.20170125113417.1' style={{ width: "100%", height: "700px" }} />
              </Col>
            </Row>

            <Divider orientation='left' className='mt-1'>
              Answer Below
            </Divider>
            <Form form={form} onFinish={submitAnswer} layout='vertical'>
              <Row gutter={[16]}>
                <Col xs={24} md={12}>
                  <Form.Item name='findings' label='Findings' rules={[{ required: true, message: "Please input findings" }]}>
                    <TextArea />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name='impresion' label='Impression' rules={[{ required: true, message: "Please input impression" }]}>
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
    </ExamLayout>
  );
};

export default ExamPage;
