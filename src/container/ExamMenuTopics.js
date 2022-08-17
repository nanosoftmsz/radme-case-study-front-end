import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { BaseAPI } from '../utils/Api';
import ErrorHandler from '../utils/ErrorHandler';
import Notification from '../components/controls/Notification';

const ExamMenuTopics = ({ onClick }) => {
  const location = useLocation();
  const history = useHistory();

  const [path, setPath] = useState('');
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    setPath(location.pathname);
    console.log(location.pathname);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    BaseAPI.get('/question', { header: { Authorization: `Bearer ${localStorage.getItem('at')}` } })
      .then((res) => {
        console.log(res.data.data);
        setQuestionList(res.data.data);
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          ErrorHandler(err?.response?.data?.message, history);
        } else {
          Notification('Something went wrong! Please try again later', 'error');
        }
      });
  }, []);

  return (
    <div>
      <Menu mode='inline' selectedKeys={[path.split('/')[2]]} onClick={() => onClick()}>
        <Menu.Item key='1'>
          Case Study 1 <Link to='/exam-interface/1' />
        </Menu.Item>
        <Menu.Item key='2'>
          Case Study 2 <Link to='/exam-interface/2' />
        </Menu.Item>
        <Menu.Item key='3'>
          Case Study 3 <Link to='/exam-interface/3' />
        </Menu.Item>
        <Menu.Item key='4'>
          Case Study 4 <Link to='/exam-interface/4' />
        </Menu.Item>
        <Menu.Item key='5'>
          Case Study 5 <Link to='/exam-interface/5' />
        </Menu.Item>
        <Menu.Item key='6'>
          Case Study 6 <Link to='/exam-interface/6' />
        </Menu.Item>
        <Menu.Item key='7'>
          Case Study 7 <Link to='/exam-interface/7' />
        </Menu.Item>
        <Menu.Item key='8'>
          Case Study 8 <Link to='/exam-interface/8' />
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
