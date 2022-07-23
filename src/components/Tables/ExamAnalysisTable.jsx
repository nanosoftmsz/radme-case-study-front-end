import { Table, Typography } from 'antd';

const { Text } = Typography;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name) => {
      return (
        <>
          <Text>{name}</Text>
          <div className='progress custom-progress mt-1'>
            <div className='progress-bar bg-correct' style={{ width: '50%' }}></div>
            <div className='progress-bar bg-incorrect' style={{ width: '30%' }}></div>
            <div className='progress-bar bg-omitted' style={{ width: '60%' }}></div>
            <div className='progress-bar bg-unused' style={{ width: '0%' }}></div>
          </div>
        </>
      );
    },
  },
  {
    title: 'Total Question',
    dataIndex: 'total_question',
    key: 'total_question',
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
];
const data = [
  {
    key: 1,
    name: 'John Brown',
    total_question: 32,
    correct: '10%',
    incorrect: '60%',
    omitted: '30%',
  },
  {
    key: 2,
    name: 'Jim Green',
    total_question: 42,
    correct: '10%',
    incorrect: '60%',
    omitted: '30%',
  },
  {
    key: 3,
    name: 'Not Expandable',
    total_question: 29,
    correct: '10%',
    incorrect: '60%',
    omitted: '30%',
  },
  {
    key: 4,
    name: 'Joe Black',
    total_question: 32,
    correct: '10%',
    incorrect: '60%',
    omitted: '30%',
  },
];

const ExamAnalysisTable = () => <Table columns={columns} dataSource={data} scroll={{ x: 1200 }} />;

export default ExamAnalysisTable;
