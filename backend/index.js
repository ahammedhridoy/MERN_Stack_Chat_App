import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/authRoute.js";
import { connectDB } from "./config/connectDB.js";
import { messageRoter } from "./routes/messageRoute.js";
import { userRouter } from "./routes/userRoute.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes
app.use("/api/auth", authRouter);
app.use("/api/messages", messageRoter);
app.use("/api/users", userRouter);
