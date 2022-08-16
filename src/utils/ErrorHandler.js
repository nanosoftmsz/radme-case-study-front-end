import Notification from '../components/controls/Notification';

const ErrorHandler = (message, navigate) => {
  if (message === 'Session Expired') {
    localStorage.clear();
    navigate('/login');
  } else {
    Notification(message, 'error');
  }
};

export default ErrorHandler;
