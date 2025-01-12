import React from "react";
import lapLogo from "../assets/laptop.svg";

export default function Login() {
    return (
        <div className="h-screen bg-gradient-to-r from-purple-900 to-rose-400 flex justify-center items-center">
            <div className="grid grid-cols-2 gap-24 bg-white rounded-xl px-20 py-16">
                <div className="flex items-center justify-center">
                    <div>
                        <img src={lapLogo} alt="" className="min-w-60" />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center gap-8 w-60">
                    <div className="">
                        <form className="flex flex-col justify-center items-center gap-8 w-full">
                            <div>
                                <h1 className="text-xl font-bold">
                                    Member login
                                </h1>
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="bg-gray-200 py-2 px-6 rounded-3xl"
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="bg-gray-200 py-2 px-6 rounded-3xl"
                                />
                            </div>
                            <div className="w-full">
                                <button className="bg-green-400 w-full rounded-3xl py-2 text-white font-medium">
                                    LOGIN
                                </button>
                            </div>
                            <div>
                                <p className="text-sm">
                                    Forgot{" "}
                                    <a href="" className="text-green-500">
                                        Username / Password ?
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div>
                        <a href="" className="text-sm text-green-500">
                            Create Your Account
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
