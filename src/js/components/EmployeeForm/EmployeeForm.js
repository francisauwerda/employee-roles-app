import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormInput from '../common/FormInput';
import Button from '../common/Button';
import { createEmployee } from '../../../api';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        firstName: '',
        lastName: '',
        department: '',
        nationality: '',
      },
      submitting: false,
    };

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
    const { fetchEmployees } = this.props;

    this.setState({ submitting: true });

    // TODO: Add validation here.
    await createEmployee(formData);
    this.setState({
      formData: {
        firstName: '',
        lastName: '',
        department: '',
        nationality: '',
      },
      submitting: false,
    });

    fetchEmployees();
  }

  render() {
    const {
      state: {
        formData: {
          firstName,
          lastName,
          department,
          nationality,
        },
        submitting,
      },
    } = this;

    return (
      <FormStyled>
        <FormInput
          name="firstName"
          label="First Name"
          value={firstName}
          onChange={this.handleInputChange}
        />
        <FormInput
          name="lastName"
          label="Last Name"
          value={lastName}
          onChange={this.handleInputChange}
        />
        <FormInput
          name="department"
          label="Department"
          value={department}
          onChange={this.handleInputChange}
        />
        <FormInput
          name="nationality"
          label="Nationality"
          value={nationality}
          onChange={this.handleInputChange}
        />
        <Button
          type="submit"
          onClick={this.handleSubmit}
          submitting={submitting}
        >
          <span>Submit</span>
        </Button>
      </FormStyled>
    );
  }
}

const FormStyled = styled.form`
  width: 400px;
  margin-top: 14px;
`;

EmployeeForm.propTypes = {
  fetchEmployees: PropTypes.func.isRequired,
};

export default EmployeeForm;
