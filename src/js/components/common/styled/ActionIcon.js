/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

const ActionIcon = styled.button`
  background-image: ${props => props.backgroundImage && `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  width: inherit;
  height: inherit;
  padding: 0;

  /* Touchable styles */
  border: none;
  outline: 0;
  opacity: ${props => props.submitting ? 0.5 : 1};
  pointer-events: ${props => props.submitting && 'none'};
  cursor: ${props => props.submitting ? 'not-allowed' : 'pointer'};
  :hover {
    opacity: 0.75;
  }
`;

export default ActionIcon;
