const connection = require('../config/database');
// const { getAllUsers, getUserById, updateUserById } = require('../services/CRUDService');
const { getAllUsers, getUserById,
    updateUserById, deleteUserById } = require('../services/CRUDService');

const User = require("../models/user");


const getHomepage = async (req, res) => {
    //process data
    //call model
    //res.send('Hello World vs Express! & nodemon')
    //return res.render('home.ejs')
    // let results = await getAllUsers();
    // let results = [];
    let results = await User.find({});
    return res.render('home.ejs', { listUsers: results }) // x <- y
}

const postUpdateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;

    // await updateUserById(email, city, name, userId);
    await User.updateOne({ _id: userId }, { email: email, name: name, city: city });


    // res.send(' Updated user succeed !')
    res.redirect('/');
}

const getABC = (req, res) => {
    res.send('check ABC')
}

const getXYZ = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">>> email = ", email, ' name = ', name, ' city = ', city)

    // let {email, name, city} = req.body;
    // let [results, fields] = await connection.query(
    //     `INSERT INTO Users (email, name, city) VALUES (?, ?, ?) `, [email, name, city]
    // );

    await User.create({
        email: email,
        name: name,
        city: city
    })

    res.send(' Created user succeed !')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
    // let results = await getAllUsers();
    // return res.render('home.ejs', { listUsers: results }) // x <- y
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;

    // res.render('edit.ejs')
    // let user = await getUserById(userId);
    let user = await User.findById(userId).exec();
    res.render('edit.ejs', { userEdit: user }); //x <- y

}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    // let user = await getUserById(userId);

    let user = await User.findById(userId).exec();

    res.render('delete.ejs', { userEdit: user })
}

// const postHandleRemoveUser = (req, res) => {
//     res.send('ok deleted')
// }

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;

    // await deleteUserById(id);
    let result = await User.deleteOne({
        _id: id
    })

    console.log(">>> result: ", result)
    

    res.redirect('/');
}

module.exports = {
    getHomepage, getABC, getXYZ,
    postCreateUser, getCreatePage, getUpdatePage,
    postUpdateUser, 
    postDeleteUser, postHandleRemoveUser


}
