import React, { useState } from "react";
import "./SignUp.css";
import {useNavigate} from 'react-router-dom'
const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const collectData = async () =>{
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({name, email, password}),
            headers: {
                'Content-type' : 'application/json'
            },
        });

        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/');
    }

    return (
        <div >
            <div className="registeration-page">
                <h1>Register</h1>

                <input
                    onChange={(e) => setName(e.target.value)}
                    className="inpBox"
                    type="name"
                    placeholder="Enter Your Name"
                ></input>
                <input
                    onChange={(e)=> setEmail(e.target.value)}
                    className="inpBox"
                    type="email"
                    placeholder="Enter Your E-Mai ID"
                ></input>
                <input
                    onChange={(e)=> setPassword(e.target.value)}
                    className="inpBox"
                    type="password"
                    placeholder="Enter Your Password"
                ></input>
                <button onClick={collectData} className="res-btn">SignUp</button>
            </div>
        </div>
    );
};

export default Signup;
