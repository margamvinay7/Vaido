import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import {Card,TextField,CardContent, Typography,CardActions,Button} from '@mui/material'
import { useState } from 'react'
import { updatePost } from './post/postSlice'
import { useDispatch } from 'react-redux'
import FileBase from 'react-file-base64'

const UpdatePost = () => {
  let {state}=useLocation();
  
  const id=state.post._id
  const [title,setTitle]=useState<string>(state.post.title)
    const [creater,setCreater]=useState<string>(state.post.creater)
    const [post,setPost]=useState<string>(state.post.post)
    const [image,setImage]=useState<string>()
    const postData:any={
      id:id,
      title:title,
      creater:creater,
      post:post,
      image:image
    }
    const navigate=useNavigate();
   const dispatch=useDispatch();
    const onSubmit=async ()=>{
      console.log(id)
      console.log(title)
console.log(creater)
console.log(post)
       
  const result =   dispatch(updatePost(postData))

//   //     console.log(result.payload)
// console.log(dispatch(updatePost(postData)))
navigate('/posts')

    }
  return (
    <Card variant="outlined" sx={{display:"flex",flexDirection:'column',minWidth:400,borderRadius:0}}>
    <Typography variant="h3" >Update post</Typography>
    <CardContent sx={{ display:"flex" ,flexDirection:'column',gap:2,p:2}}>
   <TextField    id="outlined-number"
          label="Title"
          type="Text"
          InputLabelProps={{
            shrink:true,
          }}

         defaultValue="Title of the Post"
         
          autoFocus
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
/>
   <TextField
   id="outlined-number"
   label="Creater"
   type="Text"
   InputLabelProps={{
    shrink:true,
  }}
  placeholder='creater name'
  value={creater}
  onChange={(e)=>setCreater(e.target.value)}
    />
   <TextField id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="write a post"
          value={post}
          onChange={(e)=>setPost(e.target.value)}
          />
           <FileBase type="file" multiple={false} onDone={( {base64})=>setImage(base64)}/>     
          
   </CardContent>
   <CardActions sx={{minHeight:50,p:2,display:"flex" ,justifyContent:"center"}}>
    <Button variant='contained' disableFocusRipple onClick={onSubmit}>SUBMIT</Button>
   
   </CardActions>
</Card>

  )
}

export default UpdatePost