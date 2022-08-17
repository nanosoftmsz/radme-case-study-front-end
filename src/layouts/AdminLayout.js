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
    localStorage.clear();
    history.push('/login');
  };

  const menu = (
    <Menu>
      <Link to='/profile'>
        <Menu.Item key='1' icon={<UserOutlined />}>
          User Profile
        </Menu.Item>
      </Link>

      <Menu.Item key='2' onClick={logout} icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      {/* <Drawer title='RadMe' placement='left' onClose={closeSidenav} visible={navIsVisible}>
        <MenuTopics onClick={closeSidenav} />
      </Drawer> */}

      {/* <Sider breakpoint='lg' collapsedWidth='0' trigger={null} className='sidebar-layout'>
        <div className='logo'>RadMe</div>
        <MenuTopics onClick={() => {}} />
      </Sider> */}

      <Layout>
        <Header className='site-layout-sub-header-background '>
          <Link to='/'>RadMe Test Case</Link>
          <Button className='menu' type='primary' icon={<MenuOutlined />} />
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
    </Layout>
  );
};

export default AdminLayout;
