import React, { useRef } from "react";

const UseRef = () => {
    const itemRef = useRef(0);
    const handleClick = () => {
        const domRef = itemRef.current;
        domRef.style.width = "500px";
    };
    return (
        <div>
            <h1>Hello this is useref</h1>
            <input
                type="text"
                ref={itemRef}
                className="border-b-2 bg-lime-200"
            />
            <button
                onClick={handleClick}
                className="px-4 py-2 bg-purple-500 rounded-md">
                Click it to see magic
            </button>
        </div>
    );
};

export default UseRef;
