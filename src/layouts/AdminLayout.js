import { Avatar, Button, Dropdown, Layout, Menu } from 'antd';
import { LogoutOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';

import AppRoutes from '../routes';

import '../styles/Navbar.less';
import '../styles/Sidebar.less';

const { Header, Content, Footer } = Layout;

const AdminLayout = () => {
  const history = useHistory();

  const logout = () => {
    console.log('click');
    localStorage.clear();
    history.push('/login');
  };

  const menu = (
    <Menu>
      <Menu.Item key='1' icon={<UserOutlined />}>
        User Profile <Link to='/profile' />
      </Menu.Item>

      <Menu.Item key='2' onClick={logout} icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header className='site-layout-sub-header-background '>
        <Link to='/'>RadMe Test Case</Link>
        <Dropdown className='logout-btn' overlay={menu} placement='topRight' arrow>
          <Avatar style={{ backgroundColor: '#039be5' }} icon={<UserOutlined />} />
        </Dropdown>
      </Header>
      <Content style={{ margin: '24px 24px 0 24px' }}>
        <div className='site-layout-background'>
          <AppRoutes />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>RadMe ©{new Date().getFullYear()} Created by NanoSoft</Footer>
    </Layout>
  );
};

export default AdminLayout;
