import { NextFunction, Request, Response } from "express";
import { createUserToDb, getUsersFromDb } from "./user.service";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getUsersFromDb();
  res.status(200).json({
    statusCode: 200,
    data: users,
  });
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await createUserToDb();
  res.status(200).json({
    statusCode: 200,
    message: "success",
    data: user,
  });
};

//pattern

// Router will call controller
// controller will call service
