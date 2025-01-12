import React, { useContext } from "react";
import { themeContext } from "./UseContextEx";
const ExForUseContext = () => {
    const theme = useContext(themeContext);
    // console.log(theme);
    const themeStyle = {
        backgroundColor: theme === "light" ? "black" : "white",
        color: theme === "light" ? "white" : "black",
    };
    return (
        <div style={themeStyle} className="h-screen">
            <p>Changing theme to : {theme}</p>
        </div>
    );
};

export default ExForUseContext;
