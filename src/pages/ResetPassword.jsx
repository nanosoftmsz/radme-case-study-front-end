import { Button, Col, Form, Input, Row } from 'antd';

const ResetPassword = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form form={form} onFinish={onFinish} layout='vertical'>
      <Row gutter={[32]}>
        <Col xs={24} sm={12}>
          <Form.Item name='currect_password' label='Current Password' rules={[{ required: true, message: 'Current password is required' }]}>
            <Input.Password />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name='new_password' label='New Password' rules={[{ required: true, message: 'New password is required' }]}>
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>
      <Row justify='center'>
        <Button type='primary' htmlType='submit'>
          Change Password
        </Button>
      </Row>
    </Form>
  );
};

export default ResetPassword;
