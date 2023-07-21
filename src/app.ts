import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema } from "mongoose";

const app: Application = express();
//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //inserting test data in mongodb
  //   steps:
  //   1: create an interface
  //   2: schema
  //   3: model
  //   4:
  //creating interface
  //in type declaration the type names will be in small case
  //creating schema using interface
  //   in scheema the types name will be camel case
  //   res.send("Hello World!");
  //   next();
});

export default app;
