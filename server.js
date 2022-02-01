const express = require("express");
const mysql = require("mysql2");
const fs = require("fs");

const PORT = process.env.PORT || 3000;
const app = express();

//set up middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection (
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "move_db"
    },
    console.log("confirm")
);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});