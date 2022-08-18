import { Route, Redirect } from 'react-router-dom';
import { getItem } from '../../utils/Helper';

const LoggedInRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage && getItem(localStorage, 'at')) {
          return <Component {...props} />;
        } else {
          return <Redirect to='/login' />;
        }
      }}
    />
  );
};

export default LoggedInRoute;
