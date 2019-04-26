import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

class EmployeeList extends React.Component {
  async componentDidMount() {
    const { fetchEmployees } = this.props;
    fetchEmployees();
  }

  render() {
    const {
      employees,
      employeesLoading,
    } = this.props;

    return (
      <ListStyled className="list">
        {
          employeesLoading
            ? <p>Loading...</p>
            : employees.map(employee => <ListItem key={employee.id} employee={employee} />)
        }
      </ListStyled>
    );
  }
}


EmployeeList.propTypes = {
  fetchEmployees: PropTypes.func.isRequired,
  employees: PropTypes.node.isRequired,
  employeesLoading: PropTypes.bool.isRequired,
};


const ListStyled = styled.ul`
  /* Reset list styles */
  list-style-type: none;
  margin: 0;
  padding: 0;
  
  width: 400px;
`;

export default EmployeeList;
