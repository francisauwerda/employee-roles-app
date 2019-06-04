import React from 'react';
import PropTypes from 'prop-types';

import EmployeeForm from './EmployeeForm';
import Container from '../../common/Container';
import EmployeeList from './EmployeeList';
import PageContainer from '../../common/styled/PageContainer';

import { employeeType } from './types';

const Employees = (props) => {
  const {
    employees,
    employeesLoading,
    fetchEmployees,
    deleteEmployee,
  } = props;

  return (
    <div>
      <PageContainer>
        <Container>
          <EmployeeList
            employees={employees}
            fetchEmployees={fetchEmployees}
            employeesLoading={employeesLoading}
            deleteEmployee={deleteEmployee}
          />
        </Container>
        <Container>
          <EmployeeForm
            fetchEmployees={fetchEmployees}
          />
        </Container>
      </PageContainer>
    </div>
  );
};

Employees.propTypes = {
  employees: PropTypes.arrayOf(employeeType).isRequired,
  fetchEmployees: PropTypes.func.isRequired,
  employeesLoading: PropTypes.bool.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};

export default Employees;
