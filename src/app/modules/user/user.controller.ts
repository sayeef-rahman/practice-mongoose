import { NextFunction, Request, Response, response } from "express";
import { createUserToDb } from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await createUserToDb();
  res.status(200).json({
    statusCode: 200,
    message: "success",
    data: "user",
  });
};

//pattern

// Router will call controller
// controller will call service
