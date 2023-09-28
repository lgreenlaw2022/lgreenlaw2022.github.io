import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Container" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1 }}>
      <a href="#home" className="Text">HOME</a>
      <a href="#about" className="Text">ABOUT</a>
      {/* <a href="#projects" className="Text">PROJECTS</a> */}
      <a href="#resume" className="Text">RESUME</a>
      <a href="#contact" className="Text">CONTACT</a>
    </div>
  );
}

export default Header;
