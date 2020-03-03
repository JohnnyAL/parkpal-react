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

  if (listings?.length == 0) {
    return (
      <p>
        You haven't posted any parking spots. Click <Link to="/add">here</Link>{" "}
        to list spot
      </p>
    );
  } else if (listings?.length > 0) {
    return (
      <div>
        <h1>My Listings</h1>
        {listings.map(listing => {
          return (
            <div key={listing._id}>
              <img
                height="200px"
                src={listing.image}
                alt="image not available"
              />
              <p>{listing.name}</p>
              <p>Price: ${listing.price}/hour</p>
              <p>{listing.description}</p>
              <h4>Address</h4>
              <p>
                {listing.address.street_address}
                <br />
                {listing.address.city}, {listing.address.state}{" "}
                {listing.address.zip_code}
              </p>
              <p>Type: {listing.type}</p>
              <p>Size: {listing.size}</p>
              <h4>Availability</h4>
              <p>
                From: {new Date(listing.start_date).toDateString()} @{" "}
                {new Date(listing.start_time).toTimeString().slice(0, 5)}
              </p>
              <p>
                To: {new Date(listing.end_date).toDateString()} @{" "}
                {new Date(listing.end_time).toTimeString().slice(0, 5)}
              </p>
              <Link to={`listing-detail/${listing._id}`}>
                View your listing
              </Link>
              <br />
              <Link to={`/edit/${listing._id}`}>Edit your listing</Link>
              <br />
              <button
                onClick={() =>
                  axios
                    .delete(`/parking-spots/delete/${listing._id}`)
                    .then(res => {
                      console.log("deleted response", res);
                      props.history.push("/my-listings");
                    })
                }
              >
                Delete
              </button>

              <hr />
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
