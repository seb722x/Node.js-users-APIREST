import 'dotenv/config'

import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/auth');
app.use(express.static('public'));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("server initialize http://localhost:"+ PORT));