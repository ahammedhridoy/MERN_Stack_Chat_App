import express from "express";
import { login, logout, signup } from "../controllers/authController.js";

export const authRouter = express.Router();

// Signup routes
authRouter.post("/signup", signup);

// Login routes
authRouter.post("/login", login);

// Logout routes
authRouter.post("/logout", logout);
