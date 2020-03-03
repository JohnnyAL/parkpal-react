import React, { useState, useEffect } from "react";
import SpotsList from "./SpotsList";

const Spots = props => {
  const [spots, setSpots] = useState(null);

  useEffect(() => {
    setSpots(props.location.state?.spots);
  }, []);

  return (
    <div>
      <h1>Available Parking Spots</h1>
      <SpotsList spots={spots} />
    </div>
  );
};

export default Spots;
