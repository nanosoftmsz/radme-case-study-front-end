import { Col, Input, Row, Typography } from 'antd';

import ExamListTable from '../../components/Tables/ExamListTable';

const { Title } = Typography;
const { Search } = Input;

const ExamList = () => {
  return (
    <>
      <Title align='center' level={2}>
        Exam List
      </Title>
      <Row justify='end'>
        <Col xs={24} sm={12} md={8}>
          <Search enterButton='Search' allowClear placeholder='Search exam' />
        </Col>
      </Row>

      <div className='mt-1'>
        <ExamListTable />
      </div>
    </>
  );
};

export default ExamList;
