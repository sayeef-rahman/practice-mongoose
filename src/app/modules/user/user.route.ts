import express from "express";
import { createUser } from "./user.controller";
const router = express.Router();
router.get("/api/v1/user", createUser);

export default router;
