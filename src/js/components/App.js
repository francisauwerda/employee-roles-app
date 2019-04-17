import React from 'react';
import styled from 'styled-components';
import ListContainer from './ListContainer';
import List from './List';

const App = () => (
  <div>
    <PageContainer>
      <ListContainer>
        <List />
      </ListContainer>
      <div>Form</div>
    </PageContainer>
  </div>
);

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
`;

export default App;
