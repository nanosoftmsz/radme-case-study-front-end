import { Space, Table, Tag, Tooltip } from 'antd';
import { ControlOutlined, FundOutlined, PlayCircleFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Exam Date',
    dataIndex: 'exam_date',
    key: 'exam_date',
  },
  {
    title: 'System',
    dataIndex: 'system',
    key: 'system',
  },
  {
    title: 'Organ',
    dataIndex: 'organ',
    key: 'organ',
  },
  {
    title: 'Diagnosis',
    dataIndex: 'diagnosis',
    key: 'diagnosis',
  },
  {
    title: 'Mode',
    key: 'mode',
    dataIndex: 'mode',
    render: (_, { mode }) => <Tag color={mode === 'Tutor' ? 'volcano' : 'geekblue'}>{mode.toUpperCase()}</Tag>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        <Link to='/exam-interface/1'>
          <Tooltip title='Resume Exam'>
            <PlayCircleFilled className='icon' style={{ color: '#2290F6' }} />
          </Tooltip>
        </Link>
        <Link to='/exam-list/examresult'>
          <Tooltip title='View Result'>
            <ControlOutlined className='icon' style={{ color: '#EE8222' }} />
          </Tooltip>
        </Link>
        <Link to='/exam-list/examanalysis'>
          <Tooltip title='Analysis'>
            <FundOutlined className='icon' style={{ color: '#06B05F' }} />
          </Tooltip>
        </Link>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    score: '10',
    name: 'John Brown',
    exam_date: '2022-03-12',
    system: 'Breast',
    organ: 'Adrenal Glands',
    diagnosis: 'Cerebellum',
    mode: 'Tutor',
  },
  {
    key: '2',
    score: '10',
    name: 'Jim Green',
    exam_date: '2022-03-12',
    system: 'Breast',
    organ: 'Adrenal Glands',
    diagnosis: 'Cerebellum',
    mode: 'Timed',
  },
  {
    key: '3',
    score: '10',
    name: 'Joe Black',
    exam_date: '2022-03-12',
    system: 'Breast',
    organ: 'Adrenal Glands',
    diagnosis: 'Cerebellum',
    mode: 'Tutor',
  },
];

const ExamListTable = () => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1000,
    }}
  />
);

export default ExamListTable;
