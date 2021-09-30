const express = require('express');
const https = require("https");

const app = express();

app.get("/", (req, res) => res.send("Server is up and running!"));



app.listen(3000, () => console.log("Server started on port 3000;"));