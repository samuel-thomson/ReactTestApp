import React from 'react';
import './App.css';
import PhotoCard from "./components/PhotoCard"
import goodBoi from "./images/goodBoi.jpg"
import Bronson from "./images/Bronson.jpg"
import jerry from "./images/jerry.jpg"
import Marc from "./images/Marc.jpeg"
import Lindsey from "./images/Lindsey.jpg"

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
    <div className="PhotoCard">
      <PhotoCard 
        image={Bronson}
        name="Christian"
        description="Christian is my brother, my best friend, and my once band mate. This is him having a good ass time at Hausfest when we played there."
      />
    </div>
    <div className="PhotoCard">
      <PhotoCard 
        image={Marc}
        name="Marc"
        description="Marc is my brother from another mother. I'm really proud of this kid. He's got such a good heart."
      />
    </div>
    <div className="PhotoCard">
      <PhotoCard 
        image={jerry}
        name="Jerry"
        description="Jerry is a good friend that Christian and I met at Hausefest. He used to play in a really cool band called Space Cadets from NJ."
      />
          <div className="PhotoCard">
      <PhotoCard 
        image={Lindsey}
        name="Lindsey"
        description="Lindsey is another swell pal that we met at Hausfest. She's a stunning artest. We hung out and went to Wafflehouse."
      />
    </div>
    </div>
  </div>
  );
}

export default App;