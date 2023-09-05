import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blueGrey, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Logo from '../assets/react.svg'
import { TextField,Button } from '@mui/material';
import { Link} from 'react-router-dom';
import { deletePost ,LikePost} from '../postSlice';
import { useDispatch,useSelector } from 'react-redux';



interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
  
 
    

  
const Posts = ({post}:any) => {
   const [del,setDel]=React.useState("");
    const dispatch=useDispatch();
    const [expanded, setExpanded] = React.useState(false);
    const [menu,setMenu]=React.useState(false)
    const [cMenu,setCMenu]=React.useState(false)
    
   
    const handleLike=(posts:any)=>{
      const id=posts._id;
      const result= dispatch(LikePost(id))
      console.log(result)
      console.log("liked")
      // window.location.reload(false)
      
 
      

    }
    const likedata=useSelector((state:any)=>state.postReducer.post)
    

    
   
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const handleDelete=(post:any)=>{
        console.log(post)
 const id=post._id;
 console.log(id)
 const result =dispatch(deletePost(id))
 window.location.reload(false)
setDel("yes render")
    }
   
  return (
   <>
   

<Card sx={{ maxWidth: 345,m:1}}  >
<CardHeader
  avatar={
    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      R
    </Avatar>
  }
  action={
    <IconButton aria-label="settings" sx={{position:'relative'}}     onClick={()=>setMenu(!menu)}>
      <MoreVertIcon    />
     {menu &&  <Card sx={{zIndex:1,position:'absolute',top:35,right:2}}>
      <CardActions sx={{direction:'flex',flexDirection:'column'}}>
       
      <Button ><Link to='/update' state={{post:post}}>update</Link></Button>
        <Button onClick={()=>handleDelete(post)}>DELETE</Button>
        
        
      </CardActions>
    </Card> }
    </IconButton>

  }
  title={post.title}
  subheader={post.creater}
/>
<CardMedia
  component="img"
  height="194"
  image={post.image||Logo}
  alt="Paella dish"
/>
<CardContent>
  <Typography variant="body2" color="text.secondary">
    {post.post}
  </Typography>
</CardContent>
<CardActions disableSpacing>
  <IconButton aria-label="add to favorites">
    <FavoriteIcon onClick={()=>handleLike(post)}/>
  </IconButton>
  <IconButton aria-label="share">
    <ShareIcon />
  </IconButton>
  <TextField placeholder='write a comment'/>
  
  <ExpandMore
    expand={expanded}
    onClick={handleExpandClick}
    aria-expanded={expanded}
    aria-label="show more"
  >
    <ExpandMoreIcon />
  </ExpandMore>

</CardActions>
<Collapse in={expanded} timeout="auto" unmountOnExit>
  <CardContent>
   {post?.comments?.map((comment:any)=>(
    
    <Card variant='outlined' sx={{borderColor:"black"}}>
        <CardHeader 
  avatar={
    <Avatar sx={{bgcolor:red[500] }} aria-label="recipe">
      R
    </Avatar>
  }
  action={
    <IconButton aria-label="settings" onClick={()=>setCMenu(!cMenu)}>
      <MoreVertIcon  />
      {cMenu &&  <Card sx={{zIndex:1,position:'absolute',top:35,right:2}}>
      <CardActions sx={{direction:'flex',flexDirection:'column'}}>
        <Typography>comment edit field comming soon</Typography>
       
      </CardActions>
    </Card> }
    </IconButton>
  }
  sx={{bgcolor:blueGrey[500],height:20}}
/>
        <CardContent><Typography>{comment.message}</Typography></CardContent>
        <CardActions><FavoriteIcon/></CardActions>
    </Card>
))}
  </CardContent>
</Collapse>
</Card>
   
   </>
  )
}
  

export default Posts