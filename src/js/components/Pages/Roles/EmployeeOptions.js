import React from 'react';
import EmployeeOption from './EmployeeOption';

const EmployeeOptions = (props) => {
  const {
    employees,
    activeEmployee,
    handleEmployeeSelected,
  } = props;

  return (
    employees.map(employee => (
      <EmployeeOption
        key={employee.id}
        employee={employee}
        isActive={activeEmployee === employee.id}
        handleEmployeeSelected={handleEmployeeSelected}
      />
    ))
  );
};

export default EmployeeOptions;
