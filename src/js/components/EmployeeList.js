import React from 'react';
import employeeData from '../../employee-data.json';
import EmployeeItem from './EmployeeItem.js';

class EmployeeList extends React.Component {
  componentDidMount() {
    // console.log(`\n---\n employeeData: ${JSON.stringify(employeeData, undefined, 2)} \n---\n`);
  }
  render() {
    return (
      <ul>
        {employeeData.employees.map(employee => {
          return <EmployeeItem key={employee.id} employee={employee} />
        })}
      </ul>
    )
  }
}

export default EmployeeList;
