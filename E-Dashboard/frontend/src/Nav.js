import React from 'react';
import {Link} from 'react-router-dom';
import "./App.css";
function Nav()
{
    return(
        <>
            <ul className='nav-bar'>
                <li> <Link to = "/"> Product</Link> </li>
                <li> <Link to = "/addproduct"> Add Product componenet</Link> </li>
                <li> <Link to = "/updateproduct"> Update Product</Link> </li>
                <li> <Link to = "/logout"> Logout </Link> </li>
                <li> <Link to = "/profile"> Profile </Link> </li>
            </ul>
        </>
    )
}

export default Nav;