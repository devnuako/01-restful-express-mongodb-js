const express = require('express'); //commonjs
const path = require('path'); //commonjs
// import express from 'express';//es modules

const app = express();// app express
const port = 8081; //port

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


//khai báo route
app.get('/', (req, res) => {
    res.send('Hello World with Express')
})

app.get('/abc', (req, res) => {
    res.send('check ABC')
})

app.get('/xyz', (req, res) => {
    //res.send('<h1> XYZ </h1>')
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
