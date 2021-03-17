import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';

import Header from './parts/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';

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
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          className="App"
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid black',
            width: '1440px',
          }}
        >
          <Router>
            <Header themeToggler={themeToggler} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Detail exact path="/detail" component={Detail} />
            </Switch>
          </Router>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
