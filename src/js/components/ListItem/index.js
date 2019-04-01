import React from 'react';

import './ListItem.css';

const ListItem = (props) => {
  return <li className="listItem">{props.employee.firstName}</li>;
}

export default ListItem;
