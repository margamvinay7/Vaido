import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import userRouter from './Routes/user.js'
import postRouter from './Routes/posts.js'



 dotenv.config();
const port=3000;
const app=express();
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.cookie('hello','vinay')
    
res.send("hello")
})
 app.use('/user',userRouter)
 
 app.use('/posts',postRouter)
 
 
mongoose.connect(process.env.MONGODB_URL,{useUnifiedTopology:true,useNewUrlParser:true}).then(
    app.listen(3000,()=>{
        console.log("database is connected")
        console.log("server is runing on port "+port)
    })  
).catch((err)=>console.log(err))
