import React, { useCallback, useEffect, useState } from "react";

const UseCallbacks = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => {
        return [number + 1, number + 2];
    }, [number]);

    const theme = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };

    return (
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark((curr) => !curr)}>
                Toggle theme
            </button>
            <List getItems={getItems} />
        </div>
    );
};

export default UseCallbacks;

const List = ({ getItems }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log("setting items");
        setItems(getItems());
    }, [getItems]);

    return (
        <div>
            {items.map((item) => {
                return <p>{item}</p>;
            })}
        </div>
    );
};
export { List };
