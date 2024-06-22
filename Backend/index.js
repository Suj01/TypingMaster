const express =  require("express");
const { sequelize } = require("./config/db.config");
require("dotenv").config();
const cors = require("cors");
const { userRouter } = require("./routers/users.router");

const port = process.env.PORT || 8100;
const app = express();

app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
    res.json({msg:"This is Home Page!"})
})

app.use("/users",userRouter);

app.listen(port, async()=>{
await sequelize.authenticate();
console.log("Database Connected!");
console.log(`Server is running at ${port}`);
})
