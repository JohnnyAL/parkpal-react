import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [spots, setSpots] = useState(null);
  const [geolocation, setGeolocation] = useState(null);
  const [query, setQuery] = useState({
    location: "",
    start_date: "",
    start_time: "",
    end_date: "",
    end_time: ""
  });
  const [message, setMessage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleChange = event => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .get(
        `/parking-spots/filtered-query?location=${query.location}&start_date=${query.start_date}&start_time=${query.start_time}&end_date=${query.end_date}&end_time=${query.end_time}`
      )
      .then(res => {
        setSpots(res.data.spots);
        setGeolocation(res.data.geolocation);
        setRedirect(true);
      })
      .catch(err => {
        setMessage(err.response.data.message);
      });
  };

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: "/listings",
          state: { spots: spots, geolocation: geolocation }
        }}
      />
    );
  }

  return (
    <div className="home-page">
      <div className="search-box">
        <h3>Find parking for work, leisure and more!</h3>
        <form onSubmit={handleSubmit} className="search-form">
          {message && <p className="message">{message}</p>}
          <div className="search-location">
            <label htmlFor="where">Where are you going?</label>
            <input
              type="text"
              placeholder="Enter city, state, or zip"
              id="where"
              name="location"
              value={query.location}
              onChange={handleChange}
            />
          </div>
          <div className="search-date">
            <div className="search-date-from">
              <label htmlFor="from-date">From:</label>
              <input
                type="date"
                id="from-date"
                name="start_date"
                value={query.start_date}
                onChange={handleChange}
              />
              <label htmlFor="from-time">at:</label>
              <input
                type="time"
                id="from-time"
                name="start_time"
                value={query.start_time}
                onChange={handleChange}
              />
            </div>
            <div className="search-date-to">
              <label htmlFor="to-date">To:</label>
              <input
                type="date"
                id="to-date"
                name="end_date"
                value={query.end_date}
                onChange={handleChange}
              />
              <label htmlFor="to-time">at:</label>
              <input
                type="time"
                id="to-time"
                name="end_time"
                value={query.end_time}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit">Search for Parking</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
