import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = props => {
  const logout = () => {
    axios.delete("/auth/logout").then(() => {
      props.setUser(null);
    });
  };

  if (props.user) {
    return (
      <nav className="navbar">
        <Link to="/">Home</Link> <Link to="/add">List a parking spot</Link>{" "}
        <Link to="/my-bookings">My Bookings</Link>{" "}
        <Link to="/my-listings">My Listings</Link>{" "}
        <Link onClick={logout} to="/">
          Log out
        </Link>
      </nav>
    );
  }
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/login">Log in</Link>
      <Link to="/signup">Sign up</Link>
      <Link to="/signup-host">Become a host</Link>
    </nav>
  );
};

export default Navbar;
