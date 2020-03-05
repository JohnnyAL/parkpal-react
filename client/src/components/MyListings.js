import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MyListings = props => {
  const [listings, setListings] = useState(null);

  useEffect(() => {
    axios.get("/parking-spots/my-listings").then(res => {
      setListings(res.data);
    });
  }, []);

  const deleteSpot = (listingId, index) => {
    console.log("Clicked Delete");
    axios.delete(`/parking-spots/delete/${listingId}`).then(res => {
      let withoutListing = [...listings];
      withoutListing.splice(index, 1);
      setListings(withoutListing);
    });
  };

  if (listings?.length == 0) {
    return (
      <h2 className="no-bookings-listings">
        You haven't posted any parking spots. Click <Link to="/add">here</Link>{" "}
        to list a spot.
      </h2>
    );
  } else if (listings?.length > 0) {
    return (
      <div className="listings">
        <h1>My Listings</h1>
        {listings.map((listing, index) => {
          return (
            <div key={listing._id}>
              <div className="listings-info">
                <img
                  height="200px"
                  src={listing.image}
                  alt="image not available"
                />
                <h2>{listing.name}</h2>
                <p>Price: ${listing.price}/hour</p>
                <br />
                <p>{listing.description}</p>
                <br />
                <h4>Address</h4>
                <p>
                  {listing.address.street_address}
                  <br />
                  {listing.address.city}, {listing.address.state}{" "}
                  {listing.address.zip_code}
                </p>
                <br />
                <p>Type: {listing.type}</p>
                <p>Size: {listing.size}</p>
                <br />
                <h4>Availability</h4>
                <p>
                  From: {new Date(listing.start_date).toDateString()} @{" "}
                  {new Date(listing.start_time).toTimeString().slice(0, 5)}
                </p>
                <p>
                  To: {new Date(listing.end_date).toDateString()} @{" "}
                  {new Date(listing.end_time).toTimeString().slice(0, 5)}
                </p>
                <br />
                <Link to={`listing-detail/${listing._id}`}>
                  View your listing
                </Link>
                <Link to={`/edit/${listing._id}`}>Edit your listing</Link>
                <br />
                <button
                  onClick={() => {
                    deleteSpot(listing._id, index);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default MyListings;
