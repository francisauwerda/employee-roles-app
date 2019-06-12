/**
 * Here we have all common styles for various Text Fields.
 */
import styled, { css } from 'styled-components';

const defaultFontSize = '24px';
const labelFontSizeNormal = defaultFontSize;
const labelFontSizeSmall = '16px';
const inputPaddingHorizontal = '12px';
const inputMarginHorizontal = '8px';
const inputBorderSize = '2px';
const labelTop = `calc(${inputPaddingHorizontal} + ${inputMarginHorizontal} + ${inputBorderSize})`;

export const TextFieldWrapper = styled.div`
  font-size: 16px;
  position: relative;
  width: 280px;
`;

export const TextFieldLabel = styled.label`
  color: gray;
  position: absolute;
  left: 10px;
  pointer-events: none;
  background-color: white;
  padding: 0 2px;
  transition: 0.2s ease all;

  ${props => (
    props.value
      ? css`
        top: 0;
        font-size: ${labelFontSizeSmall};
      `
      : css`
        top: ${labelTop};
        font-size: ${labelFontSizeNormal};
      `
  )}
`;

export const textFieldStyles = css`
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

export const InputStyled = styled.input`
  ${textFieldStyles}
`;

export const TextAreaStyled = styled.textarea`
  ${textFieldStyles}
`;
