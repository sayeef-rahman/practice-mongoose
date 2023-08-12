import express from "express";
import {
  createUser,
  getAdmins,
  //   getAdminsStatic,
  getUserById,
  getUsers,
} from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.get("/get-admins", getAdmins);
// router.get("/get-admins-static", getAdminsStatic);
router.post("/create-user", createUser);
router.get("/:id", getUserById);

export default router;
