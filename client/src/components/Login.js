import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = props => {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });
  const [message, setMessage] = useState("");

  const { username, password } = login;

  const handleChange = event => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/auth/login", {
        username: username,
        password: password
      })
      .then(response => {
        // redirect
        props.history.push("/");
        // update state for user in <App/>
        props.setUser(response.data);
      })
      .catch(err => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <div className="auth">
      <div className="auth-form">
        <h1>Log in</h1>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="auth-inputs">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChange}
            />
            <br />
            <button type="submit">Log in</button>
          </div>
        </form>
        <p class="account-message">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
