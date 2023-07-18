import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// const express = require("express");
// const mongoose = require("mongoose");
const app = express();
const port = 5000;

//using cors
app.use(cors());

//database connection
async function connection() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log("mongoose connected!");
    await app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

connection();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
