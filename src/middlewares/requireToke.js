import  jwt  from "jsonwebtoken";


 
//cookie token
export const requireToken = (req,res,next)=> {
    try {
        let token= req.cookies.token;
        console.log({tokenRequire: token});
        
        if(!token) 
            throw new Error('token does not exist')
        
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = payload.uid      
        console.log( req.uid);
        
        
        next();
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({error: error.message})
    }
}