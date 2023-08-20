import React from 'react';
import logo from './logo.svg';
import './App.css';
import rocketGIF from "./assets/rocket.webp"
import buildingGIF from "./assets/geometric-loop.webp"
import Construction from './components/Construction/Construction';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <Construction/> */}
        <Header></Header>
      {/* </header> */}
    </div>
  );
}

export default App;
