import express from "express";
import postgres from "postgres";
import nodemon from "nodemon";
import cors from "cors";

const sql = postgres("postgres://localhost/");
const app = express();

//=============Middleware=======================================
app.use(express.json());
app.use(express.static("./client"));
app.use(cors());

//==============Routes====================================

//==============ERROR HANDLERS==============================================
app.use((err, req, res, mext) => {
    console.error(err);
    res.status(500).send("Internal Server Error");
})

app.listen(3000, () => {
    console.log("Server is running")
})

