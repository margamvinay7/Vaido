import { Grid } from '@mui/material'
import React from 'react'
import Post from './Post'
import { getPost } from './post/postSlice';

import { useDispatch } from 'react-redux';
import {Button} from '@mui/material'
import { Link } from 'react-router-dom';



const posts = () => {
  const [post,setPost]=React.useState([]);
  const dispatch=useDispatch();
  
   React.useEffect(()=>{
   const fetch=async()=>{
    try{
    const result =await dispatch(getPost())
    console.log(result)
    const resPost=result.payload.data
    setPost(resPost)
    
    }
    catch(err){
      console.log(err)
    }
   }
   
   fetch()
   
   }
   
   ,[])

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