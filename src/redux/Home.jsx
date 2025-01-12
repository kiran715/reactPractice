import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../slices/userSlice";

const Home = () => {
    const dispatch = useDispatch();
    const [formInput, setFormInput] = useState({
        name: "",
        age: "",
        email: "",
        contact: "",
    });

    const handleChange = (event) => {
        console.log(formInput);
        const { name, value } = event.target;
        setFormInput((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const addUser = (e) => {
        e.preventDefault();
        dispatch(setUsers(formInput));
    };

    return (
        <div>
            <form action="">
                <label>Name : </label>
                <br />
                <input
                    type="text"
                    name="name"
                    value={formInput.name}
                    onChange={handleChange}
                />
                <br />
                <label>Age : </label>
                <br />
                <input
                    type="number"
                    name="age"
                    value={formInput.age}
                    onChange={handleChange}
                />
                <br />
                <label>Email : </label>
                <br />
                <input
                    type="email"
                    name="email"
                    value={formInput.email}
                    onChange={handleChange}
                />
                <br />
                <label>Contact : </label>
                <br />
                <input
                    type="number"
                    name="contact"
                    value={formInput.contact}
                    onChange={handleChange}
                />
                <br />

                <button onClick={addUser}>add</button>
            </form>
        </div>
    );
};

export default Home;
