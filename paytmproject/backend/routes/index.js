
const express = require('express')
const userRoute=require("./user")
//* express boiler plate

const router=express.Router();
router.use("/user",userRoute);

module.exports={
  router
}