import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = props => {
  const [signup, setSignup] = useState({
    username: "",
    password: ""
  });
  const [message, setMessage] = useState("");

  const { username, password } = signup;

  const handleChange = event => {
    setSignup({ ...signup, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/auth/signup", {
        username: username,
        password: password,
        role: props.role
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
        <h1>Sign up</h1>
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
            <button type="submit">Sign up</button>
          </div>
        </form>
        <p class="account-message">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
