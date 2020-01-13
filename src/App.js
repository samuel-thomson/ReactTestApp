import React from 'react';
import './App.css';

const date = new Date()
const hours = date.getHours();
let timeOfDay

if(hours < 6) {
  timeOfDay = "Why are you up right now?"
}
else if(hours >= 6 && hours <= 12) {
  timeOfDay = "Good Morning!!!"
}  
else if(hours >= 12 && hours < 9) {
  timeOfDay = "Good Afternoon!!!"
}
else if(hours <= 9) {
  timeOfDay = "Good Night!"
}

function App() {
  return (
  <div className="App">It is currently {hours %12} o'clock!
  <br />
  {timeOfDay}
  </div>
  );
}

export default App;
