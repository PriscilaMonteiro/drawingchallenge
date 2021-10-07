import React from 'react';
import logo from './logo.svg';
import './App.css';
import Word from './components/word';
import Timer from './components/timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
          <h1>Wanna have some fun?</h1>
          <h2>Get your Team, Get a Word <br/> Set the Timer and Start Sketching!  </h2>
          <p>The first team to reach 5 points is the winner.</p>
          <p>YOU CANNOT: use letters or numbers, speak or use sign language</p>
          <p>YOU CAN: Break words down into a number of syllables</p>
      </div>
      <div>
        <Word/>
        <Timer/>
      </div>
    </div>
  );
}

export default App;
