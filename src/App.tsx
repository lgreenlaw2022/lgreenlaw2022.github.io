import React from 'react';
import logo from './logo.svg';
import './App.css';
import rocketGIF from "./assets/rocket.webp"
import buildingGIF from "./assets/geometric-loop.webp"
import Construction from './components/Construction/Construction';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Construction/>
        Bottom of container
      </header>
    </div>
  );
}

export default App;
