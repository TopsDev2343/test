import { useState, useEffect } from "react";

const useCustomeCounter = (start) => {
    const [counter, setCounter] = useState(start);
    const [stop, setStop] = useState(false)

    useEffect(() => {
        if (counter > 0 && !stop) {
            setTimeout(() => setCounter(counter - 1), 1000);
        }
    }, [counter, start, stop])

    return [counter, setCounter, setStop];
};

export default useCustomeCounter