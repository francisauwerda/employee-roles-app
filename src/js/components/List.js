import React from 'react';
import styled from 'styled-components';

import employeeData from '../../employee-data.json';
import ListItem from './ListItem.js';

class List extends React.Component {
  componentDidMount() {
    // console.log(`\n---\n employeeData: ${JSON.stringify(employeeData, undefined, 2)} \n---\n`);
  }

  render() {
    return (
      <ListStyled className="list">
        {employeeData.employees.map(employee => <ListItem key={employee.id} employee={employee} />)}
      </ListStyled>
    );
  }
}

const ListStyled = styled.ul`
  /* Reset list styles */
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export default List;
