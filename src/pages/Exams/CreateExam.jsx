import { useState } from 'react';
import { Button, Card, Col, Divider, Form, Input, InputNumber, Radio, Row, Select, Slider, Switch, Tag, Typography } from 'antd';

import { differentialDiagnosis, examMode, modalityList, userSpecialty } from '../../utils/Constants';
import { Link } from 'react-router-dom';

const { Title } = Typography;
const { Option } = Select;

const CreateExam = () => {
  const [form] = Form.useForm();

  const [value, setValue] = useState(1);
  const [inputValue, setInputValue] = useState(5);
  const [mode, setMode] = useState('board_review_mode');

  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  const submitExam = (values) => {
    console.log(values);
  };

  return (
    <>
      <Title align='center' level={2}>
        Create Exam
      </Title>

      <Card>
        <Form form={form} onFinish={submitExam} layout='vertical' scrollToFirstError>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <Form.Item>
                <Radio.Group options={examMode} onChange={(e) => setMode(e.target.value)} value={mode} optionType='button' buttonStyle='solid' />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Form.Item name='exam_name' label='Exam Name' rules={[{ required: true, message: 'Exam name is required' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Form.Item name='tutor_mode' label='Tutor Mode'>
                <Switch defaultChecked />
              </Form.Item>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Form.Item name='timed_mode' label='Timed Mode'>
                <Switch defaultChecked />
              </Form.Item>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Form.Item name='med_student' label='Med Student'>
                <Switch defaultChecked />
              </Form.Item>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Form.Item name='pedriatic' label='Pedriatic'>
                <Switch />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Form.Item name='specialty' label='Select Specialty' rules={[{ required: true, message: 'Specialty is required' }]}>
                <Select allowClear autoClearSearchValue optionFilterProp='children' showSearch>
                  {userSpecialty.map((el) => (
                    <Option key={el.id} value={el.id}>
                      {el.value}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Form.Item name='modality' label='Select Modality' rules={[{ required: true, message: 'Modality is required' }]}>
                <Select allowClear autoClearSearchValue optionFilterProp='children' showSearch>
                  {modalityList.map((el) => (
                    <Option key={el.id} value={el.id}>
                      {el.value}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Form.Item name='differential_diagnosis' label='Select Differential Diagnosis' rules={[{ required: true, message: 'Differential Diagnosis is required' }]}>
                <Select allowClear autoClearSearchValue optionFilterProp='children' showSearch>
                  {differentialDiagnosis.map((el) => (
                    <Option key={el.id} value={el.id}>
                      {el.value}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Title level={4} className='normal-text'>
                Question Mode
              </Title>
              <Divider />
            </Col>
            <Col xs={24}>
              <Form.Item name='question_mode' rules={[{ requried: true, message: 'Question mode is required' }]}>
                <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
                  <Radio value='unused'>
                    Unused &nbsp; <Tag>3652</Tag>
                  </Radio>
                  <Radio value='incorrect'>
                    Incorrect &nbsp;<Tag>250</Tag>
                  </Radio>
                  <Radio value='correct'>
                    Correct &nbsp;<Tag>120</Tag>
                  </Radio>
                  <Radio value='all'>
                    All &nbsp;<Tag>4250</Tag>
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item name='sytem' label='Select System' rules={[{ required: true, message: 'System is required' }]}>
                <Select allowClear autoClearSearchValue optionFilterProp='children' showSearch mode='multiple' maxTagCount={3}>
                  <Option value='hello'>Hello</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item name='organ' label='Select Organs' rules={[{ required: true, message: 'Organs is required' }]}>
                <Select allowClear autoClearSearchValue optionFilterProp='children' showSearch mode='multiple' maxTagCount={3}>
                  <Option value='hello2'>Hello2</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item name='diagnosis' label='Select Diagnosis' rules={[{ required: true, message: 'Diagnosis is required' }]}>
                <Select allowClear autoClearSearchValue optionFilterProp='children' showSearch mode='multiple' maxTagCount={3}>
                  <Option value='hello3'>Hello3</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item name='question_count' label={`How many question you want to answer? (${inputValue}) question`} rules={[{ required: true, message: 'Question number is required' }]}>
                <Slider min={5} max={20} step={5} onChange={onChange} value={inputValue} />
              </Form.Item>
            </Col>
          </Row>
          <Row justify='center'>
            <Link to='/exam-interface/1'>
              <Button type='primary' htmlType='submit'>
                Create Exam
              </Button>
            </Link>
          </Row>
        </Form>
      </Card>
    </>
  );
};

export default CreateExam;
