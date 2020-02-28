import React, { useState } from "react";
import axios from "axios";

const Add = props => {
  const [spot, setSpot] = useState({
    name: "",
    description: "",
    street_address: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
    type: "Driveway",
    size: "Compact",
    start_date: "",
    end_date: "",
    start_time: "",
    end_time: "",
    price: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = event => {
    // console.log(event.target.value);
    // console.log(spot);
    setSpot({ ...spot, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/parking-spots/add", spot)
      .then(response => {
        console.log(response);
        let spotId = response.data.createdSpot._id;
        props.history.push(`/listing-detail/${spotId}`);
        // update state for user in <App/>
        if (response.data.user.role === "basic") {
          props.setUser(response.data.user);
        }
      })
      .catch(err => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <div className="add-edit">
      <h1>Add a Parking Spot</h1>

      <br />

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="add-edit-form">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={spot.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="description">Description: </label>
          <input
            type="textarea"
            name="description"
            id="description"
            value={spot.description}
            onChange={handleChange}
          />

          <br />
          <br />

          <h4>Address:</h4>
          <label htmlFor="street">Street address: </label>
          <input
            type="text"
            name="street_address"
            id="street"
            value={spot.street_address}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="city">City: </label>
          <input
            type="text"
            name="city"
            id="city"
            value={spot.city}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="state">State: </label>
          <input
            type="text"
            name="state"
            id="state"
            value={spot.state}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="zip">Zip Code: </label>
          <input
            type="text"
            name="zip_code"
            id="zip"
            value={spot.zip_code}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="country">Country: </label>
          <input
            type="text"
            name="country"
            id="country"
            value={spot.country}
            onChange={handleChange}
          />

          <br />
          <br />

          <label htmlFor="type">Type: </label>
          <select
            name="type"
            id="type"
            value={spot.type}
            onChange={handleChange}
          >
            <option value="Driveway">Driveway</option>
            <option value="Street">Street</option>
            <option value="Parking lot">Parking lot</option>
            <option value="Garage">Garage</option>
          </select>

          <br />

          <label htmlFor="size">Size: </label>
          <select
            name="size"
            id="size"
            value={spot.size}
            onChange={handleChange}
          >
            <option value="Compact">Compact</option>
            <option value="Midsized">Midsized</option>
            <option value="Large">Large</option>
          </select>

          <br />
          <br />

          <label htmlFor="start-date">Available from:</label>
          <input
            type="date"
            id="start-date"
            name="start_date"
            value={spot.start_date}
            onChange={handleChange}
          />

          <label htmlFor="start-time">at:</label>
          <input
            type="time"
            id="start-time"
            name="start_time"
            value={spot.start_time}
            onChange={handleChange}
          />

          <br />

          <label htmlFor="end-date">Available to:</label>
          <input
            type="date"
            id="end-date"
            name="end_date"
            value={spot.end_date}
            onChange={handleChange}
          />

          <label htmlFor="end-time">at:</label>
          <input
            type="time"
            id="end-time"
            name="end_time"
            value={spot.end_time}
            onChange={handleChange}
          />

          <br />
          <br />

          <label htmlFor="price">Price per hour (in USD): </label>
          <input
            type="number"
            name="price"
            id="price"
            value={spot.price}
            onChange={handleChange}
          />

          <br />
          <br />

          <button type="submit">Submit</button>
        </div>
      </form>

      <a href="/">Home</a>
    </div>
  );
};

export default Add;
