const mongoose = require("mongoose");

// connecting to MongoDB Atlas using uri from dotenv file
const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1/bookstore_api", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      if (data) {
        console.log(`Connected to DB...`);
      }
    })
    .catch((err) => {
      if (err) {
        console.log(`Error while connecting to DB: ${err}`);
      }
    });
};

module.exports = connectDB;
