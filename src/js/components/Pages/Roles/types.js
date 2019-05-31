/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';

export const roleType = PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  durationInWeeks: PropTypes.number,
  employeeId: PropTypes.number,
});
