import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL='http://localhost:3000/posts'

const API=axios.create({baseURL:'http://localhost:3000'})

const setAuthorization=async()=>{
    const token= await localStorage.getItem("profile")
    const config={
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const res= await axios.get('http://localhost:3000/posts/auth',config)
}

export const getPost=createAsyncThunk('getPost',async()=>{
    const response:any= await axios.get(`${URL}`)
    setAuthorization();

    
   return response
})
export const deletePost=createAsyncThunk('deletePost',async(id:string)=>{
    const response:any= await axios.delete(`${URL}/${id}`)
  
    return response
})
export const createPost=createAsyncThunk('createPost',async(post:any)=>{
    const response:any= await axios.post(`${URL}/create`,post)
    
    
    return response
    
})
export const updatePost=createAsyncThunk('updatePost',async(post:any)=>{
    const response:any= await axios.patch(`${URL}/update`,post)
    
    return response
})
export const LikePost=createAsyncThunk('LikePost',async(id:any)=>{
    const response:any= await axios.patch(`${URL}/${id}/likepost`)
    console.log(response)
    return response.data
})



const initialState={post:[]}
const postSlice=createSlice({
    name:"post",
   initialState:initialState,
   reducers:{},
   extraReducers(builder){
    builder.addCase(getPost.fulfilled,(state,action)=>{
return {...state,post:action.payload.data}
    })
    builder.addCase(createPost.fulfilled,(state,action)=>{
return action.payload.data
    })
    builder.addCase(deletePost.fulfilled,(state,action)=>{
return action.payload.data
    })
    builder.addCase(updatePost.fulfilled,(state,action)=>{
return action.payload.data
    })
    builder.addCase(LikePost.fulfilled,(state,action)=>{
return action.payload.data
    })
   }


})

export const postActions=postSlice.actions
export default postSlice