import React from "react";
import { Link } from "react-router-dom";

const Contents = () => {
    const details = [1, 2, 3, 4, 5];
    return (
        <div className="flex flex-col ">
            {details.map((info) => {
                return (
                    <Link
                        key={info}
                        to={`/content/${info}`}
                        className="text-blue-400">
                        Contents {info}
                    </Link>
                );
            })}
        </div>
    );
};

export default Contents;
