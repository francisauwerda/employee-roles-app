import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FONT_WEIGHTS } from '../enums';
import { primaryLight } from '../../styles';
import FlexContainer from '../common/styled/FlexContainer';

// Icons
import avatar from '../../../assets/avatar.png';
import deleteIcon from '../../../assets/baseline_delete_black_24dp.png';


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
      <FlexContainer>
        <AvatarContainer
          justifyContent="flex-start"
          flexDirection="column"
        >
          <AvatarStyled src={avatar} alt="avatar" />
        </AvatarContainer>
        <FlexContainer
          justifyContent="flex-start"
          flexDirection="column"
        >
          <FirstLineText>
            {name}
          </FirstLineText>
          <SecondLineText>
            {nationality}
          </SecondLineText>
          <SecondLineText>
            {department}
          </SecondLineText>
        </FlexContainer>
      </FlexContainer>
      <SecondaryAction
        alignSelf="flex-start"
      >
        <ActionIcon src={deleteIcon} alt="delete-icon" />
      </SecondaryAction>
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

const Text = styled.div`
  font-weight: ${props => props.fontWeight};
`;

Text.defaultProps = {
  fontWeight: FONT_WEIGHTS.normal,
};


const FirstLineText = styled(Text)`
  font-size: 16px;
  color: #000000de;
`;

const SecondLineText = styled(Text)`
  font-size: 14px;
  color: #00000099;
`;

const AvatarContainer = styled(FlexContainer)`
  padding-right: 16px;
`;

const ActionIcon = styled.img`
  width: inherit;
  height: inherit;
`;

const SecondaryAction = styled(FlexContainer)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding-left: 16px;

  &:hover {
    background-color: ${primaryLight};
  }
`;

const AvatarStyled = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ListItemStyled = styled.li`
  height: 72px;
  margin: 16px;
  transition: background-color .5s;

  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export default ListItem;
