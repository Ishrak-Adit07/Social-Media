const express = require('express');
const app = express();

//Default URL
app.use("/", (req, res)=>{
    res.send("Invalid URL!");
});

module.exports = app;