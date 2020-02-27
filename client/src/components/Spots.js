import React, { useState } from "react";
import axios from "axios";

const Spots = props => {
  const [spots, setSpots] = useState([]);

  //use effect here to set state of spots (axios call to get all spots)

  return (
    <div>
      <h1>Available Parking Spots</h1>
    </div>
  );
};

export default Spots;
