import mongoose from "mongoose";
import { User } from "../model/user.js";

export const getUser = async(req,res) => {
    try {
        const { uid, name, email } = req.query;

        if (!uid && !name && !email) {
            return res.status(400).json({ error: 'Debes proporcionar al menos un parámetro de búsqueda (uid, name o email).' });
        }

        let query = {};
        if (uid) {
            if (!mongoose.Types.ObjectId.isValid(uid)) {
                return res.status(400).json({ error: 'El formato del ID no es válido.' });
            }
            query._id = uid;
        }

        if (name) query.name = name;
        if (email) query.email = email;
        
        const user = await User.findOne(query).lean();

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }

        res.json( user );
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const { uid } = req.query; 

        if (!mongoose.Types.ObjectId.isValid(uid)) {
            return res.status(400).json({ error: 'El formato del ID no es válido.' });
        }
        const { name, email, otherField } = req.body;

        const updateFields = {};
        if (name) updateFields.name = name;
        if (email) updateFields.email = email;

        const updatedUser = await User.findByIdAndUpdate(uid, updateFields, { new: true }).lean();

        if (!updatedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }

        res.json(updatedUser);
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        return res.status(500).json({ error: 'Error interno del servidor.' });
    }
};


export const deleteUser = async (req, res) => {
    try {
        const { uid } = req.query; 

        if (!mongoose.Types.ObjectId.isValid(uid)) {
            return res.status(400).json({ error: 'El formato del ID no es válido.' });
        }

        const deletedUser = await User.findByIdAndRemove(uid).lean();

        if (!deletedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }

        res.json(deletedUser);
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        return res.status(500).json({ error: 'Error interno del servidor.' });
    }
};


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().lean();

        res.json(users);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        return res.status(500).json({ error: 'Error interno del servidor.' });
    }
};




