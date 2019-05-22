import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = (props) => {
  const { children } = props;
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  );
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export default Container;
