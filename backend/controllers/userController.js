import { User } from "../models/userModel.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const users = await User.find({ _id: { $ne: loggedInUserId } });

    if (!users || users.length === 0) {
      return res.status(400).json({ error: "No users found" });
    }

    const usersWithoutPassword = users.map(({ _doc: { password, ...userWithoutPassword } }) => userWithoutPassword);

    res.status(200).json({ users: usersWithoutPassword });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
