import {useEffect, useState} from "react";
import fetchPosts from "./utils/fetch-data.js";

const UserPrev = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchPosts().then((response) => {
            setUsers(response)
        })
    }, []);

    return <ul>
        {users.map((user) => (
            <div key={user.id} className='bg-blue-50 shadow-md p-4 my-6 rounded-lg'>
                <h2 className='text-xl font-bold'>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        ))}
    </ul>

}

export default UserPrev