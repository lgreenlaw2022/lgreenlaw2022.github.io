import React from 'react';
import logo from './logo.svg';
import './App.css';
import rocketGIF from "./assets/rocket.webp"
import buildingGIF from "./assets/geometric-loop.webp"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rocketGIF} alt="wait until the page loads" />
        <img src={buildingGIF} alt="wait until the page loads" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
