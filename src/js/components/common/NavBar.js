import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const { routes } = props;
  return (
    <nav>
      <ul>
        {routes.map(route => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

NavBar.defaultProps = {
  routes: [],
};

export default NavBar;
