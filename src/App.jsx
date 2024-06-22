import React, { useState } from 'react';
import './App.css';
import logo from './logo.gif'; // Ensure the path to your logo is correct

const App = () => {
  // Initialize the position to the center of the screen
  const [position, setPosition] = useState({ 
    x: window.innerWidth / 2 - 25, 
    y: window.innerHeight / 2 - 25 
  });

  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    setPosition({ x: event.clientX - rect.left - 25, y: event.clientY - rect.top - 25 });
  };

  return (
    <div className="App" onClick={handleClick}>
      <img
        src={logo}
        className="logo"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        alt="logo"
      />
    </div>
  );
};

export default App;
