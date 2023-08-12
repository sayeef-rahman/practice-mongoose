import mongoose from "mongoose";
import app from "./app";

// const express = require("express");
// const mongoose = require("mongoose");

const port: any = process.env.CONNECTION_PORT;

//database connection
async function connection() {
  try {
    await mongoose.connect(`${process.env.CONNECTION_URL}`);
    console.log("mongoose connected!");
    await app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

connection();
