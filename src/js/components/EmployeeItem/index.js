import React from 'react';

import './EmployeeItem.css';

const EmployeeItem = (props) => {
  return <li className="listItem">{props.employee.firstName}</li>;
}

export default EmployeeItem;
