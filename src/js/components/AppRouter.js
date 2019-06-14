import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Employees from './Pages/Employees/Employees';
import Roles from './Pages/Roles/Roles';
import Home from './Pages/Home/Home';

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/employees/">Employees</Link>
          </li>
          <li>
            <Link to="/roles/">Roles</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={Home} />
      <Route
        path="/employees/"
        render={() => (
          <Employees />
        )}
      />
      <Route
        path="/roles/"
        render={() => (
          <Roles />
        )}
      />
    </div>
  </Router>
);

export default AppRouter;
