import React from 'react';
import './Resume.css';
import resume from "../../assets/resume-screenshot.jpg"


function Resume() {
  return (
    <div className="resume-Container">
      <div className="resume-Text">View My Resume</div>
      
      <a
        href="https://docs.google.com/document/d/e/2PACX-1vRblP1I5kzgBNp8K6adJhf2G58zYSsXrbQwqRjBKemtvpU4U6jSERLpDRBiBBspuKzWKLYI87Md8N-X/pub"
        target="_blank"
        rel="noreferrer"
      >
        <img className="Image" src={resume} alt="resume thumbnail" />
      </a>
    </div>
  );
}

export default Resume;
