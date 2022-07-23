import { Card, Col, Progress, Row, Select, Tag, Typography } from 'antd';
import ExamResultTable from '../../components/Tables/ExamResultTable';

const { Title } = Typography;
const { Option } = Select;

const sortCriteria = [
  { value: 'incorrect', title: 'Incorrect' },
  { value: 'correct', title: 'Correct' },
  { value: 'omitted', title: 'Omitted' },
];

const ExamResult = () => {
  return (
    <>
      <Title align='center' level={2}>
        Exam Result
      </Title>
      <Card>
        <Row gutter={[32]}>
          <Col xs={24} sm={8}>
            <Title level={4}>Your Score</Title>
            <Progress percent={30} />
          </Col>
          <Col xs={24} sm={8}>
            <Title level={4}>Exam Mode</Title>
            <Tag color='magenta'>Tutor</Tag>
          </Col>
          <Col xs={24} sm={8}>
            <Title level={4}>Exam Id</Title>
            324587498
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
      <ExamResultTable />
    </>
  );
};

export default ExamResult;
