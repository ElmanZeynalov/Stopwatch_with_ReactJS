import React,{useState, useEffect, useRef} from 'react';

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);


    useEffect(() =>{

    } , [isRunning]);
    
    
    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;

        console.log(startTimeRef.current);
    }

    function stop() {
        setIsRunning(false)
    }


    function reset() {
        setElapsedTime(0);
        setIsRunning(false);

    }

    function formatTime(){

        return "00:00:00";
    }
    
    return (
        <div className='stopwatch'>
            <div className='display'>
                {formatTime()}
                <div className="controller">
                    <button className='star-button' onClick={start}>Start</button>
                    <button className='stop-button' onClick={stop}>Stop</button>
                    <button className='reset-button' onClick={reset}>Reset</button>
                </div>
            </div>

        </div>
    );
}

export default Stopwatch;
