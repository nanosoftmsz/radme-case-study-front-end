import { Table } from 'antd';

const columns = [
  {
    title: 'Question Status',
    dataIndex: 'q_status',
    key: 'q_status',
    align: 'center',
  },
  {
    title: 'Question ID',
    dataIndex: 'id',
    key: 'id',
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
    title: 'Correct Others',
    dataIndex: 'correct_others',
    key: 'correct_others',
  },
  {
    title: 'Time Spent',
    dataIndex: 'time_spent',
    key: 'time_spent',
  },
];
const data = [
  {
    key: 1,
    q_status: '✔️',
    id: '123485',
    system: 'Breast',
    organ: 'Adrenal Glands',
    diagnosis: 'Cerebellum',
    correct_others: '60%',
    time_spent: '12 sec',
  },
  {
    key: 2,
    q_status: '❌',
    id: '123485',
    system: 'Breast',
    organ: 'Adrenal Glands',
    diagnosis: 'Cerebellum',
    correct_others: '60%',
    time_spent: '12 sec',
  },
  {
    key: 3,
    q_status: '🔘',
    id: '123485',
    system: 'Breast',
    organ: 'Adrenal Glands',
    diagnosis: 'Cerebellum',
    correct_others: '60%',
    time_spent: '12 sec',
  },
  {
    key: 4,
    q_status: '🔘',
    id: '123485',
    system: 'Breast',
    organ: 'Adrenal Glands',
    diagnosis: 'Cerebellum',
    correct_others: '60%',
    time_spent: '12 sec',
  },
];

const ExamResultTable = () => <Table columns={columns} dataSource={data} scroll={{ x: 1000 }} />;

export default ExamResultTable;
