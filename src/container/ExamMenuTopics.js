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
    BaseAPI.get('/question', { headers: { Authorization: `Bearer ${localStorage.getItem('at')}` } })
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
        {questionList?.map((el, i) => (
          <Menu.Item key={el.id}>
            Case Study {i + 1} <Link to={`/exam-interface/${el.id}`} />
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default ExamMenuTopics;
