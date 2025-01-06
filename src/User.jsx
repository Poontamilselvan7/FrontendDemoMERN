import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function User() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('https://backenddemomern-g3k0.onrender.com/api/user/fetch')
            .then((result) => {
                setUser(result.data);
            });
    }, []);

    const deleteUser = (id) => {
        axios.delete(`https://backenddemomern-g3k0.onrender.com/api/user/delete/${id}`)
            .then(() => {
                console.log("User Deleted");
                setUser(user.filter(u => u._id !== id));
            })
            .catch(err => { console.log(err); });
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '0', margin: '0', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
            <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px', position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', fontSize: '3rem' }}>Users</h1>
            <div style={{ marginBottom: '20px', textAlign: 'center', marginTop: '120px', marginLeft: '1280px' }}>
                <Link to="/create" style={{ textDecoration: 'none', color: 'white', backgroundColor: '#28a745', padding: '12px 18px', borderRadius: '5px', fontSize: '1.1rem' }}>Create User</Link>
            </div>
            <div style={{ marginTop: '50px', width: '90%' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#f9f9f9', margin: '0 auto', fontSize: '1.5rem' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#ddd', textAlign: 'left' }}>
                            <th style={{ border: '1px solid #ccc', padding: '14px' }}>Name</th>
                            <th style={{ border: '1px solid #ccc', padding: '14px' }}>Email</th>
                            <th style={{ border: '1px solid #ccc', padding: '14px' }}>Address</th>
                            <th style={{ border: '1px solid #ccc', padding: '14px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((users) => (
                                <tr key={users._id} style={{ borderBottom: '1px solid #ddd' }}>
                                    <td style={{ border: '1px solid #ccc', padding: '14px' }}>{users.name}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '14px' }}>{users.email}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '14px' }}>{users.address}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '14px' }}>
                                        <Link to={`/update/${users._id}`} style={{ marginRight: '10px', textDecoration: 'none', color: '#007BFF', fontSize: '1.2rem' }}>Update</Link>
                                        <button onClick={() => deleteUser(users._id)} style={{ color: 'white', backgroundColor: '#DC3545', border: 'none', padding: '8px 12px', borderRadius: '3px', cursor: 'pointer', fontSize: '1.2rem' }}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default User;