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
const Usersigninbody=zod.object({
    username:zod.ZodString(),
    password:zod.ZodString().min(7)
})




router.post('/signup',async function(req,res,next){
    try{
        const result=Usersigninbody.safeParseAsync(req.body);
        if(!result){
            return res.status(411).json({
                msg:"Incorrect input"
            })
        }
    const existinguser=await User.findOne({
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
router.post('/api/v1/user/signin',async function(req,res,next){
    const userinfo=req.body;
    try{
        const result=Userverification.safeParseAsync(userinfo);
        if(!result){
            return res.status(411).json({
                msg:"Incorrect input"
            })
        }
        const finduser=await User.findOne({
            username:req.body.username
        })
        if(finduser.password==req.body.password){
            const userId=finduser._id;
            const token=jwt.sign({
                userId
            },JWT_SECRET);
            res.status(200).json({

                msg:"Welcome",
                token:token

            })
            return ;

        }
        else{
            res.status(411).json({
                msg:"Invalid password"
            })
        }
        res.status(411).json({
            msg:"Error while signing in"
        })
    }
    catch(err){
        console.log(err);
    }
})



module.exports={
    router
}