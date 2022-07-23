import { Col, Input, Row, Table } from 'antd';
const { Search } = Input;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Usage',
    dataIndex: 'usage',
    key: 'usage',
  },
  {
    title: 'Correct',
    dataIndex: 'correct',
    key: 'correct',
  },
  {
    title: 'Incorrect',
    dataIndex: 'incorrect',
    key: 'incorrect',
  },
  {
    title: 'Omitted',
    dataIndex: 'omitted',
    key: 'omitted',
  },
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
  },
];
const data = [
  {
    key: 1,
    name: 'John Brown',
    usage: '2/55',
    correct: '2',
    incorrect: '0',
    omitted: '0',
    rank: '91st',
  },
  {
    key: 2,
    name: 'Jim Green',
    usage: '2/55',
    correct: '2',
    incorrect: '0',
    omitted: '0',
    rank: '91st',
  },
  {
    key: 3,
    name: 'Not Expandable',
    usage: '2/55',
    correct: '2',
    incorrect: '0',
    omitted: '0',
    rank: '91st',
  },
  {
    key: 4,
    name: 'Joe Black',
    usage: '2/55',
    correct: '2',
    incorrect: '0',
    omitted: '0',
    rank: '91st',
  },
];

const ReportOrganTable = () => {
  return (
    <>
      <Row justify='end' className='mb-1'>
        <Col xs={24} sm={12} md={8}>
          <Search enterButton='Search' allowClear placeholder='Search system name' />
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} scroll={{ x: 1000 }} />
    </>
  );
};

export default ReportOrganTable;
