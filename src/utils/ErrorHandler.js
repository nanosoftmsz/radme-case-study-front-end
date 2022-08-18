import Notification from '../components/controls/Notification';
import { removeAll } from './Helper';

const ErrorHandler = (message, navigate) => {
  if (message === 'Session Expired') {
    removeAll(localStorage);
    navigate('/login');
  } else {
    Notification(message, 'error');
  }
};

export default ErrorHandler;
