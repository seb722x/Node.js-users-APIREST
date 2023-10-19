import {Router} from 'express';
import { login, register, userInfo, logout } from '../controllers/auth.controller.js';
import { validationResultMiddle } from '../middlewares/validationResultMiddle.js';
import { requireToken } from '../middlewares/requireToke.js';
import { getUser, updateUser , deleteUser, getAllUsers} from '../controllers/user.controller.js';
import { requireRole } from '../middlewares/requireRoles.js';
import { loginDto, registerDto } from '../dto/auth.dto.js';
import { deleteUserDto, getUserDto, updateUserDto } from '../dto/user.dto.js';


const router = Router();

router.post('/register',
    registerDto,
    validationResultMiddle,
    register
);

router.post('/login',
    loginDto,
    validationResultMiddle,
    login
);

router.get('/get-all-users', getAllUsers)
router.get('/find-user',getUserDto, validationResultMiddle,getUser);
router.patch('/update-user',updateUserDto, validationResultMiddle,updateUser)
router.delete('/delete-user', deleteUserDto,validationResultMiddle,deleteUser)

router.get('/testroles',requireToken, requireRole(["admin"]),getAllUsers)



router.get('/protected',requireToken, userInfo)
router.get("/logout", logout);



export default router
