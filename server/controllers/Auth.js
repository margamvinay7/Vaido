import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import UserModel from '../models/user.js' 
import bcrypt from 'bcryptjs'
dotenv.config()
const secret=process.env.SECRET;


export const signUp=async(req,res)=>{
    const {email,firstname,lastname,password}=req.body;
    try{
        const oldUser=await UserModel.findOne({email})
        if(oldUser) return res.status(400).json({message:"user already exists"})
        const hashedpassword=await bcrypt.hash(password,12)
    const result =await UserModel.create({email,firstname,lastname,password:hashedpassword})
    const accessToken= jwt.sign({email:result.email,id:result._id,name:result.lastname},secret,{expiresIn:"1h"})
    console.log("user created")
    res.status(201).json(accessToken)
    }
    catch(err){
        res.json({message:err.message});
    }
}

export const signIn=async(req,res)=>{
    const {email,password}=req.body;
    try{
    const oldUser=await UserModel.findOne({email})
    if(!oldUser) return res.status(404).json({message:"user doesn't exists"})
    const ispassCorrect=await bcrypt.compare(password,oldUser.password)
    if(!ispassCorrect) return res.status(404).json({message:"password is not matched"})
    
    const accessToken=jwt.sign({email:oldUser.email,id:oldUser._id,name:oldUser.lastname},secret,{expiresIn:"1h"})
    console.log("user login")
    res.json(accessToken)
    
    }
    catch(err){
        res.json({message:err.message})

    }
}
    
    
    

