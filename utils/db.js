const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const URL = "mongodb://127.0.0.1:27017/mernp";

dotenv.config();

// const user = process.env.MONGOBD_USER;
// const password = process.env.MONGODB_PASSWORD;
// const database = process.env.MONGOBD_DATABASE;

const URL = process.env.MONGODB_URL;

// const URIR = `mongodb+srv://${user}:${password}cluster0.gp79q.mongodb.net/${database}?retryWrites=true&w=majority`;

const connectdb = async () => {
  try {
    await mongoose.connect(URL);
    console.log("connect successfull");
  } catch (error) {
    console.error("error");
    process.exit(0);
  }
};

module.exports = connectdb;
