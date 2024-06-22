require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User } = require("../model/users.model");


const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ message: "Invalid token or token expired" });
      } else {
        console.log("Decoded token:", decoded);
        const role = decoded.role;
        const user = await User.findOne(decoded.userID);
        req.role = role;
        req.id = decoded.userID;
        req.user = User.name;
   
      
        next();
      }
    });
  } else {
    res.status(404).json({ message: "You are not authorized" });
  }
};

module.exports = {
  auth,
};