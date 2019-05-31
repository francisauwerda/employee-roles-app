import React from 'react';

import FormStyled from '../../common/styled/FormStyled';
import Button from '../../common/styled/Button';
import FormInput from '../../common/FormInput';

class RoleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        title: '',
        description: '',
        durationInWeeks: undefined,
        employeeId: undefined,
      },
      submitting: false,
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
        ...formData,
        [name]: value,
      },
    });
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
          label="Duration In Weeks"
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
        >
          <span>Submit</span>
        </Button>
      </FormStyled>
    );
  }
}

export default RoleForm;
