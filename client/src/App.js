import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
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
import MyBookings from "./components/MyBookings.js";
import MyListings from "./components/MyListings.js";
import RouteNotFound from "./components/RouteNotFound.js";

const App = props => {
  let [user, setUser] = useState(props.user);

  let setUserState = userObj => {
    setUser(userObj);
  };

  return (
    <div className="App">
      <Navbar setUser={setUserState} user={user} />
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home {...props} user={user} />}
        />
        <Route
          exact
          path="/signup"
          render={props => (
            <Signup {...props} role="basic" setUser={setUserState} />
          )}
        />
        <Route
          exact
          path="/signup-host"
          render={props => (
            <Signup {...props} role="host" setUser={setUserState} />
          )}
        />
        <Route
          exact
          path="/login"
          render={props => <Login {...props} setUser={setUserState} />}
        />
        <Route
          exact
          path="/add"
          render={props => <Add {...props} setUser={setUserState} />}
        />
        <Route
          exact
          path="/edit/:spotId"
          render={props => <Edit {...props} />}
        />
        <Route exact path="/listings" component={Spots} />
        <Route
          exact
          path="/listing-detail/:spotId"
          render={props => <SpotDetail {...props} />}
        />
        <Route
          exact
          path="/booking/:spotId"
          render={props => <Booking {...props} />}
        />
        <Route exact path="/my-bookings" component={MyBookings} />
        <Route
          exact
          path="/my-listings"
          render={props => <MyListings {...props} />}
        />
        <Route path="*" component={RouteNotFound} />
      </Switch>
    </div>
  );
};

export default App;
