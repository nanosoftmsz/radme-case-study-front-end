import { notification } from 'antd';

const Notification = (message, type) => {
  notification[type]({
    message: message,
  });
};
export default Notification;
