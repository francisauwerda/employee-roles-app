import React from 'react';
import PropTypes from 'prop-types';

import { TextFieldWrapper, TextFieldLabel, InputStyled } from '../styled/Forms/TextField';

const Input = (props) => {
  const {
    name,
    label,
    value,
    onChange,
    type,
    min,
  } = props;
  return (
    <TextFieldWrapper>
      <InputStyled
        type={type}
        min={min}
        value={value}
        name={name}
        onChange={onChange}
      />
      <TextFieldLabel value={value}>{label}</TextFieldLabel>
    </TextFieldWrapper>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  min: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  min: undefined,
};

export default Input;
