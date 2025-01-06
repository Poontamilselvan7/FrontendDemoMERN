import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser(){
const navigate=useNavigate();
const{id}=useParams();
const[name,setName]=useState();
const[email,setEmail]=useState();
const[address,setAddress]=useState();

const updateUser = (e)=>{
    e.preventDefault();
    axios.put(`https://backenddemomern-g3k0.onrender.com/api/user/update/${id}`, {name,email,address})
    .then(result=>{
        
        navigate('/');
    })
    .catch(err=>{console.log(err)});
}



    return(
        <div>
            <form onSubmit={updateUser}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/> <br />
                <label>Email</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>  <br />
                <label>Address</label>
                <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>  <br />
                <button>update</button>
            </form>
        </div>
    )
}


export default UpdateUser;