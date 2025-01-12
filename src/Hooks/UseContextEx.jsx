import React, { createContext, useState } from "react";
import ExForUseContext from "./ExForUseContext";

const themeContext = createContext();
export { themeContext };

const UseContextEx = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((curr) => {
            return curr === "light" ? "dark" : "light";
        });
    };
    return (
        <themeContext.Provider value={theme}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <ExForUseContext />
        </themeContext.Provider>
    );
};

export default UseContextEx;
