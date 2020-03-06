import React from "react";
import { Link } from "react-router-dom";

const RouteNotFound = () => {
  return (
    <div className="route-not-found">
      <h2>
        Route not found. Click <Link to="/">here</Link> to return to the home
        page
      </h2>
    </div>
  );
};

export default RouteNotFound;
