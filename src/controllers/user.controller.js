import mongoose from "mongoose";
import { User } from "../model/user.js";
import { hashPassword } from "./auth.controller.js";

export const getUser = async(req,res) => {
    try {
        const { uid, name, email } = req.query;

        if (!uid && !name && !email) {
            return res.status(400).json({ error: 'You should input one of this: (uid, name or email).' });
        }

        let query = {};

        if (uid) {
            checkUid(uid);
            query._id = uid;
        }

        if (name) query.name = name;
        if (email) query.email = email;
        
        const user = await User.findOne(query).lean();

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        res.json( user );
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const { uid } = req.query; 

        checkUid(uid);

        const { name, email, roles, password } = req.body;

        const updateFields = {};
        if (name) updateFields.name = name;
        if (email) updateFields.email = email;
        if(password) {
            const hashedPassword = await hashPassword(password);
            updateFields.password = hashedPassword;
        }
        if(roles) updateFields.roles = roles;

        const updatedUser = await User.findByIdAndUpdate(uid, updateFields, { new: true }).lean();

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating the user:', error);
        return res.status(500).json({ error: 'Server error' });
    }
};


export const deleteUser = async (req, res) => {
    try {
        const { uid } = req.query; 

        checkUid(uid);

        const deletedUser = await User.findByIdAndRemove(uid).lean();

        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(deletedUser);
    } catch (error) {
        console.error('Error when deleting the user', error);
        return res.status(500).json({ error: 'Internal server errors.' });
    }
};


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().lean();

        res.json(users);
    } catch (error) {
        console.error('Error retriveing the users:', error);
        return res.status(500).json({ error: 'Internal server errors.' });
    }
};

const checkUid=(uid)=>{
    if (!mongoose.Types.ObjectId.isValid(uid)) {
        return res.status(400).json({ error: 'The Id is not valid.' });
    }
}



