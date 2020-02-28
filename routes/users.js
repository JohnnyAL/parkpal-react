const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");

router.post("/signup", (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let role = req.body.role;

  if (!username) {
    return res.status(400).json({ message: "Please enter username." });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters." });
  }

  User.findOne({ username: username })
    .then(user => {
      if (user) {
        return res
          .status(400)
          .json({ message: "Username is already taken. Please try again." });
      }

      bcrypt
        .hash(password, 10)
        .then(hash => {
          return User.create({
            username: username,
            password: hash,
            role: role
          });
        })
        .then(createdUser => {
          req.session.user = createdUser;
          res.json(createdUser);
        });
    })
    .catch(err => {
      res.status(500).json({ message: "Error while authorizing" });
    });
});

router.post("/login", (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  let user;

  User.findOne({ username: username })
    .then(foundUser => {
      if (!foundUser) {
        return res
          .status(400)
          .json({ message: "Invalid Credentials. Please try again." });
      }

      user = foundUser;

      return bcrypt.compare(password, foundUser.password);
    })
    .then(match => {
      if (!match) {
        return res
          .status(400)
          .json({ message: "Invalid Credentials. Please try again." });
      }

      req.session.user = user;
      res.json(user);
    });
});

router.delete("/logout", (req, res, next) => {
  req.session.destroy(() => {
    res.json({ message: "Successful logout" });
  });
});

router.get("/loggedin", (req, res) => {
  console.log("USERRRRRRR", req.session.user);
  res.json(req.session.user);
});

module.exports = router;
