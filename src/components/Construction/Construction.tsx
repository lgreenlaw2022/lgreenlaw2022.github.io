import React from 'react';
import './Construction.css';
import rocketGIF from "../../assets/rocket.webp"


function Construction() {
  return (
    <div className="Container">
      <img className="Image" src={rocketGIF} alt="wait until the page loads" />
      <div className="Text">
        <div className="HeaderText">
          Please Excuse Our Appearance...
        </div>
        <div className="BodyText">this website is under construction</div>
      </div>
    </div>
  );
}

export default Construction;
