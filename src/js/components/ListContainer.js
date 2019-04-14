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
  margin: 30px;
`;

export default ListContainer;
