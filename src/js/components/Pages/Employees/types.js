/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';

export const employeeType = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  nationality: PropTypes.string,
  department: PropTypes.string,
});
