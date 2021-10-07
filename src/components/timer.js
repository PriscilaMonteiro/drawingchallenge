import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";


import "./timer.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};


function Timer() {

  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(0);

  const handleStart = () => {
    setStart(true);
  };



  return (
    <div className="App">
       <p className="info">
          <button onClick={handleStart}>Start Timer</button>
        </p>
      
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying={start}
          duration={30}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      
      
    </div>
  );
}

export default Timer
