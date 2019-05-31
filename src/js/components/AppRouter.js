import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Employees from './Pages/Employees';
import Roles from './Pages/Roles';

function Home() {
  return <h2>Home page</h2>;
}

function AppRouter() {
  return (
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
        <Route path="/employees/" component={Employees} />
        <Route path="/roles/" component={Roles} />
      </div>
    </Router>
  );
}

export default AppRouter;
