const mongoose = require("mongoose");

// connecting to MongoDB Compass using uri of localhost
const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1/bookstore_api", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      if (data) {
        console.log(`Connected to db...`);
      }
    })
    .catch((err) => {
      if (err) {
        console.log(`Error connecting to db: ${err}`);
      }
    });
};

module.exports = connectDB;
