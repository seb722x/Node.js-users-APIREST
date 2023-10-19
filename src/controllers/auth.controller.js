import { User } from "../model/user.js";
import {  generateToken } from "../utils/generateTokens.js";


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

export const login = async(req,res)=>{
    const {email,password} = req.body;

    try {
        let user = await User.findOne({email});
        if(!user) 
            return res.status(403).json({error: "user does not exist"})

            const respPassword = await user.comparePassword(password);
            if(!respPassword)
                return res.status(403).json({error: "Wrong password"});

        const {token,expiresIn}= generateToken(user.id,res);
       
        return res.json({email,token,expiresIn});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:" Server error"});
    }
};