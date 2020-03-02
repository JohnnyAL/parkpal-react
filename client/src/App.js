import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import Add from "./components/Add.js";
import Edit from "./components/Edit.js";
import Spots from "./components/Spots.js";
import SpotDetail from "./components/SpotDetail.js";
import Booking from "./components/Booking.js";

const App = props => {
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
      <Route
        path="/add"
        render={props => <Add {...props} setUser={setUserState} />}
      />
      <Route path="/edit/:spotId" render={props => <Edit {...props} />} />
      <Route path="/listings" component={Spots} />
      <Route
        path="/listing-detail/:spotId"
        render={props => <SpotDetail {...props} />}
      />
      <Route path="/booking/:spotId" render={props => <Booking {...props} />} />
    </div>
  );
};

export default App;
