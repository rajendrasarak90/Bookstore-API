const express = require("express");
const winston = require("winston");
const PORT = 3000;

const connectDB = require("./db/connect");
const books = require("./routes/books");
const notFound = require("./middleware/not-found");

const app = express();

// route for the home page
app.get("/", (req, res) => {
  res
    .status(200)
    .send("Welcome to Bookstore API, Try testing API's using Postman Software");
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configure logging errors using winston
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

app.use("/api/books", books); // books route

app.use(notFound); // not found page middlware

// listening to the server
app.listen(PORT, (err) => {
  if (err) {
    console.log(`There is an error: ${err}`);
    return;
  }

  console.log(`Server is running on PORT: ${PORT}...`);
});

connectDB();
