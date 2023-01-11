import React from 'react';

import NameGenerator from "./components/NameGenerator";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Name Generator</h1>
      </header>

      <NameGenerator />
    </div>
  );
}

export default App;
