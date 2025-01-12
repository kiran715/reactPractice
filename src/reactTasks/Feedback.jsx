import React from "react";
import sadLogo from "../assets/sad.svg";
import neutralLogo from "../assets/neutral.svg";
import happyLogo from "../assets/happy.svg";
export default function Feedback() {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-l from-pink-300 to-violet-50">
            <div className="bg-white p-10 rounded-md">
                <div className="text-center m-10">
                    <h1 className="font-medium text-2xl text-wrap">
                        How satisfied you are with our <br /> customer support
                        pefomance?
                    </h1>
                </div>
                <div className="flex justify-between m-16">
                    <div>
                        <img src={sadLogo} alt="" width={"48px"} />
                        <p className="text-center mt-2 text-black">Sad</p>
                    </div>
                    <div>
                        <img src={neutralLogo} alt="" width={"48px"} />
                        <p className="text-center mt-2">None</p>
                    </div>
                    <div>
                        <img src={happyLogo} alt="" width={"48px"} />
                        <p className="text-center mt-2">Happy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
