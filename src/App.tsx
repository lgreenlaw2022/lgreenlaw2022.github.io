import React from 'react';
import logo from './logo.svg';
import './App.css';
import rocketGIF from "./assets/rocket.webp"
import Construction from './components/Construction/Construction';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';


function App() {
  return (
    <div className="App">
      {/* <Construction/> */}
      <Header></Header>
      <Home></Home>
      <About></About>
      <Resume></Resume>
      <Contact></Contact>
    </div>
  );
}

export default App;
