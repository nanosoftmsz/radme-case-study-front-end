import { useEffect } from 'react';
import { Typography } from 'antd';
import { useHistory } from 'react-router-dom';

import { BaseAPI } from '../utils/Api';
import ErrorHandler from '../utils/ErrorHandler';
import Notification from '../components/controls/Notification';

const { Title } = Typography;

const Profile = () => {
  const history = useHistory();
  useEffect(() => {
    (async () => {
      BaseAPI.get(`/auth/profile/${localStorage.getItem('i')}`, { headers: { Authorization: `Bearer ${localStorage.getItem('at')}` } })
        .then((res) => {
          console.log(res.data.data);
        })
        .catch((err) => {
          if (err?.response?.data?.message) {
            ErrorHandler(err?.response?.data?.message, history);
          } else {
            Notification('Something went wrong', 'error');
          }
        });
    })();
  }, []);

  return (
    <Title level={2} className='center'>
      Profile Information
    </Title>
  );
};

export default Profile;
