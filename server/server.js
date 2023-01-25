import express from "express";
import postgres from "postgres";
import nodemon from "nodemon";
import cors from "cors";

const sql = postgres("postgres://localhost/kickstarter");
const app = express();

//=============Middleware=======================================
app.use(express.json());
app.use(express.static("./client"));
app.use(cors());

//==============Routes====================================

app.get("/projects", (req, res) => {
    sql`SELECT * FROM projects`.then(results => {
        res.send(results)
    })
    console.log('is working')
});

app.get("/projects/:id", (req, res) => {
    const id = req.params.id;
    sql`SELECT * FROM projects WHERE id = ${id}`.then(results => {
        if (results.length !== 0) {
            res.json(results[0]);
        } else {
            res.status(404);
            res.set("Content-Type", "text/plain");
            res.send("Not Found");
        };
    })
});

//==============campaign Routes====================================

app.get("/campaign", (req, res) => {
    sql`SELECT * FROM campaign`.then(results => {
        res.send(results)
    })
    console.log('is working')
});

app.get("/campaign/:id", (req, res) => {
    const id = req.params.id;
    sql`SELECT * FROM campaign WHERE id = ${id}`.then(results => {
        if (results.length !== 0) {
            res.json(results[0]);
        } else {
            res.status(404);
            res.set("Content-Type", "text/plain");
            res.send("Not Found");
        };
    })
})

//============== creator Routes====================================

app.get("/creator", (req, res) => {
    sql`SELECT * FROM creator`.then(results => {
        res.send(results)
    })
    console.log('is working')
});

app.get("/creator/:id", (req, res) => {
    const id = req.params.id;
    sql`SELECT * FROM creator WHERE id = ${id}`.then(results => {
        if (results.length !== 0) {
            res.json(results[0]);
        } else {
            res.status(404);
            res.set("Content-Type", "text/plain");
            res.send("Not Found");
        };
    })
})

//==============ERROR HANDLERS==============================================
app.use((err, req, res, mext) => {
    console.error(err);
    res.status(500).send("Internal Server Error");
})

app.listen(3000, () => {
    console.log("Server is running")
})

