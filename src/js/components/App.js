import React from 'react';
import styled from 'styled-components';
import EmployeeForm from './EmployeeForm';
import Container from './common/Container';
import EmployeeList from './EmployeeList';

const App = () => (
  <div>
    <PageContainer>
      <Container>
        <EmployeeList />
      </Container>
      <Container>
        <EmployeeForm />
      </Container>
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
