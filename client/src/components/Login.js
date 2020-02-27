import React, { useState } from "react";
import axios from "axios";

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

        <button type="submit">Log in</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

export default Login;
