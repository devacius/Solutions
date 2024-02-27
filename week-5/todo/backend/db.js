const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://devacius:klu5A6FzRBiRWZyq@cluster0.b8dekyo.mongodb.net/');

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const  todo=mongoose.model('todos',todoSchema);
module.exports={
    todo
}

