import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { employeeType } from '../Employees/types';
import ClickableAvatar from '../../common/ClickableAvatar';
import { FONT_WEIGHTS } from '../../enums';

const EmployeeOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const EmployeeOptionName = styled.span`
  ${props => props.isActive && css`
    color: blue;
    font-weight: ${FONT_WEIGHTS.bold};
  `}
`;

const FirstNameSpan = styled.span`
  margin-right: 5px;
`;

class EmployeeOption extends React.Component {
  static propTypes = {
    employee: employeeType.isRequired,
    isActive: PropTypes.bool.isRequired,
    handleEmployeeSelected: PropTypes.func.isRequired,
  }

  state = {
    hasHover: false,
  };

  toggleHover = () => {
    this.setState(state => ({ hasHover: !state.hasHover }));
  }

  render() {
    const {
      employee,
      isActive,
      handleEmployeeSelected,
    } = this.props;

    const { hasHover } = this.state;

    return (
      <EmployeeOptionWrapper
        key={employee.id}
        onClick={() => handleEmployeeSelected(employee.id)}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        role="presentation"
      >
        <ClickableAvatar
          hasHover={hasHover}
          isActive={isActive}
        />
        <EmployeeOptionName isActive={isActive}>
          <FirstNameSpan>{employee.firstName}</FirstNameSpan>
          <span>{employee.lastName}</span>
        </EmployeeOptionName>
      </EmployeeOptionWrapper>
    );
  }
}

export default EmployeeOption;
