import { Card, Col, Row, Typography } from 'antd';

import PerformanceByDate from '../components/Charts/PerformanceByDate';
import PerformanceByTest from '../components/Charts/PerformanceByTest';

const { Title } = Typography;

const Graphs = () => {
  return (
    <>
      <Title align='center' level={2}>
        Graphs
      </Title>

      <Row gutter={[32]}>
        <Col xs={24} sm={24} lg={12}>
          <Card title='Performance By Date'>
            <PerformanceByDate />
          </Card>
        </Col>
        <Col xs={24} sm={24} lg={12}>
          <Card title='Performance By Test'>
            <PerformanceByTest />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Graphs;
