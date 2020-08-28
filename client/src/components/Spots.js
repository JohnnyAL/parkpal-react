import React, { useState, useEffect } from "react";
import SpotsList from "./SpotsList";
import Map from "./Map";

const Spots = (props) => {
  const [spots, setSpots] = useState([]);
  const [geolocation] = useState(props.location.state?.geolocation);

  useEffect(() => {
    setSpots(props.location.state?.spots);
  }, []);

  if (spots.length > 0) {
    return (
      <div className="available-spots">
        <div className="spot-listing">
          <SpotsList spots={spots} />
        </div>
        <Map spots={spots} geolocation={geolocation} />
      </div>
    );
  } else {
    return (
      <h2 className="no-parking-available">
        No parking spots available. Please check back later.
      </h2>
    );
  }
};

export default Spots;
