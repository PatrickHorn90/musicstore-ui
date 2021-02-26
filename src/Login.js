import React, { useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="container">
      <div className="login__header">
        <PersonIcon fontSize="large" />
        <p>
          <strong>Log In </strong> or Create an Account
        </p>
      </div>
      <div className="login__body">
        <div className="login">
          <h3>Already have an account? Sign in now.</h3>
          <form>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <div className="login__password">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <p>Forgot your password?</p>
            </div>
            <button onClick={login}>Login</button>
          </form>
        </div>
        <div className="register">
          <h3>Create Your Sweetwater.com Account!</h3>
          <p>
            You don't need an account to shop at Sweetwater.com, but registering
            for an account saves you time and effort during future visits, gives
            you access to personal Wish Lists, and makes shopping at
            Sweetwater.com more convenient.
          </p>
          <button onClick={register}>Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
