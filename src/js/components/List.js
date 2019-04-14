import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  async componentDidMount() {
    const response = await fetch('https://employee-statistics.herokuapp.com/api/employees');
    const jsonResponse = await response.json();
    const { employees } = jsonResponse;
    this.setState({ employees });
  }

  render() {
    return (
      <ListStyled className="list">
        {this.state.employees.map(employee => <ListItem key={employee.id} employee={employee} />)}
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

export default List;
