require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { connect } = require("mongoose");
const PORT=process.env.PORT||'6005'
require("../db/conn");
const userdb=require("../model/userSchema")

const cliend_id="52611357937-8j1oj9tldvh36jt320j2rqg8hn72v8la.apps.googleusercontent.com"
const cliend_secretKey="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"

const session=require("express-session");
const passport=require("passport");
const Oauth2GoogleLogin = require("passport-google-oauth2").Strategy; 


app.use(cors(
    // {
//     origin:`${import.meta.env.BACKEND_URL}`,
//     methods:"GET,POST,PUT,DELETE",
//     credentials:true
// }
));

app.use(express.json());

// session setup
app.use(session({
    secret:"jdie8r93rhfner894bvdidwu9ueif",
    resave:false,
    saveUninitialized:true
}))

//setup passport
app.use(passport.initialize());
app.use(passport.session());


passport.use(
    new Oauth2GoogleLogin({
        clientID:cliend_id,
        clientSecret:cliend_secretKey,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"]
    },
    async(accessToken,refreshToken,profile,done)=>{
        console.log(profile);
        try{
            let user = await userdb.findOne({googleId:profile.id});
            if(!user){
                user = new userdb({
                    googleId:profile.id,
                    displayName:profile.displayName,
                    email:profile.emails[0].value,
                    image:profile.photos[0].value
                });
                await user.save();
            }
            return done(null,user)
        }catch(error){
            return done(error,null)
        }
    }
)
)

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
}) 

app.get("/",(req,res)=>{
    res.status(200).json("server start")
});

//initial google oauth login
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:"https://questify-eight.vercel.app/dashboard",
    failureRedirect:"https://questify-eight.vercel.app/login"
}))

app.get("/login/success",async(req,res)=>{
    console.log("request",req.user)

    if(req.user){
        res.status(200).json({message:"User Login",user:req.user})
    }else{
        res.status(400).json({message:"Not Authorized"})
    }
})

app.get("/logout",(req,res,next)=>{
    req.logout(function(err){
        if(err){return next(err)}
        res.redirect("https://questify-eight.vercel.app/");
    })
})

app.listen(PORT,()=>{
    console.log(`server start at port no ${PORT}`);
})