import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import { getItem } from '../utils/Helper';

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
    <>
      <Menu mode='inline' selectedKeys={[path.split('/')[2]]} onClick={() => onClick()}>
        {JSON.parse(getItem(localStorage, 'ql'))?.map((el, i) => (
          <Menu.Item key={el.id}>
            Case Study {i + 1} <Link to={`/exam-interface/${el.id}`} />
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};

export default ExamMenuTopics;
