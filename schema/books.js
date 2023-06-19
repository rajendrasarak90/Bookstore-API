const mongoose = require("mongoose");

// products schema
const BooksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  auther: {
    type: String,
    required: true,
  },
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;
