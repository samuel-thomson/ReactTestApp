import React from 'react';
import './App.css';
import PhotoCard from "./components/PhotoCard"
import goodBoi from "./images/goodBoi.jpg"

function App() {
  return (
  <div className="App">
    <div className="PhotoCard">
      <PhotoCard 
        image={goodBoi}
        name="Good Boy"
        description="This is a pup named Tater down in Statesboro GA at a music festival called Hausfest <3"
      />
    </div>
  </div>
  );
}

export default App;