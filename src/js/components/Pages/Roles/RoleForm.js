import React from 'react';
import PropTypes from 'prop-types';

import FormStyled from '../../common/styled/FormStyled';
import Button from '../../common/styled/Button';
import FormInput from '../../common/FormInput';
import { createRole } from '../../../../api';

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
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
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

  async handleSubmit(event) {
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

RoleForm.propTypes = {
  fetchRoles: PropTypes.func.isRequired,
};

export default RoleForm;
