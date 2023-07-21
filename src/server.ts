import mongoose from "mongoose";
import app from "./app";

// const express = require("express");
// const mongoose = require("mongoose");

const port: number = 5000;

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
