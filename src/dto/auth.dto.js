import { body } from "express-validator";


export const registerDto = [
  body('name', 'This name is wrong')
    .trim()
    .isString(),

  body('email', 'This email is wrong')
    .trim()
    .isEmail()
    .normalizeEmail(),

  body('password', 'Incorrect password')
    .trim()
    .isLength({ min: 6 }),

  body('repassword', 'Passwords do not match')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('You did not enter the same password, check both');
      }
      return value;
    }),

  body('roles', 'Incorrect roles').isArray(),
];

export const loginDto = [
  body('email', 'This email is wrong')
    .trim()
    .isEmail()
    .normalizeEmail(),

  body('password', 'Incorrect password')
    .trim()
    .isLength({ min: 6 }),
];



