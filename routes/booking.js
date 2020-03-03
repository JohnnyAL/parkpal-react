const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Spot = require("../models/Spot");

router.post("/add/:id", (req, res, next) => {
  const spotId = req.params.id;
  const { start_date, end_date, start_time, end_time } = req.body;

  if (!start_date || !end_date || !start_time || !end_time) {
    return res.status(400).json({
      message: "Please enter valid information for all fields below."
    });
  }

  return Booking.create({
    start_date,
    end_date,
    start_time: start_date + " " + start_time,
    end_time: end_date + " " + end_time,
    spot: spotId,
    user: req.session.user._id
  })
    .then(createdBooking => {
      return Spot.findByIdAndUpdate(
        { _id: spotId },
        { $push: { bookings: createdBooking._id } }
      );
    })
    .then(updatedSpot => {
      res.json(updatedSpot);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

router.get("/my-bookings", (req, res, next) => {
  Booking.find({ user: req.session.user._id })
    .populate("spot")
    .then(bookings => {
      res.json(bookings);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
