
import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react';
import './LastSeenComponent.css';

type LastSeenComponentProps = {
    lastSeenInSeconds: number | undefined;
}

const LastSeenComponent = ({ lastSeenInSeconds }: LastSeenComponentProps) => {
    const [now, setNow] = useState(Date.now() / 1000);

    let howManySecondsFromLastSeen: number | undefined;
    let howManyMinutesFromLastSeen: number | undefined;

    let timeInSecondsFixed = parseInt(now.toFixed())

    let lastSeenInSecondsFixed = typeof lastSeenInSeconds === "number" ? parseInt(lastSeenInSeconds.toFixed()) : 0;
    let lastSeenAsDate = DateTime.fromSeconds(lastSeenInSecondsFixed).toFormat("yyyy/MM/dd/' and' hh':'mm':'ss")

    if (typeof lastSeenInSeconds === "number" && lastSeenInSeconds < now )  {
        howManySecondsFromLastSeen = typeof lastSeenInSeconds === "number" ?
                                    timeInSecondsFixed - lastSeenInSeconds
                                    : 0;
        howManyMinutesFromLastSeen = typeof howManySecondsFromLastSeen === "number" ? 
                                    howManySecondsFromLastSeen / 60
                                    : 0;
    } 

    useEffect(() => {
        const interval = setInterval(() => setNow(Date.now()/1000), 1000);
        return () => {
        clearInterval(interval);
        };     
    }, []);

    return (
        <div className="wrapper">
            <div className='d-flex flex-row'>
                <div className='d-flex flex-column align-items-center justify-content-center p-5 w-50' >
                    <div className="mb-1">Current Unix Time</div>
                    <div className="fs-4 ">{timeInSecondsFixed}</div>
                    <div className="mb-1">seconds since 1 Januray 1970.</div>
                    <div className="fs-4">{lastSeenInSecondsFixed}</div>
                    <div className="mb-1">lastSeen value</div>
                </div>
                    {typeof howManySecondsFromLastSeen === "number" && howManySecondsFromLastSeen < 60 ?
                        <div className='d-flex flex-column align-items-center justify-content-center px-5 w-50'>
                                <div className="counter ">{howManySecondsFromLastSeen}</div>
                                <div className="mb-1">second ago</div>
                        </div>        
                        :
                        <div className='d-flex flex-column align-items-center justify-content-center px-5 w-50'>
                                <div className="counter ">
                                    {typeof howManySecondsFromLastSeen === "number" && howManyMinutesFromLastSeen ?
                                     howManyMinutesFromLastSeen.toFixed() : null }</div>
                                <div className="mb-1">minutes ago</div>
                        </div>    
                    }   
            </div>        
           <div className="info-wrapper">
            <div>
                <div>You put a <strong>lastSeen: {lastSeenInSeconds}</strong> - seconds have passed since 1 January 1970.</div> 
                <div>LastSeen: It's a date: {lastSeenAsDate}</div>
            </div>
            </div>

        </div>
    )
}

export default LastSeenComponent

     