import React from 'react';
import './App.css';
import myImage from './my-image.jpg'; // Import the image from the src folder

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Replace React logo with your image */}
        <img src={myImage} alt="replaced logo" className="App-logo" />
        <p>
          My image displayed
        </p>

      </header>
    </div>
  );
}

export default App;
