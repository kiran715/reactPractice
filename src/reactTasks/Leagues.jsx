import React from "react";

export default function Leagues() {
    const styles = {
        box: {
            maxWidth: "360px",
        },
    };
    return (
        <div className="flex flex-col items-center justify-center bg-blue-900 p-8 h-screen">
            <h1 className="mb-10 text-4xl font-semibold text-white">
                Super Over League
            </h1>
            <div className="flex max-w-md">
                <div>
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
                        alt="RCB"
                    />
                </div>
                <div>
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
                        alt="CSK"
                    />
                </div>
            </div>
        </div>
    );
}
