import { Button, Col, Form, Input, Row, Select } from 'antd';

const ProfileInformation = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className='profile-page'>
      <Row gutter={[32]}>
        <Col xs={24} sm={4}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt='user' className='profile-img' />
          </div>
        </Col>
        <Col xs={24} sm={20}>
          <Form form={form} onFinish={onFinish} layout='vertical' scrollToFirstError>
            <Row gutter={[32]}>
              <Col xs={24} md={12}>
                <Form.Item name='first_name' label='First Name' rules={[{ required: true, message: 'First Name is required' }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item name='last_name' label='Last Name' rules={[{ required: true, message: 'Last Name is required' }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item
                  name='email'
                  label='Email'
                  rules={[
                    { required: true, message: 'Email is required' },
                    { type: 'email', message: 'Email format is not valid' },
                  ]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item name='medical_school' label='Medical School' rules={[{ required: true, message: 'Medical school is required' }]}>
                  <Select allowClear></Select>
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item name='residency' label='Residency' rules={[{ required: true, message: 'Residency is required' }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name='state' label='State' rules={[{ required: true, message: 'State is required' }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name='country' label='Country' rules={[{ required: true, message: 'Country is required' }]}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row justify='center'>
              <Button type='primary' htmlType='submit'>
                Update Profile
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileInformation;
