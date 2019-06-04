import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    margin: 0 !important;
    padding: 0 !important;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const palette = {
  grey: '#EDEDED',
  black: '#4A4A4A',
  orange: '#EA7F28',
  darkOrange: '#D37324',
  white: '#FFFFFF'
};

const fonts = {
  primary: 'Roboto, sans-serif'
};

const colors = {
  bgWhite: palette.white,
  bgGrey: palette.grey,
  border: palette.grey,
  button: palette.orange,
  dropdownItem: palette.orange,
  buttonPressed: palette.darkOrange,
  link: palette.orange,
  text: palette.black,
  textWhite: palette.white
};

const sizes = {
  xsmall: '12px',
  small: '14px',
  medium: '18px',
  large: '32px'
};

export default {
  palette,
  fonts,
  colors,
  sizes
};
