const express = require("express");
const PORT = 8000;

const app = express();

app.use("/", (res, req) => {
  res.send("Hello...!");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
    return;
  }

  console.log(`The Express Server is running on PORT: ${PORT}`);
});
