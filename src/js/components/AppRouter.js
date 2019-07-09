import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Employees from './Pages/Employees/Employees';
import Roles from './Pages/Roles/Roles';
import Home from './Pages/Home/Home';
import NavBar from './common/NavBar';

const routes = [{
  path: '/',
  name: 'Home',
}, {
  path: '/employees/',
  name: 'Employees',
}, {
  path: '/roles/',
  name: 'Roles',
}];

const AppRouter = () => (
  <Router>
    <div>
      <NavBar
        routes={routes}
      />
      <Route path="/" exact component={Home} />
      <Route
        path="/employees/"
        component={Employees}
      />
      <Route
        path="/roles/"
        component={Roles}
      />
    </div>
  </Router>
);

export default AppRouter;
