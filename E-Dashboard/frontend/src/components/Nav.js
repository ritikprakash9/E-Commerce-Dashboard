import React, { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import "./Nav.css";

function Nav()
{

    const auth = localStorage.getItem("user");
    return(
        <>
            <ul className='nav-bar'>
                <li> <Link to = "/"> Product</Link> </li>
                <li> <Link to = "/addproduct"> Add Product componenet</Link> </li>
                <li> <Link to = "/updateproduct"> Update Product</Link> </li>
                <li> <Link to = "/profile"> Profile </Link> </li>
                <li> {auth?<Link to = "/logout"> Logout </Link> :<Link to = "/signup">SignUp</Link>}  </li>
            </ul>
        </>
    )
}

export default Nav;