const express = require("express");
const PORT = 8000;
const connectDB = require("./database/mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello...!");
});

app.use("api/books", require("./routes/books"));

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
    return;
  }
  console.log(`The Express Server is running on PORT: ${PORT}`);
});

connectDB();
