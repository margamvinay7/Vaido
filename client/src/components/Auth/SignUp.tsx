
import {Link} from 'react-router-dom'
import { Paper,Typography,FormControl,OutlinedInput,Button} from "@mui/material"
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import signUp from '../../rtk.model'
import { useDispatch } from 'react-redux'
import { createUser } from './AuthSlice'
import { authActions } from './AuthSlice'


const SignUp = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [email,setEmail]=useState('')
  const [first,setfirst]=useState('')
  const [last,setlast]=useState('')
  const [password,setpass]=useState('')
  const [repassword,setrepass]=useState('')

  
  
  const sdata={
    email:email,
    firstname:first,
    lastname:last,
    password:password,

}

  const onsubmit=async ()=>{
    const result=await dispatch(createUser(sdata));
    {result?.payload ? navigate('/posts'):""}
    console.log(result.payload);

  }
  
  return (
    <>
    
    <Paper elevation={16} variant="outlined"sx={{maxLines:10,minWidth:300,minHeight:500,}} >
     
      <Typography component="h3" variant="h3">sign up</Typography>

    <FormControl   >
   
<OutlinedInput id="email " name="email"  autoFocus placeholder="email@gmail.com" notched   required type="email" sx={{m:1}} onChange={(e)=>setEmail(e.target.value)} />

<OutlinedInput  name="firstname"  placeholder="First Name" notched   required type="text" sx={{m:1}} onChange={(e)=>setfirst(e.target.value)} />

<OutlinedInput  name="lastname"   placeholder="Last Name" notched   required type="text" sx={{m:1}} onChange={(e)=>setlast(e.target.value)} />

<OutlinedInput  name="password"   placeholder="Password" notched   required type="password" sx={{m:1}} onChange={(e)=>setpass(e.target.value)} />

<OutlinedInput  name="repassword"   placeholder="Re-Password" notched   required type="password"  sx={{m:1}} onChange={(e)=>setrepass(e.target.value)} />
<Button onClick={onsubmit} variant='outlined'>submit</Button>

    </FormControl>
    <Typography component="h3" >Already have Account?<Link to="/signin" >sign in</Link></Typography>
   
    </Paper>
    </>
   
  )
}



export default SignUp