const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/blog')
.then(()=>console.log("Mongo is Connected"))
.catch(e=> console.log(e))
const User = require('./routes/users')
const Post = require('./routes/items')
//api router
app.use('/api/users', User)
app.use('/api/posts', Post)

//error 
app.use((err, req,res,next) =>{
    res.status(400).json({
        error:{
            message:err.message
        }
    })
})

const Port = process.env.Port || 5000;
app.listen(Port, ()=>console.log("Server is Runing"));