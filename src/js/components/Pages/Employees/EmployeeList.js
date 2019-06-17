import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../../common/ListItem';
import { employeeType } from './types';
import ListStyled from '../../common/styled/ListStyled';

import avatarIcon from '../../../../assets/avatar.png';
import Loading from '../../common/Loading';

const EmployeeList = (props) => {
  const {
    employees,
    employeesLoading,
    deleteEmployee,
  } = props;

  return (
    <ListStyled>
      {
        employeesLoading
          ? <Loading />
          : employees.map(employee => (
            <ListItem
              key={employee.id}
              itemId={employee.id}
              mainText={`${employee.firstName} ${employee.lastName}`}
              secondaryText={employee.nationality}
              tertiaryText={employee.department}
              secondaryActionHandler={() => deleteEmployee(employee.id)}
              avatarIcon={avatarIcon}
            />
          ))
      }
    </ListStyled>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(employeeType).isRequired,
  employeesLoading: PropTypes.bool.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};

export default EmployeeList;
