import React from 'react';
import _ from 'lodash';

import EmployeeForm from './EmployeeForm';
import Container from '../../common/Container';
import EmployeeList from './EmployeeList';
import PageContainer from '../../common/styled/PageContainer';

import { getEmployees, deleteEmployee } from '../../../../api';

class Employees extends React.Component {
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
