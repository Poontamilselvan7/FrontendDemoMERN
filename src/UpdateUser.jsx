import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();

    useEffect(() => {
        // Fetch user data on component mount to prefill the form (optional)
        axios.get(`https://backenddemomern-g3k0.onrender.com/api/user/${id}`)
            .then(result => {
                const user = result.data;
                setName(user.name);
                setEmail(user.email);
                setAddress(user.address);
            })
            .catch(err => console.log(err));
    }, [id]);

    const updateUser = (e) => {
        e.preventDefault();
        axios.put(`https://backenddemomern-g3k0.onrender.com/api/user/update/${id}`, { name, email, address })
            .then(result => {
                navigate('/');
            })
            .catch(err => { console.log(err) });
    }

    return (
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%',marginTop:'200px' }}>
            <div style={{ maxWidth: '400px', width: '100%' }}>
                <h1 style={{ color: '#4CAF50', textAlign: 'center', fontSize:'3rem' }}>Update User</h1>
                <form onSubmit={updateUser} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ marginBottom: '5px', fontSize:'1.5rem' }}>Name</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} 
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ marginBottom: '5px', fontSize:'1.5rem' }}>Email</label>
                        <input 
                            type="text" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} 
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ marginBottom: '5px', fontSize:'1.5rem' }}>Address</label>
                        <input 
                            type="text" 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)} 
                            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} 
                        />
                    </div>

                    <button 
                        type="submit" 
                        style={{ 
                            padding: '10px 20px', 
                            backgroundColor: '#4CAF50', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '4px', 
                            cursor: 'pointer', 
                            marginTop: '15px' ,
                            fontSize:'1.5rem'
                        }}
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;
