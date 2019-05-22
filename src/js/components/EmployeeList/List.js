import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import { employeeType } from './types';

class EmployeeList extends React.Component {
  async componentDidMount() {
    const { fetchEmployees } = this.props;
    fetchEmployees();
  }

  render() {
    const {
      employees,
      employeesLoading,
      deleteEmployee,
    } = this.props;

    return (
      <ListStyled>
        {
          employeesLoading
            ? <p>Loading...</p>
            : employees.map(employee => (
              <ListItem
                key={employee.id}
                employee={employee}
                deleteEmployee={() => deleteEmployee(employee.id)}
              />
            ))
        }
      </ListStyled>
    );
  }
}


EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(employeeType).isRequired,
  fetchEmployees: PropTypes.func.isRequired,
  employeesLoading: PropTypes.bool.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};


const ListStyled = styled.ul`
  /* Reset list styles */
  list-style-type: none;
  margin: 0;
  padding: 0;
  
  width: 400px;
`;

export default EmployeeList;
