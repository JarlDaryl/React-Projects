import React, { useEffect, useState } from 'react'

export default function ProgressBar({timer}) {

    const [remainingTime, setRemainingTime] = useState(timer);

	useEffect(() => {
		const interval = setInterval(() => {
      console.log('interval');
			setRemainingTime((prevTime) => prevTime - 10);
		}, 10);

    return () => {
      clearInterval(interval);
    }
	}, []);

    return 	<progress value={remainingTime} max={timer} />

}
