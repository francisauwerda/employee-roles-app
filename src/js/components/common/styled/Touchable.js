/* eslint-disable no-confusing-arrow */

// This file contains all touchable properties of a button.
import styled from 'styled-components';

const buttonBackgroundColor = 'rgb(98, 0, 238)';
const buttonBackgroundColorHover = 'rgb(98, 0, 238, 0.92)';
const buttonBackgroundColorFocus = 'rgba(98, 0, 238, 0.76)';

const Touchable = styled.button.attrs(props => ({
  // Override default colors.
  backgroundColor: props.backgroundColor || buttonBackgroundColor,
  backgroundColorFocus: props.backgroundColorFocus || buttonBackgroundColorFocus,
  backgroundColorHover: props.backgroundColorHover || buttonBackgroundColorHover,
}))`
  border: none;
  outline: 0;
  pointer-events: ${props => props.submitting && 'none'};
  cursor: ${props => props.submitting ? 'not-allowed' : 'pointer'};

  background-color: ${props => props.submitting ? props.backgroundColorFocus : props.backgroundColor};
  :hover {
    background-color: ${props => props.submitting ? props.backgroundColorFocus : props.backgroundColorHover};
  }
`;

export default Touchable;
