const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 3000;



//Mongoose part
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://devacius:klu5A6FzRBiRWZyq@cluster0.b8dekyo.mongodb.net/testdb');
const Users=mongoose.model('Users',{name:String,email:String,password:String,courses:Array});
const Admins=mongoose.model('Admins',{name:String,email:String,password:String});
const Courses=mongoose.model('Courses',{title:String,desc:String,price:Number,author:String,id:Number});
//Admins part
app.post('/admins/signup',(req,res)=>{
    const uname=req.headers.name;
    const pass=req.headers.password;
    const email=req.body.email;
    const admin=new Admins({
        name:uname, 
        email:email,
        password:pass,
    });
    admin.save();
    res.json("admin created Successfully");
})
app.post('/admins/createcourse',(req,res)=>{
    const uname=req.headers.name;
    const pass=req.headers.password;
    const id=req.headers.id;
    const coursename=req.body.coursename;
    const coursedesc=req.body.desc;
    const price=req.body.price;
    const imageurl=req.body.url;
    const course=new Courses({
        title:coursename,
        desc:coursedesc,
        price:price,
        author:uname,
        id:id,
    })
    course.save();
    res.json('course created successfully');
})
app.get('/admins/courses',async(req,res)=>{
  
    
        try{
            const coursescoll=await Courses.find();
             res.json(coursescoll);
        }
        catch(err){
            res.status(400).json('courses could  not be displayed');
        }
    
    
 

});

//User part
app.post('/users/signup',(req,res)=>{
    const uname=req.headers.name;
    const pass=req.headers.password;
    const email=req.body.email;
    const user=new Users({
        name:uname,
        email:email,
        password:pass,
    });
    user.save();
    res.json("final shit");

})
app.post('/users/course/:courseid',async(req,res)=>{
    try{
        // res.json(req.params.courseid);
        const courseIwant= await Courses.find({
            id:req.params.courseid,
        });
        const user= await Users.find({
            name:req.headers.name,
            password:req.headers.password,
        });
        //res.json(user);

        user.Courses.push({
           "title":courseIwant.title,
           "desc":courseIwant.desc,

        });
        res.json(user);
        user.save();
        
    }
    catch(err){
        res.status(404).json('course could not be bought');
    }
});

























app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
