import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#fafafa',
  fontColor: '#000',
  auxColor: '#fff',
};

export const darkTheme = {
  body: '#202d36',
  fontColor: '#fff',
  auxColor: '#2b3743',
};

export const GlobalStyles = createGlobalStyle`
    body {
      background-color: ${(props) => props.theme.body};
      color: ${(props) => props.theme.fontColor};

    select, input, textarea, button, header {
      background-color: ${(props) => props.theme.auxColor};
      color: ${(props) => props.theme.fontColor}};
    }

    input::placeholder {
      color: ${(props) => props.theme.fontColor}};
    }

    .anchor, .flag {
      color: ${(props) => props.theme.fontColor}};
    }

    .search-bar, .card, .icon {
      background-color: ${(props) => props.theme.auxColor};
    }
`;
