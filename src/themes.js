import { createGlobalStyle } from 'styled-components';
import lightSearchIcon from './assets/images/search-icon-white.png';
import darkSearchIcon from './assets/images/search-icon-black.webp';

export const lightTheme = {
  body: '#fafafa',
  fontColor: '#000',
  auxColor: '#fff',
  searchIcon: darkSearchIcon,
};

export const darkTheme = {
  body: '#202d36',
  fontColor: '#fff',
  auxColor: '#2b3743',
  searchIcon: lightSearchIcon,
};

export const GlobalStyles = createGlobalStyle`
    body {
      background-color: ${(props) => props.theme.body};
      color: ${(props) => props.theme.fontColor};

    select, input, textarea, button, header, option {
      background-color: ${(props) => props.theme.auxColor};
      color: ${(props) => props.theme.fontColor}};
    }

    input::placeholder {
      color: ${(props) => props.theme.fontColor}};
    }

    .anchor, .flag {
      color: ${(props) => props.theme.fontColor}};
    }

    .search-input {
      background: url(${(props) => props.theme.searchIcon});
      background-repeat: no-repeat;
      background-size: 23px 23px;
      background-position: 28px 16px;
    }

    .search-bar, .card, .icon {
      background-color: ${(props) => props.theme.auxColor};
    }
`;
