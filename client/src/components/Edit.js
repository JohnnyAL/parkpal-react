import React, { useState, useEffect } from "react";
import axios from "axios";

const Edit = props => {
  const spotId = props.match.params.spotId;
  const [spot, setSpot] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`/parking-spots/edit/${spotId}`)
      .then(res => {
        let data = res.data;
        setSpot({
          name: data.name,
          description: data.description,
          street_address: data.address.street_address,
          city: data.address.city,
          state: data.address.state,
          zip_code: data.address.zip_code,
          country: data.address.country,
          type: data.type,
          size: data.size,
          start_date: data.start_date.slice(0, 10),
          end_date: data.end_date.slice(0, 10),
          start_time: new Date(data.start_time).toTimeString().slice(0, 5),
          end_time: new Date(data.end_time).toTimeString().slice(0, 5),
          price: data.price
        });
      })
      .catch(err => {
        if (err) {
          return props.history.push("/*");
        }
      });
  }, []);

  const handleChange = event => {
    setSpot({ ...spot, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post(`/parking-spots/edit/${spotId}`, spot)
      .then(response => {
        props.history.push(`/listing-detail/${spotId}`);
      })
      .catch(err => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <div className="add-edit">
      {spot ? (
        <>
          <h1>Edit Your Parking Spot</h1>

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
        </>
      ) : null}
    </div>
  );
};

export default Edit;
