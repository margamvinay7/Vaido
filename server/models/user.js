import mongoose from "mongoose";
 
const userSchema=mongoose.Schema({
    email:{type:String,required:true},
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    password:{type:String,required:true},
    token:{type:String}
})

export default mongoose.model('vaido',userSchema)