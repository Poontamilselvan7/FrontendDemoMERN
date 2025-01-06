import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function CreateUser(){

    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [address,setAddress]=useState();
    const navigate=useNavigate();

    const submit = (e)=>{
        e.preventDefault();
        axios.post('https://backenddemomern-g3k0.onrender.com/api/user/create',{name,email,address})
        .then(result=>{
            console.log(result.data)
            navigate('/');
        })
        .catch(err=>{console.log(err)});
    }

    return(
        <div>
            <h1>Create User</h1>
            <form onSubmit={submit}>
                <label>Name</label>
                <input type="text" id="name" onChange={(e)=>{setName(e.target.value)}}/> <br />
                <label>Email</label>
                <input type="text" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>  <br />
                <label>Address</label>
                <input type="text" id="address" onChange={(e)=>{setAddress(e.target.value)}}/>  <br />
                <button type="submit">create</button>
            </form>
        </div>
    )
}


export default CreateUser;