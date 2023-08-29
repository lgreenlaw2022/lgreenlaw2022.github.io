import React from 'react';
import logo from './logo.svg';
import './App.css';
import rocketGIF from "./assets/rocket.webp"
import Construction from './components/Construction/Construction';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      {/* <Construction/> */}
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
