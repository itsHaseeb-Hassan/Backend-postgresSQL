import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectDB} from "./config/database.js";
import router from "./Routes/userRoute.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router);

const PORT= process.env.PORT || 5000;

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log(err);
})





