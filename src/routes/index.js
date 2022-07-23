import { Switch, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  );
};

export default AppRoutes;
