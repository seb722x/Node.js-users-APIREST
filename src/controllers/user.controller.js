























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