import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

// Signup
export const signup = async (req, res) => {
  try {
    const { fullName, email, password, username, gender, confirmPassword } = req.body;

    // Validate input fields
    if (!fullName || !email || !password || !username || !gender || !confirmPassword) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Check if the user already exists
    const user = await User.findOne({ email, username });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Set profile picture based on gender
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // Create a new user and await the save operation
    const newUser = await new User({
      fullName,
      email,
      password: hashedPassword,
      username,
      gender,
      profilePic: gender === "Male" ? boyProfilePic : girlProfilePic,
    }).save();

    // Generate a JWT token
    const token = generateToken(newUser._id, res);

    // Exclude password from the response
    const { password: _, ...userWithoutPassword } = newUser._doc || newUser;

    // Log and send the response with the user object
    console.log(userWithoutPassword);
    res.status(200).json({ message: "User created successfully", user: userWithoutPassword, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user?.password || "");

    if (!user || !isMatch) {
      return res.status(400).json({ error: "Invalid Username or Password" });
    }

    // Generate a JWT token
    const token = generateToken(user._id, res);

    // Exclude password from the response
    const { password: _, ...userWithoutPassword } = user._doc || user;

    res.status(200).json({ message: "User logged in successfully", user: userWithoutPassword, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Logout
export const logout = async (req, res) => {
  try {
    res.cookie("token", "", {
      maxAge: 0,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
