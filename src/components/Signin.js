import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import './Signin.css';

const Signin = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [showForgotPassword, setshowForgotPassword] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSignin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            navigate("/", { state: { email: userCredential.user.email } });
        } catch (error) {
            setError(error.message);
            if (error.code ==="auth/wrong-password"){
                setshowForgotPassword (true);
            }
        }
    };
        const handleForgotPassword = async() =>{
            try{
                await sendPasswordResetEmail(auth,email);
                alert("request accept.check your inbox");
            }catch(error){
                setError(error.message);
            }

            };
     
    

    return (
        <div className="container">

            <h1>Sign In</h1>
            <form onSubmit={handleSignin}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                     <button type="submit" >Sign In</button>

                {showForgotPassword &&(
                <button type="button" onClick={handleForgotPassword}>
                    Forgot Password?</button>
               ) }
                {error && <p>{error}</p>}
                
           
            </form>
        </div>
    );

};

export default Signin;