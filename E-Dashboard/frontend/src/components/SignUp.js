import React, { useState } from "react";
import "./SignUp.css";

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [passoword, setPassword] = useState("");

    const collectData = () => { console.log(name, email, passoword)};
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
                    onChange={(e)=> setPassword(e.target.passoword)}
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
