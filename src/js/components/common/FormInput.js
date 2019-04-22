/* eslint-disable no-confusing-arrow */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormInput = (props) => {
  const {
    name,
    label,
    value,
    onChange,
  } = props;
  return (
    <FormInputStyled>
      <InputStyled
        type="text"
        value={value}
        name={name}
        onChange={onChange}
      />
      <LabelStyled value={value}>{label}</LabelStyled>
    </FormInputStyled>
  );
};

const defaultFontSize = '24px';
const labelFontSizeNormal = defaultFontSize;
const labelFontSizeSmall = '16px';
const inputPaddingHorizontal = '12px';
const inputMarginHorizontal = '8px';
const inputBorderSize = '2px';
const labelTop = `calc(${inputPaddingHorizontal} + ${inputMarginHorizontal} + ${inputBorderSize})`;

const LabelStyled = styled.label`
  color: gray;
  position: absolute;
  left: 10px;
  pointer-events: none;
  background-color: white;
  padding: 0 2px;

  transition: 0.2s ease all;

  top: ${props => props.value ? '0' : labelTop};
  font-size: ${props => props.value ? labelFontSizeSmall : labelFontSizeNormal};
`;

const InputStyled = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;

  padding: ${inputPaddingHorizontal} 10px;
  margin: ${inputMarginHorizontal} 0;
  border: ${inputBorderSize} solid gray;
  font-size: ${defaultFontSize};

  &:focus {
    border-color: blue;
  }

  &:focus ~ label {
    top: 0;
    font-size: ${labelFontSizeSmall};
    color: blue;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
  }
`;

const FormInputStyled = styled.div`
  font-size: 16px;
  position: relative;
`;

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
