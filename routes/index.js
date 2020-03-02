//centralize route imports to this file to keep code clean

const router = require("express").Router();
const userRoutes = require("./users");
const spotRoutes = require("./spots");
const bookingRoutes = require("./booking");

router.get("/", (req, res) => {
  res.send("This is home");
});

router.get("/loggedin", (req, res, next) => {
  console.log("Logged in");
});

router.use("/auth", userRoutes);
router.use("/parking-spots", spotRoutes);
router.use("/booking", bookingRoutes);

module.exports = router;
