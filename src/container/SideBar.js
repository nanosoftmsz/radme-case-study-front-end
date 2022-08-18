import { Link } from 'react-router-dom';

import { Layout } from 'antd';
import MenuTopics from './MenuTopics';

import '../styles/Sidebar.less';

const { Sider } = Layout;

function SideBar() {
  return (
    <Sider breakpoint='lg' collapsedWidth='0' trigger={null} className='sidebar-layout'>
      <div className='logo'>
        <Link to='/'>RadMe</Link>
      </div>
      <MenuTopics />
    </Sider>
  );
}

export default SideBar;
