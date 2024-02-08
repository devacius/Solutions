const express = require('express')
const app = express()
const port = 3000
const {createTodo,updateTodo} =require("./types");
const{todo}=require("./db");
app.use(express.json());

app.post("/todo",async function(req,res){
const createshitload=req.body;
const parseshitload=createTodo.safeparse(createshitload);
 if(!parseshitload.success){
    res.status(411).json({
        msg:"You sent the wrong input",
    })
    return; 
 }
 await todo.create({
    title:createshitload.title,
    description:createshitload.description,
    completed:false

 })
 res.json({
    msg:"Todo created"
 })
})
app.get("/todos",async function(req,res){
    const todos=await todo.find({});
    res.json({
        todos
    })
})
app.put("/completed",async function(req,res){
    const updateshitload=req.body;
    const parseupdateshitload=updateTodo.safeparse(updateshitload);
    if(!parseupdateshitload.success){
        res.status(411)>json({
            msg:"Teri maa ki chut sahi id daal "
        })
        return;
    }
    await todo.update({
        _id:req.body.id},
        {
            completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
