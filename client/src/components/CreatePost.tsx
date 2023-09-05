import React from 'react'
import {Card,TextField,CardContent, Typography,CardActions,Button} from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../postSlice'
import FileBase from 'react-file-base64'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const navigate=useNavigate();
    const [title,setTitle]=useState<string>()
    const [creater,setCreater]=useState<string>("")
    const [post,setPost]=useState<string>()
    const [image,setImage]=useState<string>()
   const dispatch=useDispatch();
   const postData={
    title:title,
    creater:creater,
    post:post,
    image:image

   }
    const onSubmit=async()=>{
      const result= dispatch(createPost(postData))
      

navigate('/posts')
    }


  return (
<Card variant="outlined" sx={{display:"flex",flexDirection:'column',minWidth:400,borderRadius:0}}>
    <Typography variant="h3" >Create post</Typography>
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

export default CreatePost