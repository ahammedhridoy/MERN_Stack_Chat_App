import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({ error: "No token found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "No token found" });
    }

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ error: "No user found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error.message, "something error in protectRoute middleware");
    res.status(500).json({ error: "Internal server error" });
  }
};
