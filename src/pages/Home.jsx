import React from "react";
import { Button, Card, Col, Divider, Form, Input, Row, Select, Typography } from "antd";
import { residencyYear } from "../utils/Constants";
import { Link } from "react-router-dom";

const { Text, Title } = Typography;
const { Option } = Select;

const Home = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  // /exam-interface/1

  return (
    <>
      <Card>
        <Title level={3} className='center'>
          Radiology Skill Test
        </Title>

        <Text>User Information</Text>

        <Form form={form} onSubmit={onFinish} layout='vertical'>
          <Row gutter={[16, 16]} className='mt-2'>
            <Col xs={24} sm={12} md={8}>
              <Form.Item name='user_name' label='Name' rules={[{ required: true, message: "Please enter your name" }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item
                name='user_email'
                label='Email'
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter valid email" },
                ]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item name='residency_year' label='Residency Year' rules={[{ required: true, message: "Please enter residency year" }]}>
                <Select>
                  {residencyYear.map((el) => (
                    <Option value={el.id} key={el.id}>
                      {el.value}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Divider />

          <Text>Program Director Information</Text>

          <Row gutter={[16, 16]} className='mt-2'>
            <Col xs={24} sm={12} md={8}>
              <Form.Item name='program_name' label='Program Name' rules={[{ required: true, message: "Please enter program name" }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item name='director_name' label='Director Name' rules={[{ required: true, message: "Please enter director name" }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item
                name='director_email'
                label='Email'
                rules={[
                  { required: true, message: "Please enter director email" },
                  { type: "email", message: "Please enter valid email" },
                ]}>
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row justify='center'>
            <Link to='/exam-interface/1'>
              <Button type='primary' htmlType='submit'>
                Start My Exam
              </Button>
            </Link>
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
    </>
  );
};

export default Home;
