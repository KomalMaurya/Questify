require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { connect } = require("mongoose");
const PORT=process.env.PORT||'6005'
require("./db/conn");


app.use(cors(
    // {
//     origin:`${import.meta.env.BACKEND_URL}`,
//     methods:"GET,POST,PUT,DELETE",
//     credentials:true
// }
));

app.use(express.json());
app.get("/",(req,res)=>{
    res.status(200).json("server start")
});

app.listen(PORT,()=>{
    console.log(`server start at port no ${PORT}`);
})