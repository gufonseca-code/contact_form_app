const express = require("express");
const mongoose =  require("mongoose");
const port = 8080;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
