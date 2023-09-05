

import './App.css'
import { Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SignUp from './components/Auth/SignUp'
import SignIn from './components/Auth/SignIn'
import Posts from './components/Posts'
import CreatePost from './components/CreatePost'
import UpdatePost from './components/UpdatePost'
import { useSelector } from 'react-redux'

function App() {
 
  const token:any=localStorage.getItem("profile");
  
  console.log(token)
  const likedata=useSelector((state:any)=>state.postReducer.post)
  console.log(likedata)
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<SignUp/>}/> 
      
      <Route path="/Hero" element={<Hero/>}/>
     
      <Route path="/SignIn" element={<SignIn/>}/>
     
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/Create' element={<CreatePost/>}/>
      <Route path='/update' element={<UpdatePost/>}/>
      

    </Routes>
    
    
    
    
    
    </>
  )
}

export default App
