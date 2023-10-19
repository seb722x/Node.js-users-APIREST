import { body, query } from "express-validator";



export const getUserDto = [
    query('uid', 'Invalid ID format').optional().isMongoId(),
    query('name', 'Invalid name format').optional().isString(),
    query('email', 'Invalid email format').optional().isEmail().normalizeEmail(),
  ];
  
export const updateUserDto = [
    query('uid', 'Invalid ID format').isMongoId(),
    body('name', 'Invalid name format').optional().isString(),
    body('email', 'Invalid email format').optional().isEmail().normalizeEmail(),
    body('otherField', 'Invalid otherField format').optional().isString(),
  ];
  
export const deleteUserDto = [
    query('uid', 'Invalid ID format').isMongoId(),
  ];
  