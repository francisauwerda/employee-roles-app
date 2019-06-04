import React from 'react';
import _ from 'lodash';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Employees from './Pages/Employees/Employees';
import Roles from './Pages/Roles/Roles';
import { getEmployees, deleteEmployee } from '../../api';

function Home() {
  return <h2>Home page</h2>;
}

class AppRouter extends React.Component {
  state = {
    employees: [],
    employeesLoading: true,
  }

  async componentDidMount() {
    await this.fetchEmployeesHandler();
  }

  fetchEmployeesHandler = async () => {
    const employees = await getEmployees();
    this.setState({
      employees: _.sortBy(employees, ['lastName']),
      employeesLoading: false,
    });
  }

  deleteEmployeeHandler = async (employeeId) => {
    const deletedEmployee = await deleteEmployee(employeeId);

    if (!deletedEmployee) {
      console.log(`Couldn't delete employee ${employeeId}`);
    }

    const {
      employees,
    } = this.state;

    const updatedEmployees = employees.filter(employee => employee.id !== deletedEmployee.id);
    this.setState({ employees: updatedEmployees });
  }

  render() {
    const {
      employees,
      employeesLoading,
    } = this.state;

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
          <Route
            path="/employees/"
            render={() => (
              <Employees
                employees={employees}
                employeesLoading={employeesLoading}
                fetchEmployees={this.fetchEmployeesHandler}
                deleteEmployee={this.deleteEmployeeHandler}
              />
            )}
          />
          <Route
            path="/roles/"
            render={() => (
              <Roles
                employees={employees}
                employeesLoading={employeesLoading}
                fetchEmployees={this.fetchEmployeesHandler}
                deleteEmployee={this.deleteEmployeeHandler}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default AppRouter;
