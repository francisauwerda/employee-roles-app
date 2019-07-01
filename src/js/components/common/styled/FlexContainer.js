import styled, { css } from 'styled-components';

const FlexContainer = styled.div`
  display: flex;

  ${props => css`
    justify-content: ${props.justifyContent};
    flex-direction: ${props.flexDirection};
    align-self: ${props.alignSelf};
    align-items: ${props.alignItems};
  `}
`;

export default FlexContainer;
