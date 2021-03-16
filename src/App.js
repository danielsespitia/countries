import './App.css';

import Home from './pages/Home';
import CountryInfo from './pages/CountryInfo';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: '#212121',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <Home />
      <CountryInfo />
    </div>
  );
}

export default App;
