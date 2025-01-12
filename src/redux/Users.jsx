import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers } from "../slices/userSlice";

const Users = () => {
    const users = useSelector((state) => state.userInfo.users);
    const dispatch = useDispatch();
    console.log(users);

    const deleteUserInfo = (index) => {
        dispatch(deleteUsers(index));
    };
    return (
        <div>
            {users?.map((info, index) => {
                return (
                    <div key={index}>
                        <h1>{info.name}</h1>
                        <h2>{info.age}</h2>
                        <h2>{info.age}</h2>
                        <h2>{info.contact}</h2>
                        <button onClick={() => deleteUserInfo(index)}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Users;
