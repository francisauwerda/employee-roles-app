import React from 'react';
import PropTypes from 'prop-types';

import AvatarStyled from './styled/AvatarStyled';
import avatarIcon from '../../../assets/avatar.png';

const ClickableAvatar = (props) => {
  const {
    hasHover,
    isActive,
  } = props;

  return (
    <div>
      <AvatarStyled
        src={avatarIcon}
        alt="avatar"
        hasHover={hasHover}
        isActive={isActive}
      />
    </div>
  );
};

ClickableAvatar.propTypes = {
  hasHover: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
};


export default ClickableAvatar;
