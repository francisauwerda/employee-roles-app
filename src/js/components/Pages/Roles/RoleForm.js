import React from 'react';
import PropTypes from 'prop-types';

import FormStyled from '../../common/styled/FormStyled';
import Button from '../../common/styled/Button';
import Input from '../../common/TextFields/Input';
import { createRole } from '../../../../api';
import EmployeeOptions from './EmployeeOptions';
import TextArea from '../../common/TextFields/TextArea';
import CardContainer from '../../common/styled/CardContainer';

const INITIAL_STATE = {
  formData: {
    title: '',
    description: '',
    durationInWeeks: '',
    employeeId: -1,
  },
  submitting: false,
};

class RoleForm extends React.Component {
  static propTypes = {
    fetchRoles: PropTypes.func.isRequired,
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

  handleEmployeeSelected = (id) => {
    let updatedId = id;
    const { formData } = this.state;

    if (formData.employeeId === id) {
      updatedId = -1;
    }

    this.setState({
      formData: {
        ...formData,
        employeeId: updatedId,
      },
    });
  }

  isValidRoleFormData = (formData) => {
    if (!formData.title) {
      return false;
    }
    if (formData.employeeId === -1) {
      return false;
    }

    return true;
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { formData } = this.state;
    const { fetchRoles } = this.props;

    this.setState({ submitting: true });

    if (!this.isValidRoleFormData(formData)) {
      console.log('Invalid Form');
      this.setState({ submitting: false });
      return;
    }

    try {
      await createRole(formData);
      this.setState({
        ...INITIAL_STATE,
      });

      fetchRoles();
    } catch (error) {
      console.log('Server error');
      this.setState({ submitting: false });
    }
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
      <CardContainer>
        <FormStyled>
          <Input
            name="title"
            label="Title"
            value={title}
            onChange={this.handleInputChange}
          />
          <TextArea
            name="description"
            label="Description"
            value={description}
            onChange={this.handleInputChange}
          />
          <Input
            name="durationInWeeks"
            label="How many weeks?"
            type="number"
            min="5"
            value={durationInWeeks}
            onChange={this.handleInputChange}
          />
          <EmployeeOptions
            handleEmployeeSelected={this.handleEmployeeSelected}
            activeEmployee={employeeId}
          />
          <Button
            type="submit"
            submitting={submitting}
            onClick={this.handleSubmit}
          >
            <span>Submit</span>
          </Button>
        </FormStyled>
      </CardContainer>
    );
  }
}

export default RoleForm;
