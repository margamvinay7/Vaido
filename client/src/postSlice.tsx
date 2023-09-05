import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL='http://localhost:3000/posts'

export  const API=axios.create({baseURL:'http://localhost:3000'});
API.interceptors.request.use((req)=>{
    if(localStorage.getItem("profile")){
        req.headers.Authorization=`Bearer ${(localStorage.getItem("profile"))}`
    }
    return req;
})



export const getPost=createAsyncThunk('getPost',async()=>{
    const response:any= await API.get('/posts')
console.log(response.data)
  return response
})
export const deletePost=createAsyncThunk('deletePost',async(id:string)=>{
    const response:any= await API.delete(`/posts/${id}`)
  
    return response
})
export const createPost=createAsyncThunk('createPost',async(post:any)=>{
    const response:any= await API.post(`/posts/create`,post)
    
    
    return response
    
})
export const updatePost=createAsyncThunk('updatePost',async(post:any)=>{
    const response:any= await API.patch(`/posts/update`,post)
    
    return response
})
export const LikePost=createAsyncThunk('LikePost',async(id:any)=>{
    const response:any= await API.patch(`/posts/${id}/likepost`)
    console.log(response)
    return response.data
})
export const Likes=createAsyncThunk('Likes',async(id:any)=>{
    const response:any= await API.get(`/posts/${id}/likes`)
    console.log(response)
    return response.data
})
export const getSearch=createAsyncThunk('getSearch',async(filter)=>{
    const response:any= await API.get(`/posts/search/${filter}`)
console.log(response)
  return response
})



const initialState={post:[]}
const postSlice=createSlice({
    name:"post",
   initialState:initialState,
   reducers:{},
   extraReducers(builder){
    builder.addCase(getPost.fulfilled,(state,action)=>{
return {...state,post:action.payload}
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
    builder.addCase(Likes.fulfilled,(state,action)=>{
return action.payload
    })
    builder.addCase(getSearch.fulfilled,(state,action)=>{
return action.payload
    })
   }


})

export const postActions=postSlice.actions
export default postSlice