import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import ListItem from './ListItem';
import { getEmployees } from '../../../api';

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  async componentDidMount() {
    const employees = await getEmployees();
    this.setState({
      employees: _.sortBy(employees, ['lastName']),
    });
  }

  render() {
    const { employees } = this.state;
    return (
      <ListStyled className="list">
        {
          employees.map(employee => <ListItem key={employee.id} employee={employee} />)
        }
      </ListStyled>
    );
  }
}

const ListStyled = styled.ul`
  /* Reset list styles */
  list-style-type: none;
  margin: 0;
  padding: 0;
  
  width: 400px;
`;

export default EmployeeList;
