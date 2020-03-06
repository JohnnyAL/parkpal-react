import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    axios.get("/booking/my-bookings").then(res => {
      setBookings(res.data);
    });
  }, []);

  if (bookings?.length == 0) {
    return (
      <h2 className="no-bookings-listings">
        You haven't booked any parking spots. Click <Link to="/">here</Link> to
        search for available spots.
      </h2>
    );
  } else if (bookings?.length > 0) {
    return (
      <div className="bookings">
        <h1>My Bookings</h1>
        {bookings.map(booking => {
          return (
            <div key={booking._id}>
              <div className="bookings-info">
                <img
                  height="200px"
                  src={booking.spot.image}
                  alt="image not available"
                />
                <br />
                <h2>{booking.spot.name}</h2>
                <p>
                  {booking.spot.address.street_address}
                  <br />
                  {booking.spot.address.city}, {booking.spot.address.state}{" "}
                  {booking.spot.address.zip_code}
                </p>
                <br />
                <p>Type: {booking.spot.type}</p>
                <p>Size: {booking.spot.size}</p>
                <br />
                <h4>Booking Details</h4>
                <p>
                  Arrival: {new Date(booking.start_date).toDateString()} @{" "}
                  {new Date(booking.start_time).toTimeString().slice(0, 5)}
                </p>
                <p>
                  Departure: {new Date(booking.end_date).toDateString()} @{" "}
                  {new Date(booking.end_time).toTimeString().slice(0, 5)}
                </p>
                <br />
                <Link to={`listing-detail/${booking.spot._id}`}>
                  View parking spot details
                </Link>
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

export default MyBookings;
