require('dotenv').config();
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');


const connection = require('./config/database');
// const mongoose = require('mongoose');

// const Kitten = require('./models/user');

const app = express();// app express
const port = process.env.PORT || 8888; //port => hardcode . uat .prod
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data


//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);


// simple query
// connection.query(
//     'select * from Users u',
//     function (err, results, fields) {
//         console.log(">>>results= ", results); // results contains rows returned by server
//         // console.log(">>> fields= ", fields); // fields contains extra meta data about results, if available
//     }
// );

// connection();

// app.listen(port, hostname, () => {
//     console.log(`Example app listening on port ${port}`)
// })

// const kittySchema = new mongoose.Schema({
//     name: String
// });
// const Kitten = mongoose.model('Kitten', kittySchema);
// const cat = new Kitten({ name: 'my document 01' });

// const cat = new Kitten({ name: 'My docs 01 model' });
// cat.save();


(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Backend zero app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>> Error connect to DB: ", error)
    }
})()
