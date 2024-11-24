require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { connect } = require("mongoose");
const PORT=process.env.PORT||'6005'
require("./db/conn");

const cliend_id="52611357937-8j1oj9tldvh36jt320j2rqg8hn72v8la.apps.googleusercontent.com";
const cliend_secretKey="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";

const session=require("express-session");
const passport=require("passport");
const Oauth2GoogleLogin = require("passport-google-oauth2"); 


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