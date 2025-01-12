import React, { useState } from "react";

export default function Form() {
    const [details, setDetails] = useState([]);
    const [data, setData] = useState({ name: "", email: "", city: "" });

    function formSubmit(e) {
        e.preventDefault();
        setDetails((prevDetails) => [...prevDetails, data]);

        // Reset the form input
        setData({ name: "", email: "", city: "" });
        console.log(details);
    }

    function handleData(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        console.log({ ...data, [name]: value });
    }
    return (
        <div>
            <form action="" onSubmit={formSubmit}>
                <label htmlFor="name">
                    {" "}
                    Name :
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleData}
                    />
                </label>
                <p>{data.name}</p>
                <br />
                <label htmlFor="email" className="">
                    Email :
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleData}
                    />
                </label>
                <br />
                <label htmlFor="city">
                    City :
                    <input
                        type="text"
                        name="city"
                        value={data.city}
                        onChange={handleData}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}
