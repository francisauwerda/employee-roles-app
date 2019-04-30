/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';
import { FONT_WEIGHTS } from '../../enums';

const buttonSize = '0.875rem';
const buttonBackgroundColor = 'rgb(98, 0, 238)';
const buttonBackgroundColorHover = 'rgb(98, 0, 238, 0.92)';
const buttonBackgroundColorFocus = 'rgba(98, 0, 238, 0.76)';

const Button = styled.button`
  /* Typography */
  font-weight: ${FONT_WEIGHTS.button};
  font-size: ${buttonSize};
  min-width: 64px;
  text-transform: uppercase;

  /* Specs */
  border: none;
  color: #ffffff;
  font-size: 14px;
  border-radius: 4px;
  height: 36px;
  outline: 0;
  margin-top: 8px;

  & > span {
    margin: 0 16px;
  }

  /* Submitting */
  pointer-events: ${props => props.submitting && 'none'};
  background-color: ${props => props.submitting ? buttonBackgroundColorFocus : buttonBackgroundColor};
  cursor: ${props => props.submitting ? 'not-allowed' : 'pointer'};
  :hover {
    background-color: ${props => props.submitting ? buttonBackgroundColorFocus : buttonBackgroundColorHover};
  }
`;

export default Button;
