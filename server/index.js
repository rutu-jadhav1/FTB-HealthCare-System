import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from  'dotenv';
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


app.listen(port , ()=> {
    console.log('Server started on port : ' + port)
})