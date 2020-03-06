import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MapDetail from "./MapDetail";

const SpotDetail = props => {
  const spotId = props.match.params.spotId;
  const [spot, setSpot] = useState(null);
  const [showEdit, setEdit] = useState(false);
  const [showDelete, setDelete] = useState(false);

  useEffect(() => {
    axios
      .get(`/parking-spots/detail/${spotId}`)
      .then(response => {
        setSpot(response.data.spot);
        setEdit(response.data.showEdit);
        setDelete(response.data.showDelete);
      })
      .catch(err => {
        if (err) {
          return props.history.push("/*");
        }
      });
  }, []);

  const deletePost = () => {
    axios.delete(`/parking-spots/delete/${spotId}`).then(response => {
      props.history.push("/my-listings");
    });
  };

  return (
    <div className="detail">
      {spot ? (
        <>
          <div className="spot-details">
            <div className="detail-top">
              <div>
                <h1>{spot.name}</h1>
                <p>Price: ${spot.price}/hour</p>
              </div>
              <p className="book-button">
                <Link to={`/booking/${spot._id}`}>Book Now</Link>
              </p>
            </div>
            <br />
            <div className="detail-bottom">
              <p>
                <img
                  height="300px"
                  src={spot.image}
                  alt="image not available"
                />
              </p>
              <br />
              <p>{spot.description}</p>
              <br />
              <h4>Address</h4>
              <p>
                {spot.address.street_address}
                <br />
                {spot.address.city}, {spot.address.state}{" "}
                {spot.address.zip_code}
              </p>
              <br />
              <p>
                <span>Type: </span>
                {spot.type}
              </p>
              <p>
                <span>Size: </span>
                {spot.size}
              </p>
              <br />
              <h4>Availability</h4>
              <p>
                From: {new Date(spot.start_date).toDateString()}
                {/* @{" "}
                {new Date(spot.start_time).toTimeString().slice(0, 5)} */}
              </p>
              <p>
                To: {new Date(spot.end_date).toDateString()}
                {/* @{" "}
                {new Date(spot.end_time).toTimeString().slice(0, 5)} */}
              </p>
              <br />
              <p>Posted by: {spot.owner.username}</p>
              <br />
              {showEdit ? (
                <Link to={`/edit/${spot._id}`}>Edit your listing</Link>
              ) : null}
            </div>
            {/* {showDelete ? (
              <button onClick={deletePost}>Delete your listing</button>
            ) : null} */}
          </div>
          <div>
            <MapDetail spot={spot} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SpotDetail;
