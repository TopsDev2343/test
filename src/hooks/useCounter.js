import { useState, useEffect } from "react";

const useCounter = (start) => {
    const [counter, setCounter] = useState(start)

    useEffect(() => {
        if (counter > 0) {
            setTimeout(() => setCounter(counter - 1), 1000);
        }
    }, [counter, start])

    return [counter, setCounter];
};

export default useCounter