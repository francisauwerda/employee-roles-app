import React from 'react';
import PropTypes from 'prop-types';

import { TextFieldWrapper, TextFieldLabel, TextAreaStyled } from '../styled/Forms/TextField';

const TextArea = (props) => {
  const {
    label,
    value,
    name,
    onChange,
  } = props;

  return (
    <TextFieldWrapper>
      <TextAreaStyled
        value={value}
        name={name}
        onChange={onChange}
      />
      <TextFieldLabel value={value}>{label}</TextFieldLabel>
    </TextFieldWrapper>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
