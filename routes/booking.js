const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/add/:id", (req, res, next) => {
  const { start_date, end_date, start_time, end_time } = req.body;

  return Booking.create({
    start_date,
    end_date,
    start_time: start_date + " " + start_time,
    end_time: end_date + " " + end_time,
    spot: req.params.id,
    user: req.session.user._id
  })
    .then(createdBooking => {
      res.json(createdBooking);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
