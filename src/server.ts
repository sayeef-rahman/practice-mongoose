const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

//database connection
async function connection() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log("mongoose connected!");
  } catch (error) {
    console.log("error: ", error);
  }
}

connection();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
