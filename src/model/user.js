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



export const User = mongoose.model('User', userSchema)