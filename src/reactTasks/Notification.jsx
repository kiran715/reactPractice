import React, { useState } from "react";

export default function Notification() {
    const [notify, setNotify] = useState(0);

    const setCount = () => {
        setNotify(notify + 1);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col gap-6 text-white w-96">
                <h1 className="text-center text-4xl text-black">
                    Notification{" "}
                    <span
                        class="inline-flex items-center rounded-lg bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 relative right-4 bottom-4"
                        onClick={setCount}>
                        {notify}
                    </span>
                </h1>
                <div className="flex items-center gap-4 bg-blue-500 px-12 py-2 rounded-md">
                    <i class="fa-regular fa-circle-check"></i>
                    <p>Information Messages</p>
                </div>
                <div className="flex items-center gap-6 bg-green-500 px-12 py-2 rounded-md">
                    <i class="fa-regular fa-circle-check"></i>
                    <p>Success Messages</p>
                </div>
                <div className="flex items-center gap-6 bg-yellow-400 px-12 py-2 rounded-md">
                    <i class="fa-regular fa-bell"></i>
                    <p>Warning Messages</p>
                </div>
                <div className="flex items-center gap-6 bg-red-500 px-12 py-2 rounded-md">
                    <i class="fa-solid fa-circle-info"></i>
                    <p>Error Messages</p>
                </div>
            </div>
        </div>
    );
}
