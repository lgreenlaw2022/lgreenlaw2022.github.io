import React from 'react';
import './Home.css';


function Home() {
  return (
    <div className="Home-container">
      <div style={{display: 'flex', justifyContent: 'flex-start'}}>Welcome</div>
      <div style={{display: 'flex', justifyContent: 'flex-end', color: '#2f2f2f'}}>I'm Libby</div>
      
    </div>
  );
}

export default Home;
