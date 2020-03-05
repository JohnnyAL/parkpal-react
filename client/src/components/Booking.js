import React, { useState } from "react";
import axios from "axios";

const Booking = props => {
  const spotId = props.match.params.spotId;
  const [booking, setBooking] = useState({
    start_date: "",
    start_time: "",
    end_date: "",
    end_time: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = event => {
    setBooking({ ...booking, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`/booking/add/${spotId}`, booking)
      .then(res => {
        // should take to mybookings and prompt a message "successfully booked";
        props.history.push(`/my-bookings`);
      })
      .catch(err => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <div className="book-spot">
      <h1>When would you like to book this spot?</h1>
      <br />
      {message && <p className="message">{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="book-spot-form">
          <div className="book-spot-inputs">
            <label htmlFor="from-date">From: </label>
            <input
              type="date"
              id="from-date"
              name="start_date"
              value={booking.start_date}
              onChange={handleChange}
            />{" "}
            <label htmlFor="from-time">at: </label>
            <input
              type="time"
              id="from-time"
              name="start_time"
              value={booking.start_time}
              onChange={handleChange}
            />
          </div>
          <div className="book-spot-inputs">
            <label htmlFor="to-date">To: </label>
            <input
              type="date"
              id="to-date"
              name="end_date"
              value={booking.end_date}
              onChange={handleChange}
            />{" "}
            <label htmlFor="to-time">at: </label>
            <input
              type="time"
              id="to-time"
              name="end_time"
              value={booking.end_time}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Book this spot!</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
