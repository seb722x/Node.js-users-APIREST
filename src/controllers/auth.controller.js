import { User } from "../model/user.js";


export const register = async(req,res)=>{
    const {email,password, name, roles} = req.body;
    try {
        let user = await User.findOne({email})
        if(user) throw ({code:11000})  // make a jump  to catch

        user = new User({email, password, name, roles});
        await user.save();
        //console.log(user.id);
        const {token,expiresIn}= generateToken(user.id)
        return res.status(200).json({token})
        
    } catch (error) {
        console.log(error.code)
        if(error.code === 11000){
            return res.status(400).json({ error: "this user already exists"})
        } 
        
        return res.status(500).json({error:" Server error"});
    }
};