import React from 'react';
import employeeData from '../../../employee-data.json';
import ListItem from '../ListItem';
import './List.css';

class List extends React.Component {
  componentDidMount() {
    // console.log(`\n---\n employeeData: ${JSON.stringify(employeeData, undefined, 2)} \n---\n`);
  }

  render() {
    return (
      <ul className="list">
        {employeeData.employees.map(employee => <ListItem key={employee.id} employee={employee} />)}
      </ul>
    );
  }
}

export default List;
