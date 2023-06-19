const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getSingleBook,
  createNewBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

router.get("/", getAllBooks);
router.get("/:id", getSingleBook);
router.post("/", createNewBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
