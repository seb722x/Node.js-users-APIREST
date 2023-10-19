import 'dotenv/config'
import './src/database/connectdb.js'

import express from 'express';
import authRouter from './src/routes/auth.route.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/auth',authRouter);
app.use(express.static('public'));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("server initialize http://localhost:"+ PORT));