const express = require('express'); //commonjs
const path = require('path'); //commonjs
// import express from 'express';//es modules
require('dotenv').config();


const app = express();// app express
const port = process.env.PORT || 8888; //port => hardcode . uat .prod
const hostname = process.env.HOST_NAME;


//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
//config static files: image/css/js
app.use(express.static(path.join(__dirname, 'public')));


//khai báo route
app.get('/', (req, res) => {
    res.send('Hello World with Express with nodemon update')
})

app.get('/abc', (req, res) => {
    res.send('check ABC')
})

app.get('/xyz', (req, res) => {
    //res.send('<h1> XYZ </h1>')
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
