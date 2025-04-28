import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!' + process.env.API_KEY);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});