import express from 'express'
import posts from '../models/posts.js'
import mongoose from 'mongoose';


const getPosts=async(req,res)=>{
    try{
        const result=await posts.find().sort({_id:-1});
        
      
        res.status(201).json(result);
    }
    catch(err){
        console.log(err)
    }
}

 const getSearch = async (req, res) => {
   const {search}=req.params
    try {
        const title = new RegExp(search, "i");
        console.log(title)

        const postsdata = await posts.find({title});;
console.log(postsdata)
        res.json(postsdata);
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}
const getLikes=async(req,res)=>{
    const {id}=req.params;

    try{

        const result=await posts.findById(id)
        
        
      
        res.status(201).json(result);
    }
    catch(err){
        console.log(err)
    }
}

const createPost=async(req,res)=>{
    const {title,creater,post,image}=req.body
    try{
    const result=await posts.create({title,creater,post,image})
    res.status(201).json(result)
    }
    catch(err){
        console.log(err)
    }
}

const deletePost=async(req,res)=>{
    const {id}=req.params;
    try{
        await posts.findByIdAndDelete(id)
        res.sendStatus(200)
    }
    catch(err){
        console.log(err)
    }
}
 
const updatePost=async(req,res)=>{
    const {id}=req.body;
    const {title,creater,post,image}=req.body;
    const updatePost={title,creater,post,_id:id,image}
    try{
        await posts.findByIdAndUpdate(id,updatePost,{new:true})
    }
    catch(err){
        console.log(err)
    }
}
const likePost=async(req,res)=>{
    const {id}=req.params;
    
    console.log("likepost"+req.id)
    const post =await posts.findById(id);
    const index=post.likes.findIndex((id)=>id===String(req.id))
    if(index===-1){
        post.likes.push(req.id)
    }
    else{
        post.likes=post.likes.filter((id)=>id !==String(req.id))
    }

const updatedPost=await posts.findByIdAndUpdate(id,post,{new:true})
}

export {getPosts,createPost,updatePost,deletePost,likePost,getLikes,getSearch}