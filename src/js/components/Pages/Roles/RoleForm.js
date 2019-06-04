import React from 'react';
import PropTypes from 'prop-types';

import FormStyled from '../../common/styled/FormStyled';
import Button from '../../common/styled/Button';
import FormInput from '../../common/FormInput';
import { createRole } from '../../../../api';
import { employeeType } from '../Employees/types';
import ClickableAvatar from '../../common/ClickableAvatar';

const INITIAL_STATE = {
  formData: {
    title: '',
    description: '',
    durationInWeeks: undefined,
    employeeId: undefined,
  },
  submitting: false,
};

class RoleForm extends React.Component {
  static propTypes = {
    fetchRoles: PropTypes.func.isRequired,
    employees: PropTypes.arrayOf(employeeType).isRequired,
  }

  state = INITIAL_STATE;

  handleInputChange = (event) => {
    const {
      target: {
        value,
        name,
      },
    } = event;

    const {
      state: {
        formData,
      },
    } = this;

    this.setState({
      formData: {
        ...formData,
        [name]: value,
      },
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { formData } = this.state;
    const { fetchRoles } = this.props;

    this.setState({ submitting: true });

    // TODO: Add Form validation
    await createRole(formData);
    this.setState({
      ...INITIAL_STATE,
    });

    fetchRoles();
  }

  render() {
    const {
      formData: {
        title,
        description,
        durationInWeeks,
        employeeId,
      },
      submitting,
    } = this.state;
    const { employees } = this.props;

    return (
      <FormStyled>
        <FormInput
          name="title"
          label="Title"
          value={title}
          onChange={this.handleInputChange}
        />
        <FormInput
          name="description"
          label="Description"
          value={description}
          onChange={this.handleInputChange}
        />
        <FormInput
          name="durationInWeeks"
          label="How many weeks?"
          type="number"
          min="5"
          value={durationInWeeks}
          onChange={this.handleInputChange}
        />
        <FormInput
          name="employeeId"
          label="Employee ID"
          value={employeeId}
          onChange={this.handleInputChange}
        />
        <div>
          {
            employees.map(employee => (
              <div key={employee.id}>
                <ClickableAvatar />
                <p>{employee.firstName}</p>
              </div>
            ))
          }
        </div>
        <Button
          type="submit"
          submitting={submitting}
          onClick={this.handleSubmit}
        >
          <span>Submit</span>
        </Button>
      </FormStyled>
    );
  }
}

export default RoleForm;
