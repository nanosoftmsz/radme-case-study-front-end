import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppRootContextProvider } from '../contexts/AppRootContext';

import AdminLayout from './AdminLayout';
import LoggedInRoute from '../routes/ProtectedRoute/LoggedInRoute';
import Login from '../pages/Login';
import ExamPage from '../pages/ExamPage';

function CommonLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppRootContextProvider>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route path='/exam-interface/:id' component={ExamPage} />
        <LoggedInRoute component={AdminLayout} />
      </Switch>
    </AppRootContextProvider>
  );
}

export default CommonLayout;
