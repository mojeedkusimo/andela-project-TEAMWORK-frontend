import { useState, useEffect } from "react";
import axios from "../helperFunctions/customAxios";

let Users = () => {
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
        <div className="col-4"></div>
        <div className="col-4">
            <h1 className="m-5 text-center">All Users</h1>
            <div className="text-primary">
                <ol>
                    {users}
                </ol>
            </div>
        </div>
        <div className="col-4"></div>
    </div>
    );
}

export default Users;