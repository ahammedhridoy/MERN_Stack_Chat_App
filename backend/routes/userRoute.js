import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import { getUsersForSidebar } from "../controllers/userController.js";

export const userRouter = express.Router();

userRouter.get("/", protectRoute, getUsersForSidebar);
