import { useState } from "react";

const State = () => {
    const [mango, setMango] = useState(0);
    const [banana, setBanana] = useState(0);

    return (
        <div className="flex items-center justify-center h-screen bg-yellow-400">
            <div className="p-16 bg-white rounded-md">
                <h1 className="text-3xl font-bold text-center">
                    Bob ate <span className="text-yellow-300">{mango}</span>{" "}
                    Mangoes and{" "}
                    <span className="text-yellow-300">{banana}</span> Bananas
                </h1>

                <div className="flex justify-between">
                    <div className="flex flex-col items-center justify-center gap-y-10">
                        <img
                            src="https://media.istockphoto.com/id/1352881713/photo/mango-fruit-with-drops-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xNgofvhPOsksKtOMK9sbvQ2qZpMS6WQ3UC6Omv7g8-0="
                            alt=""
                            className="w-72"
                        />
                        <button
                            className="px-4 py-2 bg-red-400 rounded-md"
                            onClick={() => setMango((curr) => curr + 1)}>
                            Eat mangoes
                        </button>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-y-10">
                        <img
                            src="https://thumbs.dreamstime.com/b/bunch-bananas-6175887.jpg"
                            alt=""
                            className="w-96"
                        />
                        <button
                            className="px-4 py-2 bg-red-400 rounded-md"
                            onClick={() => setBanana((curr) => curr + 1)}>
                            Eat bananas
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default State;
