import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import { toTitleCase } from '../utils/Helper';

const ExamMenuTopics = ({ onClick }) => {
  const location = useLocation();

  const [path, setPath] = useState('');

  useEffect(() => {
    setPath(location.pathname);
    console.log(location.pathname);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div>
      <Menu mode='inline' selectedKeys={[path.split('/')[2]]} onClick={() => onClick()}>
        <Menu.Item key='1'>
          Question 1 <Link to='/exam-interface/1' />
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

export default ExamMenuTopics;
