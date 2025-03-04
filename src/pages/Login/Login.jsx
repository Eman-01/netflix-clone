import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";

const Login = () => {
  const [signstate, setSignState] = useState("Sign in");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event)=>{
    event.preventDefault()
    if(signstate === "Sign In"){
      await login(email, password)
    }else{
      await signup(name, email, password)
    }
  }


  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signstate}</h1>
        <form>
          {signstate === "Sign Up" ? (
            <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Your name" />
          ) : (
            <></>
          )}
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}}  type="password" placeholder="Password" />
          <button onClick={user_auth} type="submit">{signstate}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signstate === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already Have an Account?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
