import React, { useEffect, useState } from "react";
import api from "./api";
const Axiosapi = () => {
    const [apiData, setApiData] = useState([]);

    const sampleData = { name: "abcd" };

    async function postData() {
        try {
            const response = await api.post("/sampledata", sampleData);
            console.log("data submitted");
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    // useEffect(() => {
    //     setApiData((prev) => [...prev, dataObj]);
    //     console.log(
    //         apiData.map((obj) => {
    //             return obj;
    //         })
    //     );
    // }, []);

    async function apiCall() {
        const res = await api.get("/realestate");
        const data = res.data;
        setApiData((prev) => [...prev, ...data]);
        console.log(apiData);
    }

    return (
        <div>
            <p>Axios api</p>
            <button
                className="px-4 py-2 bg-blue-400 rounded-md"
                onClick={apiCall}>
                click
            </button>
            <button
                onClick={postData}
                className="px-4 py-2 bg-blue-400 rounded-md">
                post data
            </button>
        </div>
    );
};

export default Axiosapi;
