import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = props => {
  const logout = () => {
    axios.delete("/auth/logout").then(() => {
      props.setUser(null);
    });
  };

  if (props.user?.role == "basic") {
    return (
      <nav className="navbar">
        <div className="brand-box">
          <img className="car-logo" height="50px" src="/car-logo.png" alt="" />
          <h1>
            <Link to="/">ParkPal</Link>
          </h1>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/add">Become a host</Link>
            </li>
            <li>
              <Link to="/my-bookings">My Bookings</Link>
            </li>
            <li>
              <Link to="#">Help</Link>
            </li>
            <li>
              <Link onClick={logout} to="/">
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else if (props.user?.role == "host") {
    return (
      <nav className="navbar">
        <div className="brand-box">
          <img className="car-logo" height="50px" src="/car-logo.png" alt="" />
          <h1>
            <Link to="/">ParkPal</Link>
          </h1>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/add">List a parking spot</Link>
            </li>
            <li>
              <Link to="/my-bookings">My Bookings</Link>
            </li>
            <li>
              <Link to="/my-listings">My Listings</Link>
            </li>
            <li>
              <Link to="#">Help</Link>
            </li>
            <li>
              <Link onClick={logout} to="/">
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar">
      <div className="brand-box">
        <img className="car-logo" height="50px" src="/car-logo.png" alt="" />
        <h1>
          <Link to="/">ParkPal</Link>
        </h1>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/signup-host">Become a host</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="#">Help</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
