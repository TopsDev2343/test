import { useState, useEffect, useRef } from 'react';

function useCountdown(initialValue) {
    const [count, setCount] = useState(initialValue);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setCount(prevCount => prevCount - 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [isRunning]);

    useEffect(() => {
        if (count < 0)
            setIsRunning(false)
    }, [count])


    const start = () => {
        setIsRunning(true);
    };

    const pause = () => {
        setIsRunning(false);
    };

    const reset = () => {
        setCount(initialValue);
        setIsRunning(false);
    };

    const continuous = (value) => {
        setIsRunning(false);
        setCount(value);
        setTimeout(() => {
            setIsRunning(true);
        }, 500);
    };

    return {
        count,
        isRunning,
        start,
        pause,
        reset,
        continuous
    };
}

export default useCountdown;