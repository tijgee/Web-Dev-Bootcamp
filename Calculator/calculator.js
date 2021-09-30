const express = require('express');
const app = express();


app.use(express.urlencoded({extended: true}));
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));



app.post("/", (req, res) => {
    let num1 = parseInt(req.body.num1);
    let num2 = parseInt(req.body.num2);
    let result = num1 + num2;
    res.send(`The result is ${result}!`)});



app.listen(3000, () => console.log('Server started on 3000'));

