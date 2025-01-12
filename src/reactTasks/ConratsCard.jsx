import React from "react";
import "./styles/style.css";

export default function ConratsCard() {
    return (
        <>
            <div className="background p-4">
                <div className="heading text-center mb-10">
                    <p className="text-5xl">Congratulations</p>
                </div>
                <div>
                    <div className="card bg-blue-200 flex flex-col items-center p-10 gap-4 flex-shrink">
                        <div>
                            <img
                                src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
                                alt=""
                            />
                        </div>
                        <div className="text-center">
                            <p className="text-2xl">Robert Fort</p>
                            <p className="text-gray-600">
                                Hardwerd University, LA
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
