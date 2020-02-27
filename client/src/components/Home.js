import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <Link to="/listings">View all parking spots</Link>
    </div>
  );
};

export default Home;
