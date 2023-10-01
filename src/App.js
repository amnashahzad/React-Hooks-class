import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');

  return (
    <>
      <div style={{ backgroundColor: color, minHeight: '100vh' }}>
        <h1>My favorite color is {color}!</h1>
        <button type="button" onClick={() => setColor('blue')}>
          Blue
        </button>
        <button type="button" onClick={() => setColor('red')}>
          Red
        </button>
        <button type="button" onClick={() => setColor('pink')}>
          Pink
        </button>
        <button type="button" onClick={() => setColor('green')}>
          Green
        </button>
      </div>
    </>
  );
}

export default App;
