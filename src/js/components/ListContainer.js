import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import List from './List';

const ListContainer = (props) => {
  const { children } = props;
  return (
    <ListContainerStyled>
      {children}
    </ListContainerStyled>
  );
};

ListContainer.propTypes = {
  children: PropTypes.instanceOf(List).isRequired,
};

const ListContainerStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export default ListContainer;
