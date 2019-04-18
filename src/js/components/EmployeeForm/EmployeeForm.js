import React from 'react';
import FormInput from '../common/FormInput';

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
    };

    this.handleInputChange = this.handleInputChange.bind(this);
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
        // ...formData,
        [name]: value,
      },
    });
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
      },
    } = this;

    return (
      <div>
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
      </div>
    );
  }
}

export default EmployeeForm;
