import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  height: 72px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin-bottom: 40px;
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

const NavList = styled.ul`
  /* Reset list styles */
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
`;

const NavItem = styled.li`
  padding: 0 5px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const Header = (props) => {
  const { routes } = props;
  return (
    <Wrapper>
      <HeaderContainer>
        <a href="/">Employee Roles</a>
        <nav>
          <NavList>
            {routes.map(route => (
              <NavItem key={route.path}>
                <NavLink to={route.path}>{route.name}</NavLink>
              </NavItem>
            ))}
          </NavList>
        </nav>
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
