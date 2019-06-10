import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const AvatarStyled = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  ${props => props.isActive === false && css`
    filter: grayscale(100%);
  `}

  ${props => (props.hasHover || props.isActive) && css`
    filter: grayscale(0%)
  `}
`;

AvatarStyled.propTypes = {
  hasHover: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default AvatarStyled;
