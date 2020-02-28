import React, { useState, useEffect } from "react";
import axios from "axios";
import SpotsList from "./SpotsList";

const Spots = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    axios.get("/parking-spots/listings").then(response => {
      setSpots(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Available Parking Spots</h1>
      <SpotsList spots={spots} />
    </div>
  );
};

export default Spots;
