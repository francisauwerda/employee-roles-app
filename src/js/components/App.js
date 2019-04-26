import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import EmployeeForm from './EmployeeForm';
import Container from './common/Container';
import EmployeeList from './EmployeeList';
import { getEmployees } from '../../api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      employeesLoading: true,
    };

    this.fetchEmployeesHandler = this.fetchEmployeesHandler.bind(this);
  }

  async fetchEmployeesHandler() {
    const employees = await getEmployees();
    this.setState({
      employees: _.sortBy(employees, ['lastName']),
      employeesLoading: false,
    });
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

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
`;

export default App;
