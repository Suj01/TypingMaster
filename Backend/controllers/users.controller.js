const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { User } = require("../model/users.model");
const { where } = require("sequelize");
require("dotenv").config();

const register = async (req, res) => {
  try {
    const { username, email, password, isAdmin } = req.body;
    const CheckAdmin = await User.findOne({ isAdmin: true });
    if (isAdmin && CheckAdmin) {
      res.status(403).json({ msg: "Admin Already exist" });
    } else {
      const saltRounds = 10;
      const hashedPassword = bcrypt.hashSync(password, saltRounds);
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        isAdmin,
      });
      await newUser.save();
      res.status(201).json({ msg: "You register Successfully!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: error });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isLoggedIn = await User.findOne({ where:{email} });
    if (isLoggedIn) {
      const isPassword = await bcrypt.compare(password, isLoggedIn.password);
      if (isPassword) {
        const role = isLoggedIn.isAdmin ? "ADMIN" : "USER";
        const token = jwt.sign(
          {
            role,
            userName: isLoggedIn.username,
            userID: isLoggedIn.id,
          },
          process.env.SECRET,
          { expiresIn: "1h" }
        );
        res
          .status(200)
          .json({ msg: "You logged in Successfully!", token: token });
      } else {
        res.status(200).json({ msg: "Password inCorrect!" });
      }
    } else {
      res.status(200).json({ msg: "Please use correct credentials!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: error });
  }
};

const getUsers = async (req, res) => {
  try {
    const findAllUsers = await User.findAll();
    res.status(201).json({ msg: "Users Available", users: findAllUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const { id } = req.params;
    const updatingUser = await User.update(
      {where:{ id: id }},
      { name, email, password }
    );
    res.status(200).json({ msg: "User deleted  Successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: error });
  }
};

const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const deletingUser = await User.destroy({where:{ id: id }});
    res.status(200).json({ msg: "User deleted  Successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: error });
  }
};

module.exports = { register, userLogin, getUsers, updateUser, deleteUsers };



