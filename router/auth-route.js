const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).send("welcome to home page");
});

router.route("/register").get((req, res) => {
  res.status(200).send("welcome to register page");
});

router.route("/login").get((req, res) => {
  res.status(200).send("welcome to login page");
});

module.exports = router;
