import React from 'react';
import PropTypes from 'prop-types';

const FormInput = (props) => {
  const {
    name,
    label,
    value,
    onChange,
  } = props;
  return (
    <div name={name}>
      <span>{label}</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  label: undefined,
};

export default FormInput;
