import React from 'react';
import {useState, useEffect } from 'react';

export default function MapleClock() {

    const [mapleTime, setMapleTime] = useState(new Date());

    useEffect(() => {

        const interval = setInterval(() => {
            setMapleTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function formatTime(time) {

        const options = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: 'UTC',
        };

        return time.toLocaleTimeString('en-US', options);
    }

    return (
        <div>
            <p>
                Maple Time:{' '}
                {formatTime(mapleTime)}
            </p>
        </div>
    )
}