import styled from 'styled-components';

const PageContainer = styled.div`
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: auto;

@media only screen and (max-width: 600px) {
  grid-template-columns: auto;
  grid-template-rows: auto;
}
`;

export default PageContainer;
