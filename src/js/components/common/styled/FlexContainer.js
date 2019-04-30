import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;

  justify-content: ${props => props.justifyContent};
  flex-direction: ${props => props.flexDirection};
  align-self: ${props => props.alignSelf};

`;

export default FlexContainer;
