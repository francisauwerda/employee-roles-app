import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FONT_WEIGHTS } from '../enums';
import FlexContainer from './styled/FlexContainer';
import ActionIcon from './styled/ActionIcon';
import AvatarContainer from './styled/AvatarContainer';
import AvatarStyled from './styled/AvatarStyled';

// Icons
import deleteIcon from '../../../assets/baseline_delete_black_24dp.png';

const ListItem = (props) => {
  const {
    mainText,
    secondaryText,
    tertiaryText,
    secondaryActionHandler,
    avatarIcon,
    itemId,
  } = props;

  return (
    <ListItemStyled>
      <FlexContainer>
        <AvatarContainer
          justifyContent="flex-start"
          flexDirection="column"
        >
          <AvatarStyled src={avatarIcon} alt="avatar" />
        </AvatarContainer>
        <FlexContainer
          justifyContent="flex-start"
          flexDirection="column"
        >
          <FirstLineText>
            {`${mainText} (${itemId})`}
          </FirstLineText>
          <SecondLineText>
            {secondaryText}
          </SecondLineText>
          <SecondLineText>
            {tertiaryText}
          </SecondLineText>
        </FlexContainer>
      </FlexContainer>
      {secondaryActionHandler && (
        <SecondaryAction>
          <ActionIcon
            backgroundImage={deleteIcon}
            onClick={secondaryActionHandler}
            submitting={false}
          />
        </SecondaryAction>
      )}
    </ListItemStyled>
  );
};

ListItem.propTypes = {
  mainText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  tertiaryText: PropTypes.string.isRequired,
  secondaryActionHandler: PropTypes.func,
  avatarIcon: PropTypes.string.isRequired,
  itemId: PropTypes.number.isRequired,
};

ListItem.defaultProps = {
  secondaryActionHandler: () => {},
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

const SecondaryAction = styled(FlexContainer)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding-left: 16px;
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
