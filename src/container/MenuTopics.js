import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, ContainerFilled, DiffFilled, FundFilled, PieChartFilled, QuestionCircleFilled } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

import { toTitleCase } from '../utils/Helper';

const TopicMenu = ({ onClick }) => {
  const location = useLocation();

  const [path, setPath] = useState('');

  useEffect(() => {
    setPath(location.pathname);
    const firstSplittedString = location.pathname.split('/')[1];
    const replacedString = firstSplittedString.replace('-', ' ');
    document.title = `${toTitleCase(replacedString || 'dashboard')} - RadMe`;
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div>
      <Menu mode='inline' selectedKeys={[path.split('/')[1]]} onClick={() => onClick()}>
        <Menu.Item key='' icon={<AppstoreOutlined />}>
          Dashboard <Link to='/' />
        </Menu.Item>
        <Menu.Item key='create-exam' icon={<DiffFilled />}>
          Create Exam <Link to='/create-exam' />
        </Menu.Item>
        <Menu.Item key='exam-list' icon={<ContainerFilled />}>
          Previous Exams <Link to='/exam-list' />
        </Menu.Item>
        <Menu.Item key='reports' icon={<FundFilled />}>
          Reports <Link to='/reports' />
        </Menu.Item>
        <Menu.Item key='graphs' icon={<PieChartFilled />}>
          Graphs <Link to='/graphs' />
        </Menu.Item>

        <Menu.Item key='help' icon={<QuestionCircleFilled />}>
          Help <Link to='/help' />
        </Menu.Item>

        {/* <SubMenu key="products" icon={<CodeSandboxOutlined />} title="Products">
          <Menu.Item key="create-product" icon={<PlusOutlined />}>
            Create Product <Link to="/create-product" />
          </Menu.Item>
          <Menu.Item key="view-products" icon={<UnorderedListOutlined />}>
            View Product <Link to="/view-products" />
          </Menu.Item>
        </SubMenu> */}
      </Menu>
    </div>
  );
};

export default TopicMenu;
