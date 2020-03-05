import React from "react";
import { Link } from "react-router-dom";

const SpotsList = props => {
  if (props.spots) {
    return props.spots.map(spot => {
      return (
        <div className="listing-box" key={spot._id}>
          <ul>
            <div className="listing-box-left">
              <li>
                <img
                  height="100px"
                  src={spot.image}
                  alt="image not available"
                />
              </li>
              <li>
                <h4>
                  <Link to={`/listing-detail/${spot._id}`}> {spot.name}</Link>
                </h4>
              </li>
              <li>
                {spot.address.street_address}
                <br />
                {spot.address.city}, {spot.address.state}{" "}
                {spot.address.zip_code}
              </li>
              <br />
              <li>
                <h4>Price: ${spot.price}/hour</h4>
              </li>
            </div>
            <div className="listing-box-right">
              <div className="detail-button">
                <Link to={`/listing-detail/${spot._id}`}>Spot Details</Link>
              </div>
              <li>
                <h4>Type:</h4>
                {spot.type}
              </li>
              <li>
                <h4>Size:</h4>
                {spot.size}
              </li>
              <Link to={`/booking/${spot._id}`} className="book-button">
                Book Now
              </Link>
            </div>
          </ul>
        </div>
      );
    });
  } else {
    return null;
  }
};

export default SpotsList;
