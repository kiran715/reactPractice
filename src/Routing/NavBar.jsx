import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="p-4 bg-blue-500">
            <ul className="flex gap-6">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default NavBar;
