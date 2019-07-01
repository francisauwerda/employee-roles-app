/* eslint-disable no-confusing-arrow */
import styled, { css } from 'styled-components';
import { FONT_WEIGHTS } from '../../enums';
import Touchable from './Touchable';

const buttonSize = '0.875rem';

const Button = styled(Touchable)`
  /* Typography */
  font-weight: ${FONT_WEIGHTS.button};
  font-size: ${buttonSize};
  min-width: 64px;
  text-transform: uppercase;

  /* Specs */
  color: #ffffff;
  font-size: 14px;
  border-radius: 4px;
  height: 36px;
  margin-top: 8px;

  ${props => css`
    margin-top: ${props.marginTop};
  `}

  & > span {
    margin: 0 16px;
  }
`;

export default Button;
