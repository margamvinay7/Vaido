import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import signUp from "../../rtk.model";
import axios from "axios";
const URL='http://localhost:3000/user'

export const createUser=createAsyncThunk('createUser',async(createdata)=>{
    const response= await axios.post(`${URL}/signUp`,createdata)
   
    localStorage.setItem("profile",response.data)
    return response.data
})
export const loginUser=createAsyncThunk('loginUser',async(createdata)=>{
    const response= await axios.post(`${URL}/signIn`,createdata)
    
    localStorage.setItem("profile",response.data)
    return response.data
})



const authSlice=createSlice({
    name:"auth",
    initialState:{},
    reducers:{},
    extraReducers(builder){
        builder.addCase(createUser.fulfilled,(state,action)=>{
            return action.payload.data
        })
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            return "success"
        })

    }


})
export const authActions=authSlice.actions
export default authSlice
