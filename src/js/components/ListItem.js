import React from 'react';
import styled from 'styled-components';
import { primaryLight } from '../styles';

import avatar from '../../assets/avatar.png';
import { FONT_WEIGHTS } from './enums';

const ListItem = (props) => {
  const {
    employee: {
      firstName,
      lastName,
      nationality,
      department
    }
  } = props;
  return (
    <ListItemStyled>
      <div className="leftAccessory">
        <AvatarStyled src={avatar} alt="avatar" />
      </div>
      <div className="content">
        <Text fontWeight={FONT_WEIGHTS.bold}>{firstName} {lastName}</Text>
        <Text fontWeight={FONT_WEIGHTS.normal}>{nationality}</Text>
        <Text fontWeight={FONT_WEIGHTS.light}>{department}</Text>
      </div>
    </ListItemStyled>
  );
};

const AvatarStyled = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 0 10px;
`;

const Text = styled.div`
  font-weight: ${props => props.fontWeight}
`;

Text.defaultProps = {
  fontWeight: FONT_WEIGHTS.boldest,
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
