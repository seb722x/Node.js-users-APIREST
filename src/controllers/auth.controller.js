import { User } from "../model/user.js";
import {  generateToken } from "../utils/generateTokens.js";
import bcryptjs from 'bcryptjs';




export const register = async(req,res)=>{
    const {email,password, name, roles} = req.body;
    try {
        let user = await User.findOne({email})
        if(user) throw ({code:11000})  // make a jump  to catch

        const hashedPassword = await hashPassword(password);
        user = new User({ email, password: hashedPassword, name, roles });
        await user.save();

        const {token,expiresIn}= generateToken(user.id,res)
        return res.status(200).json({user,token,expiresIn})
        
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
        let user = await findUser(email);

        const respPassword = await comparePassword(password, user.password);
        if(!respPassword)
            return res.status(403).json({error: "Wrong password"});

        const {token,expiresIn}= generateToken(user.id,res);
       
        return res.json({email,user,token, expiresIn});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:" Server error"});
    }
};

export const hashPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10);
    return bcryptjs.hash(password, salt);
};

const comparePassword = async (candidatePassword, hashedPassword) => {
    return bcryptjs.compare(candidatePassword, hashedPassword);
};

const findUser=async (email)=> {
    let user = await User.findOne({email});
    if(!user) 
            return res.status(403).json({error: "user does not exist"});
    return user;
}

export const userInfo = async(req,res) => {
    try {
        const user = await User.findById(req.uid).lean();
        res.json({user});
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

export  const logout = ( req,res)=> {
    res.clearCookie('refreshToken');
    res.json({ok:true})
}
