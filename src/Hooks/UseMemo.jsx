import React, { useMemo, useState } from "react";

const UseMemo = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    // useMemo usage
    // only renders if number is changed
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);

    // only renders if  dark changes
    const themeStyle = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
        };
    }, [dark]);

    function slowFunction(num) {
        for (let i = 0; i < 10000000; i++) {}
        return num * 2;
    }

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e) => {
                    setNumber(e.target.value);
                }}
            />
            <button onClick={() => setDark((curr) => !curr)}>
                Toggle theme
            </button>
            <p style={themeStyle}>{doubleNumber}</p>
        </div>
    );
};

export default UseMemo;
