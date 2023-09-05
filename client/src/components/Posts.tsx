import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import Post from './Post'
import { getPost,getSearch } from '../postSlice';

import { useDispatch } from 'react-redux';
import {Button} from '@mui/material'
import { Link } from 'react-router-dom';
import { blue, blueGrey } from '@mui/material/colors';



const posts = () => {
  const [post,setPost]=React.useState([]);
  const [filter,setFilter]=React.useState<string>("");
  const dispatch=useDispatch();
  
   React.useEffect(()=>{
   const fetch=async()=>{
    try{
    const result =await dispatch(getPost())
    console.log(result)
    const resPost=result.payload.data
    setPost(resPost)
    console.log(resPost)
    
    }
    catch(err){
      console.log(err)
    }
   }
   
   fetch()
   
   }
   
   ,[])

   const searchPost = async() => {
    console.log("search")
    console.log(filter)
    if (filter?.trim() ) {
    const result= await dispatch(getSearch(filter));
    console.log(result)
    const resData=result.payload.data
    setPost(resData)
    console.log("searchpost")
     
    } 
  };

  const posts=[
    { id:"1",
        title:"title of post",
        creater:"name",
        post:"the post is artice or message which is publish to public",
        comments:[
            {
              message:"hello my dear freiend iam vinay margam iam pursuing btech at narasimha reddy engineering college iam an beginner full stack developer i have a lot of skills in web development that are reactjs javascript html css nodejs expressjs framer motion redux"
            }
        ]
    },
    {id:"2",
        title:"title of post",
        creater:"name",
        post:"the post is artice or message which is publish to public",
        comments:[
          {
            message:"hello my dear freiend iam vinay margam iam pursuing btech at narasimha reddy engineering college iam an beginner full stack developer i have a lot of skills in web development that are reactjs javascript html css nodejs expressjs framer motion redux"
          }
      ]
    },
    {id:"3",
        title:"title of post",
        creater:"name",
        post:"the post is artice or message which is publish to public",
        comments:[
          {
            message:"hello my dear freiend iam vinay margam iam pursuing btech at narasimha reddy engineering college iam an beginner full stack developer i have a lot of skills in web development that are reactjs javascript html css nodejs expressjs framer motion redux"
          }
      ]
    },
    {id:"4",
        title:"title of post",
        creater:"name",
        post:"the post is artice or message which is publish to public",
        comments:[
          {
            message:"hello my dear freiend iam vinay margam iam pursuing btech at narasimha reddy engineering college iam an beginner full stack developer i have a lot of skills in web development that are reactjs javascript html css nodejs expressjs framer motion redux"
          }
      ]
    }
]
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <TextField    id="outlined-number"
          
          type="Text"
          InputLabelProps={{
            shrink:true,
          }}

         
         sx={{
          marginTop:1,
          color:'black',
         backgroundColor:'whiteSmoke',
          
          borderColor:blue
          
         }}
         placeholder='search by title'
        
          autoFocus
          value={filter}
          onChange={(e)=>setFilter(e.target.value)}
          
          
/>
<Button variant='contained' onClick={()=>searchPost()} sx={{display:'flex'}}>s</Button>
</div>
    <article>{post.map((post:any)=>(
      <Grid key={post?.id}>
      <Post post={post} />
    </Grid>
   
    ))}

    </article>
    </>
  )
}

export default posts