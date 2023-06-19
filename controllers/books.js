const Books = require("../schema/books");

// To get all the books from the database
const getAllBooks = async (req, res) => {
  try {
    const books = await Books.find({});
    if (books.length < 1) {
      res.status(200).json({
        msg: "No Books found",
      });
      return;
    }
    if (books) {
      res.status(200).json({
        data: books,
      });
    }
  } catch (error) {
    res.status(404).json({
      msg: "Error in finding books",
    });
  }
};

// To create a new book in our database
const createNewBook = async (req, res) => {
  try {
    const book = await books.create(req.body);
    res.status(201).json({
      data: {
        book,
      },
    });
  } catch (error) {
    res.status(400).json({
      data: {
        msg: "Error in creating new book",
      },
    });
  }
};

// To delete a single book from our database using id
// const deletebook = async (req, res) => {
//   try {
//     const { id: bookID } = req.params;
//     // deleting the book from database
//     const book = await book.findOneAndDelete({
//       _id: bookID,
//     });
//     if (!book) {
//       return;
//     }
//     res.status(200).send({
//       data: {
//         msg: "book Deleted",
//       },
//     });
//   } catch (error) {
//     res.status(400).send({
//       data: {
//         msg: error,
//       },
//     });
//   }
// };

// // To update the book quantity in the database
// const updateBook = async (req, res) => {
//   try {
//     // Destructuring the bookID and Number query
//     const { id: bookID } = req.params;
//     const { number } = req.query;

//     if (!number) {
//       res.status(400).json({
//         data: {
//           msg: "Error while updating quantity",
//         },
//       });
//       return;
//     }

//     const book = await book.findOne({
//       _id: bookID,
//     });
//     // Adding the new numebr from the query params and the previous number of book
//     let newQuantity = book.quantity + +number;

//     if (newQuantity > 0) {
//       // Updating the data in the database
//       const updatedbook = await book.findOneAndUpdate(
//         {
//           _id: bookID,
//         },
//         {
//           quantity: newQuantity,
//         },
//         {
//           new: true,
//           runValidators: true,
//         }
//       );
//       res.status(200).json({
//         data: {
//           updatedbook,
//           msg: "Successfully Updated",
//         },
//       });
//     } else {
//       res.status(400).json({
//         data: {
//           msg: "book quantity can not be zero or less",
//         },
//       });
//       return;
//     }
//   } catch (error) {
//     res.status(400).json({
//       data: {
//         msg: "Error while updating quantity",
//       },
//     });
//   }
// };

module.exports = {
  getAllBooks,
  //   getSingleBook,
  createNewBook,
  //   updateBook,
  //   deleteBook,
};
