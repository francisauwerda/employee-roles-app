import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { primary } from '../../styles';

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  height: 72px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin-bottom: 40px;
  padding-bottom: 5px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 960px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const StyledNav = styled.nav`
  height: 100%;
`;

const NavList = styled.ul`
  /* Reset list styles */
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  height: 100%;
`;

const NavItem = styled.li`
  padding: 0 5px;
  height: 100%;
  display: flex;
`;

const activeClassName = 'active';
const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  text-decoration: none;
  /* background-color: brown; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    /* background-color: yellow; */
    border-bottom: 5px solid red;
  }

  &.${activeClassName} { 
    /* color: blue; */
    border-bottom: 5px solid ${primary};
  }
`;

const Header = (props) => {
  const { routes } = props;
  return (
    <Wrapper>
      <HeaderContainer>
        <a href="/">Employee Roles</a>
        <StyledNav>
          <NavList>
            {routes.map(route => (
              <NavItem key={route.path}>
                <StyledNavLink
                  to={route.path}
                  exact
                >
                  {route.name}
                </StyledNavLink>
              </NavItem>
            ))}
          </NavList>
        </StyledNav>
      </HeaderContainer>
    </Wrapper>
  );
};

Header.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

Header.defaultProps = {
  routes: [],
};

export default Header;
