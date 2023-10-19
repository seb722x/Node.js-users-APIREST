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























//import UserModel from '#Schemas/user.schema.js';
//
//const userProfileController = async (req, res) => {
//    const { id } = req;
//
//    const existingUserById = await UserModel.findById(id).exec();
//    if (!existingUserById)
//        return res.status(401).send({ errors: ['Usuario no autorizado'] });
//
//    const { _id, name, surname, email } = existingUserById;
//
//    return res.send({ _id, name, surname, email });
//};
//
//export default userProfileController;
//
//
//import UserModel from '#Schemas/user.schema.js';
//import { compare } from 'bcrypt';
//
//const userUnregisterController = async (req, res) => {
//    const { id } = req;
//    const { password } = req.body;
//
//    const existingUserById = await UserModel.findById(id).exec();
//    if (!existingUserById)
//        return res.status(401).send({ errors: ['Usuario no autorizado'] });
//
//    const checkPassword = await compare(password, existingUserById.password);
//    if (!checkPassword)
//        return res.status(401).send({ errors: ['Credenciales incorrectas'] });
//
//    await existingUserById.delete();
//
//    return res.send('Usuario eliminado');
//};
//
//export default userUnregisterController;
//