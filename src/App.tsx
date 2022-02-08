import React, { useState } from 'react';
import './App.css';
import LastSeenComponent from './components/LastSeenComponent';

function App() {
  const [ input, setInput ] = useState<number>()
  const [ lastSeen, setLastSeen ] = useState<number>()

  const handleOnChange = (num: number) => {
    console.log(typeof num)
    console.log(num)

    if (!isNaN(num) && num >=0)
    {
      setInput(num)
      setLastSeen(num)
    }
    else {
      console.log("ERROR")
      setInput(NaN)
      setLastSeen(0)
    }
  }
  return (
    <div className="App">
      <div>
      <input 
          onChange={(e) => handleOnChange(parseInt(e.target.value))}
          className="input" 
          type="number" 
          value={input}
          placeholder="Put a time in past" 
          >
        </input>
      </div>
      <div>Input Value {input}</div>
      <div>LastSeen Value {lastSeen}</div>
         <LastSeenComponent lastSeen={lastSeen}/>
    </div>
  );
}

export default App;
