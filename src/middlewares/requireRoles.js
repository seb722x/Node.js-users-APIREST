import { User } from "../model/user.js";


export  const requireRole = (allowedRoles) => {
    return async (req, res, next) => {
        try {

            const user = await User.findById(req.uid).lean();
            const userRoles = user.roles 
            if (!user) throw new Error('User not found');
            
            const hasPermission = allowedRoles.some(role => userRoles.includes(role));
            if (!hasPermission) throw new Error('Unauthorized');

            next();
        } catch (error) {
            console.error(error);
            return res.status(403).json({ error: 'Forbidden' });
        }
    };
};