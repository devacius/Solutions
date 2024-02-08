const express=require("express");
const zod=require("zod");
const router=express.Router();
const jwt=require("jsonwebtoken");
const {User}=require("../db");
const {JWT_SECRET}=require("../config");

const Userverification =zod.object({
    username:zod.ZodString(),
    password:zod.ZodString().min(7),
    email:zod.ZodString().email(),
    firstName:zod.ZodString().min(2),
    lastName:zod.ZodString()

})




router.post('/signup',async function(req,res,next){
    const userinfo=req.body;
    try{
        const result=Userverification.safeParseAsync(userinfo);
        if(!result){
            return res.status(411).json({
                msg:"Incorrect input"
            })
        }
    const existinguser=User.findOne({
        email:req.body.email
    })
    if(existinguser){
        return res.status(411).json({
            msg:"User already exist"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId=user._id;
    const token=jwt.sign({
        userId
    },JWT_SECRET);
    res.json({
        msg:"user create successfully",
        token:token
    })
    }
    catch(err){
        console.log(err);
    }

});



module.exports={
    router
}