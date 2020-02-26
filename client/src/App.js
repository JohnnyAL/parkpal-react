import React, { useState } from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";

let App = props => {
  let [user, setUser] = useState(props.user);

  let setUserState = userObj => {
    setUser(userObj);
  };

  return (
    <div className="App">
      <Navbar setUser={setUserState} user={user} />
      <Route exact path="/" render={props => <Home {...props} user={user} />} />
      <Route
        path="/signup"
        render={props => (
          <Signup {...props} role="basic" setUser={setUserState} />
        )}
      />
      <Route
        path="/signup-host"
        render={props => (
          <Signup {...props} role="host" setUser={setUserState} />
        )}
      />
      <Route
        path="/login"
        render={props => <Login {...props} setUser={setUserState} />}
      />
    </div>
  );
};

export default App;
