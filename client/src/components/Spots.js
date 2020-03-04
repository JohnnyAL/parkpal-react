import React, { useState, useEffect } from "react";
import SpotsList from "./SpotsList";
import Map from "./Map";

const Spots = props => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    setSpots(props.location.state?.spots);
  }, []);

  return (
    <div>
      <h1>Available Parking Spots</h1>
      <SpotsList spots={spots} />
      <Map spots={spots} />
    </div>
  );
};

export default Spots;
