import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count : ${count}`;
        console.log("Component mounted");
    }, [count]);

    function handleClick() {
        setCount((c) => c + 1);
    }

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
};

export { UseEffect };

export const UseEffectDemo = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleSize);
        console.log("Event added");
    }, []);

    function handleSize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <>
            <p>width : {width}</p>
            <p>height : {height}</p>
        </>
    );
};
