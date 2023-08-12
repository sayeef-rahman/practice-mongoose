import mongoose from "mongoose";
import app from "./app";

// const express = require("express");
// const mongoose = require("mongoose");

// const port: number = parseInt(process.env.CONNECTION_PORT);

//database connection
async function connection() {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/practice-mongoose`);
    console.log("mongoose connected!");
    await app.listen(5000, () => {
      console.log(`App listening on port ${5000}`);
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

connection();
