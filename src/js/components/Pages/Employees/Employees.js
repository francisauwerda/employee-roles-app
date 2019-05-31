import React from 'react';
import _ from 'lodash';
import EmployeeForm from './EmployeeForm';
import Container from '../../common/Container';
import EmployeeList from './EmployeeList';
import { getEmployees, deleteEmployee } from '../../../../api';
import PageContainer from '../../common/styled/PageContainer';

class Employees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      employeesLoading: true,
    };

    this.fetchEmployeesHandler = this.fetchEmployeesHandler.bind(this);
    this.deleteEmployeeHandler = this.deleteEmployeeHandler.bind(this);
  }

  async fetchEmployeesHandler() {
    const employees = await getEmployees();
    this.setState({
      employees: _.sortBy(employees, ['lastName']),
      employeesLoading: false,
    });
  }

  async deleteEmployeeHandler(employeeId) {
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
      <div>
        <PageContainer>
          <Container>
            <EmployeeList
              employees={employees}
              fetchEmployees={this.fetchEmployeesHandler}
              employeesLoading={employeesLoading}
              deleteEmployee={this.deleteEmployeeHandler}
            />
          </Container>
          <Container>
            <EmployeeForm
              fetchEmployees={this.fetchEmployeesHandler}
            />
          </Container>
        </PageContainer>
      </div>
    );
  }
}

export default Employees;
