import React from 'react';

import NameGenerator from "./components/NameGenerator";

import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <NameGenerator />
    </div>
  );
}

export default App;
