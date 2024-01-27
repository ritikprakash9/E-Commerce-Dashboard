import React, { useEffect } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import "./Nav.css";
import { NativeBuffer } from 'mongoose';

function Nav()
{

    const auth = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate('/signup');
    }
    return(
        <>
            <ul className='nav-bar'>
                <li> <Link to = "/"> Product</Link> </li>
                <li> <Link to = "/addproduct"> Add Product componenet</Link> </li>
                <li> <Link to = "/updateproduct"> Update Product</Link> </li>
                <li> <Link to = "/profile"> Profile </Link> </li>
                <li> {auth?<Link onClick={logout} to = "/signup"> Logout </Link> :<Link to = "/signup">SignUp</Link>}  </li>
            </ul>
        </>
    )
}

export default Nav;