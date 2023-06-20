const Books = require("../models/books");

// To get all books from database
const getAllBooks = async (req, res) => {
  try {
    const books = await Books.find({});
    if (!books || books.length < 1) {
      return res.status(200).json({ msg: "No books found" });
    }
    if (books) {
      return res.status(200).json({
        data: books,
      });
    }
  } catch (error) {
    console.log("Error while finding all book :", error);
    res.status(400).json({ error: "Error while finding all book" });
  }
};

// To get single book from the database
const getSingleBook = async (req, res) => {
  try {
    const book = await Books.findById(req.params.id);
    if (!book) {
      return res.status(200).json({ error: "Book Not Found" });
    }
    return res.status(200).json({
      data: book,
    });
  } catch (error) {
    console.log("Error while finding single book :", error);
    res.status(400).json({ error: "Error while finding single book " });
  }
};

// To create a new book in our database
const createNewBook = async (req, res) => {
  try {
    const book = await Books.create(req.body);
    return res.status(201).json({
      data: {
        book,
        msg: "Book Created Successfully",
      },
    });
  } catch (error) {
    console.log("Error while creating author:", error);
    res.status(400).json({ error: "Error while creating author" });
  }
};

// To update the book in the database
const updateBook = async (req, res) => {
  try {
    const book = await Books.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ msg: "Book not found to update" });
    }
    return res.status(200).json({
      data: {
        book,
        msg: "Book Updated Successfully",
      },
    });
  } catch (error) {
    console.log("Error while updating author:", error);
    res.status(400).json({ error: "Error while updating author" });
  }
};

// To delete a single book from the database using id
const deleteBook = async (req, res) => {
  try {
    const book = await Books.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ msg: "Book not found to Delete" });
    }
    return res.status(200).send({
      data: {
        book,
        msg: "Book Deleted",
      },
    });
  } catch (error) {
    console.log("Error while deleting book:", error);
    res.status(400).json({ error: "Error while deleting book" });
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  createNewBook,
  updateBook,
  deleteBook,
};
