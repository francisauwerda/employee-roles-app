import React from 'react';
import styled from 'styled-components';
import { primaryLight } from '../styles';

const ListItem = (props) => {
  const { employee: { firstName } } = props;
  return (
    <ListItemStyled>
      {firstName}
    </ListItemStyled>
  );
};

const ListItemStyled = styled.li`
  margin: 15px 0;
  cursor: pointer;
  transition: background-color .5s;
  padding: 20px 0;

  &:hover {
    background-color: ${primaryLight};
  }
`;


export default ListItem;
