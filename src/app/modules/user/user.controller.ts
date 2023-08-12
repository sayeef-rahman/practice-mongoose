import { NextFunction, Request, Response } from "express";
import {
  createUserToDb,
  getAdminsFromDb,
  // getAdminsFromDbStatic,
  getUserByIdFromDb,
  getUsersFromDb,
} from "./user.service";
import { IUser } from "./user.interface";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getUsersFromDb();
  res.status(200).json({
    message: "success",
    data: users,
  });
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDb(data);
  res.status(200).json({
    message: "success",
    data: user,
  });
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = await getUserByIdFromDb(id);
  res.status(200).json({
    message: "success",
    data: user,
  });
};

export const getAdmins = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const admins: IUser[] | null = await getAdminsFromDb();
  if (admins) {
    res.status(200).json({
      message: "success",
      data: admins,
    });
  } else {
    res.status(404).json({
      message: "No admin found",
      data: [],
    });
  }
};

// export const getAdminsStatic = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const admins = await getAdminsFromDbStatic();
//   if (admins) {
//     res.status(200).json({
//       message: "success",
//       data: admins,
//     });
//   } else {
//     res.status(404).json({
//       message: "No admin found",
//       data: [],
//     });
//   }
// };

//pattern

// Router will call controller
// controller will call service
