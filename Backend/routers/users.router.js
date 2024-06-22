const express = require("express");
const {
  register,
  userLogin,
  getUsers,
  deleteUsers,
  updateUser,
} = require("../controllers/users.controller");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/loginUser", userLogin);
userRouter.get("/getUser", getUsers);
userRouter.put("/updateUser/:id", updateUser);
userRouter.delete("/deleteUser/:id", deleteUsers);

module.exports = { userRouter };
