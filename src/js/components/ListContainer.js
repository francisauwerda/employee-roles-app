import React from 'react';
import styled from 'styled-components';

class ListContainer extends React.Component {
  render() {
    return (
      <ListContainerStyled>
        {this.props.children}
      </ListContainerStyled>
    );
  }
};

const ListContainerStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export default ListContainer;
