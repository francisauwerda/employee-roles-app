import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../common/TextFields/Input';
import Button from '../../common/styled/Button';
import { createEmployee } from '../../../../api';
import FormStyled from '../../common/styled/FormStyled';

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
    try {
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
    } catch (error) {
      console.log('Server error');
      this.setState({ submitting: false });
    }
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
        <Input
          name="firstName"
          label="First Name"
          value={firstName}
          onChange={this.handleInputChange}
        />
        <Input
          name="lastName"
          label="Last Name"
          value={lastName}
          onChange={this.handleInputChange}
        />
        <Input
          name="department"
          label="Department"
          value={department}
          onChange={this.handleInputChange}
        />
        <Input
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

EmployeeForm.propTypes = {
  fetchEmployees: PropTypes.func.isRequired,
};

export default EmployeeForm;
