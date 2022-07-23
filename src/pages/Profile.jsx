import { Tabs } from 'antd';

import ProfileInformation from './ProfileInformation';
import ResetPassword from './ResetPassword';

const { TabPane } = Tabs;

const Profile = () => {
  return (
    <Tabs defaultActiveKey='1' centered>
      <TabPane tab='Profile Information' key='1'>
        <ProfileInformation />
      </TabPane>
      <TabPane tab='Reset Password' key='2'>
        <ResetPassword />
      </TabPane>
    </Tabs>
  );
};

export default Profile;
