import React, { useState } from 'react';
import LastSeenComponentStyled from './LastSeenComponentStyled';

type LastSeenComponentProps = {
  lastSeen: number | undefined;
}

const LastSeenComponent = ({ lastSeen }: LastSeenComponentProps) => {
    const [time, setTime ] = useState<any>(1)

    return (
        <LastSeenComponentStyled>
            <div>LastSeen {lastSeen}</div>
            <div>Last seen {time} ago</div>
        </LastSeenComponentStyled>
    )
}

export default LastSeenComponent