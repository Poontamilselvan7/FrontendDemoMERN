import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function CreateUser() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        axios.post('https://backenddemomern-g3k0.onrender.com/api/user/create', { name, email, address })
            .then(result => {
                console.log(result.data);
                navigate('/');
            })
            .catch(err => { console.log(err) });
    }

    return (
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%',marginTop:'200px' }}>
            <div style={{ maxWidth: '400px', width: '100%' }}>
                <h1 style={{ color: '#4CAF50', textAlign: 'center' , fontSize:'3rem' }}>Create User</h1>
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ marginBottom: '5px',fontSize:'1.5rem' }}>Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            onChange={(e) => { setName(e.target.value) }} 
                            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} 
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ marginBottom: '5px',fontSize:'1.5rem' }}>Email</label>
                        <input 
                            type="text" 
                            id="email" 
                            onChange={(e) => { setEmail(e.target.value) }} 
                            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} 
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ marginBottom: '5px',fontSize:'1.5rem' }}>Address</label>
                        <input 
                            type="text" 
                            id="address" 
                            onChange={(e) => { setAddress(e.target.value) }} 
                            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} 
                        />
                    </div>

                    <button 
                        type="submit" 
                        style={{ 
                            padding: '12px 15px', 
                            backgroundColor: '#4CAF50', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '4px', 
                            cursor: 'pointer', 
                            marginTop: '15px', 
                            fontSize:'1.5rem'
                        }}
                    >
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;
