import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from  'dotenv';
import { postLogin, postSignup } from './controllers/auth.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000
const MONGO_URL =process.env.MONGO_URL

app.use(express.json());
app.use(cors());

(async () => {
    const conn = await mongoose.connect(MONGO_URL);
    if(conn) {
        console.log("✅ Connected to MongoDB");
    }
})();

app.post('/signup', postSignup)
app.post('/login', postLogin)

app.listen(port , ()=> {
    console.log('Server started on port : ' + port)
})