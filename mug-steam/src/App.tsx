import React from 'react';
// import logo from './logo.svg';
import { IconAward } from '@tabler/icons';
import { IconMugSteam } from './icons/IconMugSteam';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IconMugSteam className="aApp-logo" alt="logo" size={256} color="#61DAFB" stroke={1} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconAward alt="award" size={62} color="#61DAFB" stroke={1} />
        </a>
      </header>
    </div>
  );
}

export default App;
