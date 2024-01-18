import React from "react";
import "./SignUp.css";

const Signup = () => {
    return (
        <div >
            <div className="registeration-page">
                <h1>Register</h1>

                <input
                    className="inpBox"
                    type="name"
                    placeholder="Enter Your Name"
                ></input>
                <input
                    className="inpBox"
                    type="email"
                    placeholder="Enter Your E-Mai ID"
                ></input>
                <input
                    className="inpBox"
                    type="passoword"
                    placeholder="Enter Your Password"
                ></input>
                <button className="res-btn">SignUp</button>
            </div>
        </div>
    );
};

export default Signup;
