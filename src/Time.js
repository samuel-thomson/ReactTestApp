import React from "react"

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

function Time() {
  return (
  <div className="Time" style={{color: "orange"}}>It is currently {hours %12} o'clock!
  <br />
  {timeOfDay}
  </div>
  );
}

export default Time