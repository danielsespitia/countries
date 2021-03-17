import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';

import Header from './parts/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';

import { lightTheme, darkTheme, GlobalStyles } from './themes.js';
import { StyledApp } from './assets/styles/GlobalStyles';

function App() {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp className="App">
        <Router>
          <Header themeToggler={themeToggler} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:name" component={Detail} />
          </Switch>
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
