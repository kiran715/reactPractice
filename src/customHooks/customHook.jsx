import React, { useState } from "react";
import useDebounce from "./useDebounce";

const CustomHook = () => {
    const [query, setQuery] = useState("");
    const debouncedValue = useDebounce(query, 500);

    const handleClick = () => {
        console.log("Searching for : " + debouncedValue);
    };
    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleClick}>Search</button>
            <p>debouncedQuery : {debouncedValue}</p>
        </div>
    );
};

export default CustomHook;
