const mongoose = require("mongoose");

// Books schema
const Bookschema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: [50, "Not more than 50 chars"],
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Book", Bookschema);
