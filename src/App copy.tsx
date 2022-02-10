import React, { useState } from 'react';
import './App.css';
import LastSeenComponent from './components/LastSeenComponent';
//styling
//milliseconds changer
//buton with actual time and date

function App() {
  const [ inputInSeconds, setInputInSeconds ] = useState<number>()
  const [ lastSeenInSeconds, setLastSeenInSeconds ] = useState<number>()

  const handleOnChange = (num: number) => {
    console.log(typeof num) 
    console.log(num)

    if (!isNaN(num) && num >=0)
    {
      setInputInSeconds(num)
      setLastSeenInSeconds(num)
    }
    else {
      console.log("ERROR")
      setInputInSeconds(NaN)
      setLastSeenInSeconds(0)
    }
  }
  return (
    <div className="App">
        <div className="header"><strong>Unix time</strong> (also known as Epoch time, Posix time, 
         <strong> seconds</strong> since the Epoch) is a system for describing a 
        point in time. It is the number of seconds that have elapsed since the Unix epoch, 
        excluding leap seconds.</div>
      <input 
          onChange={(e) => handleOnChange(parseInt(e.target.value))}
          className="input" 
          type="number" 
          value={inputInSeconds}
          placeholder="Put unix timestamp (seconds since January 1, 1970)" 
          >
        </input>
      <div>Input Value {inputInSeconds} s</div>
      <div>LastSeen Value {lastSeenInSeconds} s</div>
         <LastSeenComponent lastSeenInSeconds={lastSeenInSeconds} />
    </div>
  );
}

export default App;
