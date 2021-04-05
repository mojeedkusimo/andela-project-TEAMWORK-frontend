import { useState, useEffect } from "react";
import axios from "../helperFunctions/customAxios";

export const Users = () => {
    let [users, setUsers] = useState("");

    useEffect(() => {
        let getUsers = async() => {
            let fetchData = await axios.get('/users');
            let allUsers = fetchData.data.message.map((data) => {
                return (
                    <li key={data.user_id}>
                        {data.firstname} {data.lastname}
                    </li>
                )
            });
            setUsers(allUsers);
        }
        getUsers();
    },[])

    return (
    <div className="row mt-5">
        <div className="col"></div>
        <div className="col-8 shadow-lg mx-3 my-5">
            <h1 className="text-center pt-3 action-header">All Users</h1>
            <div className="text-primary">
                <ol>
                    {users}
                </ol>
            </div>
        </div>
        <div className="col"></div>
    </div>
    );
}
