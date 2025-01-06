import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

function User(){
    const [user,setUser]=useState([]);
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        address: ""
    });

useEffect(()=>{
    axios.get('https://backenddemomern-g3k0.onrender.com/api/user/fetch')
    .then((result)=>{
        setUser(result.data)
    });
},[]);



const deleteUser=(id)=>{
    axios.delete(`https://backenddemomern-g3k0.onrender.com/api/user/delete/${id}`)
    .then((result)=>{
        console.log("User Deleted");
        setUser(user.filter(u => u._id !== id));
    })
    .catch(err=>{console.log(err)});
}


   return(
        <div>
            <div>
            <h1>Users</h1> 
            </div>
            <Link to="/create">Create User</Link>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
                {
                    user.map((users) => (
                    <tr>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.address}</td>
                        <td>
                        <Link to={`/update/${users._id}`}>Update</Link>
                            <button onClick={(e)=>deleteUser(users._id)}>Delete</button>
                        </td>
                    </tr>  
                    ))
                }
            </table>
        </div>
    )
}


export default User;