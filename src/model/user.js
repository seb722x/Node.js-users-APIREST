import mongoose from "mongoose";
import bcryptjs from 'bcryptjs'

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        require: true, 
        minLength: 2, 
        maxLength: 20 
    },

    email: {
        type:String,
        required: true,
        trim: true,
        unique:true,
        lowercase:true,
        index:{ unique: true}

    },
    password:{
        type:String,
        required:true
    },
    roles:{
        type:Array,
        required:true
    }
});

//event to capture before make modifications
userSchema.pre("save", async function (next){
    const user = this; // instance of the user

    if(!user.isModified('password') )return next();

    try{
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(user.password, salt);
        next();

    }catch(error){
        console.log(error);
        throw new Error("password not encripted");
    }
});

userSchema.methods.comparePassword = async function(candidatePassword){
    return await bcryptjs.compare(candidatePassword, this.password)   
};


export const User = mongoose.model('User', userSchema)