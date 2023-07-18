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
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo?: string;
    presentAddress: string;
    permanentAddress: string;
  }

  //creating schema using interface
  //   in scheema the types name will be camel case
  const UserSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      dateOfBirth: {
        type: String,
      },
      gender: {
        type: String,
        enum: ["male", "female"],
      },
      email: { type: String },
      contactNo: { type: String, required: true },
      emergencyContactNo: { type: String, required: true },
      presentAddress: { type: String, required: true },
      permanentAddress: { type: String, required: true },
    },
  });

  //   res.send("Hello World!");
  //   next();
});

export default app;
