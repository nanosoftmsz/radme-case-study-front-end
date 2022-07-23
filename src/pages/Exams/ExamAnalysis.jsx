import { Card, Col, Divider, Progress, Row, Select, Typography } from 'antd';
import ExamAnalysisTable from '../../components/Tables/ExamAnalysisTable';

const { Paragraph, Text, Title } = Typography;
const { Option } = Select;

const sortCriteria = [
  { value: 'incorrect', title: 'Incorrect' },
  { value: 'correct', title: 'Correct' },
  { value: 'omitted', title: 'Omitted' },
];

const ExamAnalysis = () => {
  return (
    <>
      <Title align='center' level={2}>
        Exam Analysis
      </Title>
      <Card>
        <Row justify='space-between' gutter={[32]}>
          <Col xs={24} sm={7}>
            <div style={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Progress type='circle' percent={10} strokeColor='#04A405' width='80px' />
                <Text>Correct</Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Progress type='circle' percent={60} strokeColor='#DC162C' width='80px' />
                <Text>Incorrect</Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Progress type='circle' percent={30} width='80px' strokeColor='#ffd106' />
                <Text>Omitted</Text>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={7}>
            <Title level={4}>Your Score</Title>
            <Divider />
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text type='success'>Total Correct</Text>
                <Text strong>1</Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text type='danger'>Total Incorrect</Text>
                <Text strong>6</Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text type='warning'>Total Omitted</Text>
                <Text strong>3</Text>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={7}>
            <Title level={4}>Exam Id</Title>
            <Divider />
            <Paragraph copyable>89493843</Paragraph>
          </Col>
        </Row>
      </Card>
      <Row justify='end' className='mt-2 mb-1'>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Select mode='multiple' allowClear placeholder='Select Types' showArrow style={{ width: '100%' }}>
            {sortCriteria.map((el) => (
              <Option value={el.value} key={el.value}>
                {el.title}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <ExamAnalysisTable />
    </>
  );
};

export default ExamAnalysis;
