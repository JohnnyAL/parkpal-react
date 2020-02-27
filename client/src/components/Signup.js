import React, { useState } from "react";
import axios from "axios";

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
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
        />

        <button type="submit">Sign up</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

export default Signup;
