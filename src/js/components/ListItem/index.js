import React from 'react';
import styled from 'styled-components';
import { primary, primaryLight } from '../../styles';

const ListItem = (props) => {
  const { employee } = props;
  const { firstName } = employee;
  return (
    <ListItemStyled>
      {firstName}
    </ListItemStyled>
  );
};

const ListItemStyled = styled.li`
  background-color: ${primary};
  margin: 15px 0;
  cursor: pointer;
  transition: background-color .5s;
  padding: 20px 0;

  &:hover {
    background-color: ${primaryLight};
  }
`;


export default ListItem;
