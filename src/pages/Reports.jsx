import { Tabs, Typography } from 'antd';
import ReportDiagnosisTable from '../components/Tables/ReportDiagnosisTable';
import ReportOrganTable from '../components/Tables/ReportOrganTable';

import ReportSystemTable from '../components/Tables/ReportSystemTable';

const { Title } = Typography;
const { TabPane } = Tabs;

const Reports = () => {
  return (
    <>
      <Title level={2} align='center'>
        Reports
      </Title>

      <Tabs defaultActiveKey='1' centered>
        <TabPane tab='System' key='1'>
          <ReportSystemTable />
        </TabPane>
        <TabPane tab='Organ' key='2'>
          <ReportOrganTable />
        </TabPane>
        <TabPane tab='Diagnosis' key='3'>
          <ReportDiagnosisTable />
        </TabPane>
      </Tabs>
    </>
  );
};

export default Reports;
