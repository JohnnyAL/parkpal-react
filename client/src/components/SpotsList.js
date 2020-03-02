import React from "react";
import { Link } from "react-router-dom";

const SpotsList = props => {
  if (props.spots) {
    return props.spots.map(spot => {
      return (
        <div key={spot._id}>
          <p>
            <img height="100px" src={spot.image} alt="image not available" />
          </p>
          <p>
            <Link to={`/listing-detail/${spot._id}`}> {spot.name}</Link>
          </p>
          <p>Type: {spot.type}</p>
          <p>Size: {spot.size}</p>
          <p>
            {spot.address.street_address}
            <br />
            {spot.address.city}, {spot.address.state} {spot.address.zip_code}
          </p>
          <Link to={`/listing-detail/${spot._id}`}>Spot Details</Link>
          <p>Price: ${spot.price}/hour</p>
          <Link to={`/booking/${spot._id}`}>Book Now</Link>
          <hr />
        </div>
      );
    });
  } else {
    return null;
  }
};

export default SpotsList;
