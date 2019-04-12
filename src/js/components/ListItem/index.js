import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { primaryLight } from '../../styles';

const ListItem = (props) => {
  const { employee: { firstName } } = props;
  return (
    <ListItemStyled>
      {firstName}
    </ListItemStyled>
  );
};

ListItem.defaultProps = {
  employee: {
    firstName: 'Default',
  },
};

ListItem.propTypes = {
  employee: PropTypes.shape({
    firstName: PropTypes.string,
  }),
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
