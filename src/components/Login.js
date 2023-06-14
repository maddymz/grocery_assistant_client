import React, { useState } from "react";
import cloudLogo from "../assets/cloud9_logo.png";
import { Link , useNavigate} from "react-router-dom";
import "./Login.css";
import { auth } from "../config/firebase";


function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth) => {
      if(auth){
        navigate('/')
      }
    })
    .catch((err) => alert(err.message));
    //some fancy firebase login 
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if(auth){
          navigate('/')
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={cloudLogo} alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={signIn}
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By Signing in you agree to terms and codition this is just a POC
          project
        </p>

        <button onClick={register} className="login__registerButton">
          Create Cloud-9 Account
        </button>
      </div>
    </div>
  );
}

export default Login;
