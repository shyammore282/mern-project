const mongoose = require("mongoose");

// const URL = "mongodb://127.0.0.1:27017/mernAdmin";

const URI =
  "mongodb+srv://shyam_more:shyam_moure@cluster0.gp79q.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0";

const connectdb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connect successfull");
  } catch (error) {
    console.error("error");
    process.exit(0);
  }
};

module.exports = connectdb;
