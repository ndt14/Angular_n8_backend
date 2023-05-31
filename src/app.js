import express from "express";
import router from "./routes/index.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'; // Thay đổi import từ 'require' sang 'import'
dotenv.config();

const app = express();

app.use(cors()); // Di chuyển lệnh app.use(cors()) lên trên đoạn mã này

app.use(express.json());

// mongoose.connect(`${process.env.API_DB}`);
mongoose.connect('mongodb://localhost:27017/web17308')
    .then(() => {
        console.log(`Database connected successfully.`);
    })
    .catch((err) => {
        console.log(`Error connecting: ${err.message}`);
    });

app.use("/api", router);

export const viteNodeApp = app;
