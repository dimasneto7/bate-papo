import { Button } from "@material-ui/core";
import { auth, provider } from "../../Firebase";
import React from "react";
import "./Login.css";

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src="logo.png" alt="Bate-Papo" />
            </div>
            <div className="login__nomeLogo">
                <h1>Bate-Papo</h1>
            </div>
            
            <Button onClick={signIn}>Sign In</Button>
        </div>      
    );
}

export default Login;
