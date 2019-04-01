import React from 'react';
import employeeData from '../../../employee-data.json';
import EmployeeItem from '../EmployeeItem';
import './EmployeeList.css';

class EmployeeList extends React.Component {
  componentDidMount() {
    // console.log(`\n---\n employeeData: ${JSON.stringify(employeeData, undefined, 2)} \n---\n`);
  }
  render() {
    return (
      <ul className="list">
        {employeeData.employees.map(employee => {
          return <EmployeeItem key={employee.id} employee={employee} />
        })}
      </ul>
    )
  }
}

export default EmployeeList;
