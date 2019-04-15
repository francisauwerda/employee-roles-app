import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { primaryLight } from '../styles';

import avatar from '../../assets/avatar.png';
import { FONT_WEIGHTS } from './enums';

const ListItem = (props) => {
  const {
    employee: {
      firstName,
      lastName,
      nationality,
      department,
    },
  } = props;
  const name = `${firstName} ${lastName}`;
  return (
    <ListItemStyled>
      <div className="leftAccessory">
        <AvatarStyled src={avatar} alt="avatar" />
      </div>
      <div className="content">
        <Text fontWeight={FONT_WEIGHTS.bolder}>{name}</Text>
        <Text>{nationality}</Text>
        <Text fontWeight={FONT_WEIGHTS.bold}>{department}</Text>
      </div>
    </ListItemStyled>
  );
};

ListItem.propTypes = {
  employee: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    nationality: PropTypes.string,
    department: PropTypes.string,
  }).isRequired,
};

const AvatarStyled = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 0 10px;
`;

const Text = styled.div`
  font-weight: ${props => props.fontWeight};
`;

Text.defaultProps = {
  fontWeight: FONT_WEIGHTS.normal,
};

const ListItemStyled = styled.li`
  margin: 15px 0;
  cursor: pointer;
  transition: background-color .5s;
  padding: 20px 0;

  display: flex;
  width: 100%;

  &:hover {
    background-color: ${primaryLight};
  }
`;

export default ListItem;
