import React from 'react';
import './App.css';

const date = new Date()

function App() {
  return (
  <div className="App">It is currently {date.getHours() %12} o'clock!</div>
  );
}

export default App;
