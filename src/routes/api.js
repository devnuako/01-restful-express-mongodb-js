const express = require('express');

const routerAPI = express.Router();

// const { getUsersAPI } = require('../controllers/apiController')
const { getUsersAPI, postCreateUserAPI,
    putUpdateUserAPI, deleteUserAPI
} = require('../controllers/apiController')


routerAPI.get('/', (req, res) => {
    res.send(" hello world with apis")
});

routerAPI.get('/abc', (req, res) => {
    res.status(200).json({
        data: 'hello world first apis'
    })
});

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);

module.exports = routerAPI; //export default
