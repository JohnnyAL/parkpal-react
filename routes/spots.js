const express = require("express");
const router = express.Router();
const Spot = require("../models/Spot");
const User = require("../models/User");
const geocoder = require("../utils/geocoder");

// router.get("/listings", (req, res) => {
//   Spot.find()
//     .then(spots => {
//       res.json(spots);
//     })
//     .catch(err => {
//       res.status(500).json({
//         message: err.message
//       });
//     });
// });

router.get("/filtered-query", (req, res, next) => {
  if (
    !req.query.location ||
    !req.query.start_date ||
    !req.query.start_time ||
    !req.query.end_date ||
    !req.query.end_time
  ) {
    return res.status(400).json({
      message: "Please enter valid information for all fields below."
    });
  }
  geocoder
    .geocode(req.query.location)
    .then(res => {
      let longitude = res[0].longitude;
      let latitude = res[0].latitude;

      return { longitude, latitude };
    })
    .then(geolocation => {
      return Spot.find({
        $and: [
          {
            start_time: {
              $gte: req.query.start_date + " " + req.query.start_time
            }
          },
          {
            end_time: { $lte: req.query.end_date + " " + req.query.end_time }
          },
          {
            geolocation: {
              $near: {
                $maxDistance: 200000,
                $geometry: {
                  type: "Point",
                  coordinates: [geolocation.longitude, geolocation.latitude]
                }
              }
            }
          }
        ]
      }).then(spots => {
        res.json({
          spots,
          spotDetail: JSON.stringify(spots),
          user: req.session.user
        });
      });
    })
    .catch(err => {
      next(err);
    });
});

const loginCheck = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/");
  }
};

// router.get("/add", loginCheck, (req, res) => {
//   res.render("parking-spots/add.hbs", { user: req.session.user });
// });

router.post("/add", loginCheck, (req, res, next) => {
  const {
    name,
    description,
    street_address,
    city,
    state,
    zip_code,
    country,
    type,
    size,
    start_date,
    end_date,
    start_time,
    end_time,
    price
  } = req.body;

  if (
    !name ||
    !description ||
    !street_address ||
    !city ||
    !state ||
    !zip_code ||
    !country ||
    !type ||
    !size ||
    !start_date ||
    !end_date ||
    !start_time ||
    !end_time ||
    !price
  ) {
    return res.status(400).json({
      message: "Please enter valid information for all fields below."
    });
  }

  geocoder
    .geocode(`${street_address}, ${city}, ${state} ${zip_code}, ${country}`)
    .then(res => {
      let longitude = res[0].longitude;
      let latitude = res[0].latitude;
      return { longitude, latitude };
    })
    .then(geolocation => {
      return Spot.create({
        name,
        description,
        address: {
          street_address,
          city,
          state,
          zip_code,
          country
        },
        geolocation: {
          type: "Point",
          coordinates: [geolocation.longitude, geolocation.latitude]
        },
        type,
        size,
        start_date,
        end_date,
        start_time: start_date + " " + start_time,
        end_time: end_date + " " + end_time,
        price,
        owner: req.session.user._id
      })
        .then(createdSpot => {
          if (req.session.user.role === "basic") {
            return User.findByIdAndUpdate(
              req.session.user._id,
              { role: "host" },
              { new: true }
            ).then(updatedUser => {
              return {
                user: updatedUser,
                createdSpot: createdSpot
              };
            });
          }
          return { user: req.session.user, createdSpot: createdSpot };
        })
        .then(result => {
          req.session.user = result.user;
          res.json(result);
        });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

router.get("/detail/:id", (req, res) => {
  Spot.findById(req.params.id)
    // .populate("owner - also can populate reviews here when added. Look at monti's room example for syntax")
    .populate({
      path: "owner"
    })
    .then(spot => {
      let showDelete = false;
      let showEdit = false;
      if (
        req.session.user &&
        spot.owner._id.toString() === req.session.user._id.toString() //got error in console here
      ) {
        showDelete = true;
        showEdit = true;
      }
      //make sure I'm using on this data vvv or else get rid of it
      res.json({
        spot,
        spotDetail: JSON.stringify(spot),
        showDelete: showDelete,
        showEdit: showEdit
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

router.get("/edit/:id", (req, res) => {
  Spot.findById(req.params.id)
    .then(spot => {
      res.json(spot);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

router.post("/edit/:id", (req, res, next) => {
  const {
    name,
    description,
    street_address,
    city,
    state,
    zip_code,
    country,
    type,
    size,
    start_date,
    end_date,
    start_time,
    end_time,
    price
  } = req.body;

  if (
    !name ||
    !description ||
    !street_address ||
    !city ||
    !state ||
    !zip_code ||
    !country ||
    !type ||
    !size ||
    !start_date ||
    !end_date ||
    !start_time ||
    !end_time ||
    !price
  ) {
    return res.status(400).json({
      message: "Please enter valid information for all fields below."
    });
  }

  geocoder
    .geocode(`${street_address}, ${city}, ${state} ${zip_code}, ${country}`)
    .then(res => {
      console.log("GEOLOCATION", res);
      let longitude = res[0].longitude;
      let latitude = res[0].latitude;
      return { longitude, latitude };
    })
    .then(geolocation => {
      return Spot.updateOne(
        { _id: req.params.id },
        {
          name,
          description,
          address: {
            street_address,
            city,
            state,
            zip_code,
            country
          },
          geolocation: {
            type: "Point",
            coordinates: [geolocation.longitude, geolocation.latitude]
          },
          type,
          size,
          start_date,
          end_date,
          start_time: start_date + " " + start_time,
          end_time: end_date + " " + end_time,
          price,
          owner: req.session.user._id
        }
      ).then(() => {
        res.json({ message: "Post successfully updated" });
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

router.delete("/delete/:id", (req, res, next) => {
  Spot.deleteOne({ _id: req.params.id, owner: req.session.user._id })
    .then(() => {
      res.json({ message: "Post successfully deleted" });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

module.exports = router;
