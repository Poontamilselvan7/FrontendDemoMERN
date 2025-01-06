import React from "react";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import User from "./User";
import { Link } from "react-router-dom";
import { BrowserRouter , Route , Routes } from 'react-router-dom';
function Apps(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<User/>}/>
                <Route path="/create" element={<CreateUser/>}/>
                <Route path="/update/:id" element={<UpdateUser/>}/>
            </Routes>
            {/* <nav>
                <Link to="/">User</Link>
                <Link to="/create">Create User</Link>
                <Link to="/update">Update User</Link>
            </nav> */}
            </BrowserRouter>
        </div>
    )
}


export default Apps;