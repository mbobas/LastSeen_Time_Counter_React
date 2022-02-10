import React, { useState } from 'react';
import './App.css';
import LastSeenComponent from './components/LastSeenComponent';

function App() {
  const [ inputInSeconds, setInputInSeconds ] = useState<number>()
  const [ lastSeenInSeconds, setLastSeenInSeconds ] = useState<number>()
  const [ message, setMessage ] = useState<string>()
  const [now, setNow] = useState(Date.now() / 1000);

  const handleOnChange = (num: number) => {
    if (!isNaN(num) && num >=0 && num.toString().length < 11)
    {
      setInputInSeconds(num)
      setLastSeenInSeconds(num)
      setMessage("")
    }else if (!isNaN(num) && num >=0 && num.toString().length >= 11){
      setMessage("lastSeen value is too long in Future :)")
    } else if (isNaN(num)) {
      setMessage("NaN")
      setInputInSeconds(NaN)
      setLastSeenInSeconds(0)
    }
  }
  return (
    <div className="App">
        <div className="wrapper-up">
          <div className="header w-50">
            <strong>Unix time</strong> (also known as Epoch time, Posix time, 
            <strong> seconds</strong> since the Epoch) is a system for describing a 
            point in time. It is the number of seconds that have elapsed since the Unix epoch, 
            excluding leap seconds.
          </div>
      </div>
      <div className="wrapper-middle input-group ">
          <input 
              onChange={(e) => handleOnChange(parseInt(e.target.value))}
              className="input form-control w-50" 
              type="number" 
              value={inputInSeconds}
              placeholder="Put unix timestamp (seconds since January 1, 1970)" 
              >
          </input>
          <div className="message">{message}</div>
      </div>
         <LastSeenComponent lastSeenInSeconds={lastSeenInSeconds} />
    </div>
  );
}

export default App;
