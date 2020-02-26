//centralize route imports to this file to keep code clean

const router = require("express").Router();
const usersRoutes = require("./users");
// const spotsRoutes = require("./spots");

router.get("/", (req, res) => {
  res.send("This is home");
});

router.get("/loggedin", (req, res, next) => {
  console.log("Hery there");
});

router.use("/auth", usersRoutes);
// router.use("/parking-spots", spotsRoutes);

module.exports = router;
