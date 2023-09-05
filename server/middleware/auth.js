import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
const secret=process.env.SECRET;

const auth=async(req,res,next)=>{
    try{
        const token=req.headers?.authorization?.split(" ")[1]
        console.log("its middleware"+token)
        if(!token){
            res.send("not verified")

        }
        const decodedData=jwt.verify(token,secret)

        if(decodedData){
            req.id=decodedData?.id

        }
        console.log(req.id)
        


    }
    catch(err){
        console.log(err)
    }
    next();
}

export default auth;