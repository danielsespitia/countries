import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';

import Header from './parts/Header';
import Home from './pages/Home';
import CountryInfo from './pages/CountryInfo';

import { lightTheme, darkTheme, GlobalStyles } from './themes.js';

function App() {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div
        className="App"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Header themeToggler={themeToggler} />
        <Home />
        <CountryInfo />
      </div>
    </ThemeProvider>
  );
}

export default App;
