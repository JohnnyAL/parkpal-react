import React, { useState, useEffect } from "react";
import axios from "axios";
import SpotsList from "./SpotsList";

const Spots = props => {
  const [spots, setSpots] = useState(null);

  useEffect(() => {
    // axios.get("/parking-spots/listings").then(response => {
    //   setSpots(response.data);
    // });
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
