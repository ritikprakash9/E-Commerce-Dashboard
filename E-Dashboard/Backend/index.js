const express = require('express');

const app = express();

// => Mongo DB Connection 

const mongooes = require('mongoose');

const connectDB = async()=>{
    mongooes.connect('mongodb://localhost:27017/College');
    const studentSchema = new mongooes.Schema({});
    const student = mongooes.model('Student', studentSchema);
    const data = student.find();
    console.warn(data);
}

connectDB();
// app.get('/', (req, res)=>{
//     res.send("App is working...");
// })


// app.listen(5000);
