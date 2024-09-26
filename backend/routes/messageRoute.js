import express from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import { protectRoute } from "../middlewares/protectRoute.js";

export const messageRoter = express.Router();

messageRoter.post("/send/:id", protectRoute, sendMessage);
messageRoter.get("/:id", protectRoute, getMessages);
