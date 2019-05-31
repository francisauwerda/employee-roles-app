import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../../common/ListItem';
import { employeeType } from './types';
import ListStyled from '../../common/styled/ListStyled';

import avatarIcon from '../../../../assets/avatar.png';

class EmployeeList extends React.Component {
  async componentDidMount() {
    const { fetchEmployees } = this.props;
    await fetchEmployees();
  }

  render() {
    const {
      employees,
      employeesLoading,
      deleteEmployee,
    } = this.props;

    return (
      <ListStyled>
        {
          employeesLoading
            ? <p>Loading...</p>
            : employees.map(employee => (
              <ListItem
                key={employee.id}
                mainText={`${employee.firstName} ${employee.lastName}`}
                secondaryText={employee.nationality}
                tertiaryText={employee.department}
                deleteListItem={() => deleteEmployee(employee.id)}
                avatarIcon={avatarIcon}
              />
            ))
        }
      </ListStyled>
    );
  }
}


EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(employeeType).isRequired,
  fetchEmployees: PropTypes.func.isRequired,
  employeesLoading: PropTypes.bool.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};

export default EmployeeList;
