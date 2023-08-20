import React from 'react';
import './Header.css';
import rocketGIF from "../../assets/rocket.webp"


function Header() {
  return (
    <div className="Container">
      <div className="Text">HOME</div>
      <div className="Text">ABOUT</div>
      <div className="Text">PROJECTS</div>
      <div className="Text">CONTACT</div>
    </div>
  );
}

export default Header;
