import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import EmployeeOption from './EmployeeOption';
import { getEmployees } from '../../../../api';

class EmployeeOptions extends React.Component {
  static propTypes = {
    activeEmployee: PropTypes.bool.isRequired,
    handleEmployeeSelected: PropTypes.func.isRequired,
  }

  state = {
    employees: [],
    employeesLoading: true,
  };

  async componentDidMount() {
    const employees = await getEmployees();
    this.setState({
      employees: _.sortBy(employees, ['lastName']),
      employeesLoading: false,
    });
  }

  render() {
    const {
      activeEmployee,
      handleEmployeeSelected,
    } = this.props;

    const { employeesLoading, employees } = this.state;

    return (
      employeesLoading
        ? <p>Loading...</p>
        : employees.map(employee => (
          <EmployeeOption
            key={employee.id}
            employee={employee}
            isActive={activeEmployee === employee.id}
            handleEmployeeSelected={handleEmployeeSelected}
          />
        ))
    );
  }
}

export default EmployeeOptions;
