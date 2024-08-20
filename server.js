const express = require("express");
const router = require("./router/auth-route");
const controllers = require("./controller/auth-controller");
const connectdb = require("./utils/db");

const app = express();

// use middleware to excces the routes and moduler
app.use("/api/auth", router);

// default method for router
app.get("/", (req, res) => {
  res.status(200).send("home");
});

// using contoller
app.route("/home").get(controllers.home);
app.route("/register").get(controllers.register);

connectdb().then(() => {
  app.listen(5000, () => {
    console.log("server listen at localhost:5000");
  });
});
