import { Paper,InputLabel,OutlinedInput,Typography,FormControl,Button } from "@mui/material"
import {useState} from 'react'
import { signIn } from "../../rtk.model";
import { useDispatch } from "react-redux";
import { loginUser } from "./AuthSlice";
import { useNavigate } from "react-router-dom";



const SignIn=()=>{

 
  const navigate=useNavigate();
const dispatch=useDispatch();
    const [email,setEmail]=useState('')
    const [password,setpassword]=useState('')
    


    const data:signIn={
      email:email,
      
      password:password,
  
  }
  
    const onsubmit=async ()=>{
  const result=await dispatch(loginUser(data))
  {result?.payload ? navigate('/posts'):""}
  // console.log(result.payload)
  
    }
   
    return(
      <Paper elevation={16} variant="outlined"sx={{maxLines:10,minWidth:300,minHeight:300,}} id="signin">
  <Typography variant="h3">SignIN</Typography>
  <FormControl>
      <InputLabel htmlFor="email">Email</InputLabel>
  <OutlinedInput id="email " name="email"  autoFocus placeholder="email@gmail.com" notched   required type="email" sx={{m:1}} onChange={(e)=>setEmail(e.target.value)} />
  <OutlinedInput  name="password"   placeholder="Password" notched   required type="password" sx={{m:1}} onChange={(e)=>setpassword(e.target.value)}/>
  <Button onClick={onsubmit} variant='outlined'>submit</Button>
  </FormControl>
      </Paper>
  
    )
  }

  export default SignIn