import React from 'react';
import AvatarStyled from './styled/AvatarStyled';
import AvatarContainer from './styled/AvatarContainer';

import avatarIcon from '../../../assets/avatar.png';

const ClickableAvatar = () => (
  <AvatarContainer>
    <AvatarStyled src={avatarIcon} alt="avatar" />
  </AvatarContainer>
);

export default ClickableAvatar;
