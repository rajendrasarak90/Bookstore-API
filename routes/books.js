const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getSingleBook,
  createNewBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

// route to get all books
router.route("/").get(getAllBooks);

// route to get single book
router.route("/:id").get(getSingleBook);

// route to create a new book
router.route("/").post(createNewBook);

// route to update the existing book using id
router.route("/:id").put(updateBook);

// route to delete the book using id
router.route("/:id").delete(deleteBook);

module.exports = router;
