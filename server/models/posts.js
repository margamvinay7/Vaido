import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    
    title:String,
    creater:String,
    post:String,
    image:String,
    likes:{
        type:[String],default:[]
    }
})

export default  mongoose.model('vaidoPost',postSchema);