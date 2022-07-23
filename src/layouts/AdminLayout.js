import React, { useState } from 'react';
import { Avatar, Button, Drawer, Dropdown, Layout, Menu } from 'antd';
import { LogoutOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';

import { BaseAPI } from '../utils/Api';
import MenuTopics from '../container/MenuTopics';
import AppRoutes from '../routes';
import '../styles/Navbar.less';
import '../styles/Sidebar.less';

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [navIsVisible, setNavIsVisible] = useState(false);

  const closeSidenav = () => {
    setNavIsVisible(false);
  };

  const logout = () => {
    setLoading(true);
    BaseAPI.get('/auth/logout', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    })
      .then(() => {
        localStorage.clear();
        history.push('/login');
      })
      .catch(() => {
        localStorage.clear();
        history.push('/login');
      })
      .finally(() => setLoading(false));
  };

  const openSidenav = () => {
    setNavIsVisible(true);
  };

  const menu = (
    <Menu>
      <Link to='/profile'>
        <Menu.Item key='1' icon={<UserOutlined />}>
          User Profile
        </Menu.Item>
      </Link>

      <Link to='/subscription'>
        <Menu.Item key='2' icon={<UserOutlined />}>
          Subscription
        </Menu.Item>
      </Link>

      <Menu.Item key='3' onClick={logout} icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Drawer title='RadMe' placement='left' onClose={closeSidenav} visible={navIsVisible}>
        <MenuTopics onClick={closeSidenav} />
      </Drawer>

      <Sider breakpoint='lg' collapsedWidth='0' trigger={null} className='sidebar-layout'>
        <div className='logo'>RadMe</div>
        <MenuTopics onClick={() => {}} />
      </Sider>

      <Layout>
        <Header className='site-layout-sub-header-background '>
          <Button className='menu' type='primary' icon={<MenuOutlined />} onClick={openSidenav} />
          <Dropdown className='logout-btn' overlay={menu} placement='topRight' arrow>
            <Avatar style={{ backgroundColor: '#039be5' }} icon={<UserOutlined />} />
          </Dropdown>
        </Header>
        <Content style={{ margin: '24px 24px 0 24px' }}>
          <div className='site-layout-background' style={{ padding: '12px 24px', minHeight: 800 }}>
            <AppRoutes />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>RadMe ©{new Date().getFullYear()} Created by NanoSoft</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
